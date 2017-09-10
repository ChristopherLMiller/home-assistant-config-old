import json
import logging
import requests
import time
import warnings

"""For testing purposes:
logging.basicConfig(filename='pyunifi.log', level=logging.WARN,
                    format='%(asctime)s %(message)s')
"""
log = logging.getLogger(__name__)


class APIError(Exception):
    pass


def retry_login(func, *args, **kwargs):
    """To reattempt login if requests exception(s) occur at time of call"""
    def wrapper(*args, **kwargs):
        try:
            try:
                return func(*args, **kwargs)
            except (requests.exceptions.RequestException,
                    APIError) as err:
                log.warn("Failed to perform %s due to %s" % (func, err))
                controller = args[0]
                controller._login(controller.version)
                return func(*args, **kwargs)
        except Exception as err:
            raise APIError(err)
    return wrapper


class Controller(object):

    """Interact with a UniFi controller.

    Uses the JSON interface on port 8443 (HTTPS) to communicate with a UniFi
    controller. Operations will raise unifi.controller.APIError on obvious
    problems (such as login failure), but many errors (such as disconnecting a
    nonexistant client) will go unreported.

    >>> from unifi.controller import Controller
    >>> c = Controller('192.168.1.99', 'admin', 'p4ssw0rd')
    >>> for ap in c.get_aps():
    ...     print 'AP named %s with MAC %s' % (ap.get('name'), ap['mac'])
    ...
    AP named Study with MAC dc:9f:db:1a:59:07
    AP named Living Room with MAC dc:9f:db:1a:59:08
    AP named Garage with MAC dc:9f:db:1a:59:0b

    """

    def __init__(self, host, username, password, port=8443,
                 version='v5', site_id='default', ssl_verify=True):
        """Create a Controller object.

        Arguments:
            host     -- the address of the controller host; IP or name
            username -- the username to log in with
            password -- the password to log in with
            port     -- the port of the controller host
            version  -- the base version of the controller API [v4|v5]
            site_id  -- the site ID to connect to
            ssl_verify -- Verify the controllers SSL certificate, default=True,
                          can also be False or "path/to/custom_cert.pem"
        """

        self.host = host
        self.port = port
        self.version = version
        self.username = username
        self.password = password
        self.site_id = site_id
        self.url = 'https://' + host + ':' + str(port) + '/'
        self.api_url = self.url + self._construct_api_path(version)

        self.ssl_verify = ssl_verify

        if ssl_verify is False:
            warnings.simplefilter("default", category=requests.packages.
                                  urllib3.exceptions.InsecureRequestWarning)

        self.session = requests.Session()
        self.session.verify = ssl_verify

        log.debug('Controller for %s', self.url)
        self._login(version)

    def _jsondec(self, data):
        obj = json.loads(data)
        if 'meta' in obj:
            if obj['meta']['rc'] != 'ok':
                raise APIError(obj['meta']['msg'])
        if 'data' in obj:
            return obj['data']
        else:
            return obj

    @retry_login
    def _read(self, url, params=None):
        # Try block to handle the unifi server being offline.
        r = self.session.get(url, params=params)
        return self._jsondec(r.text)

    def _write(self, url, json=None):
        r = self.session.post(url, json=json)
        return self._jsondec(r.text)

    def _construct_api_path(self, version):
        """Returns valid base API path based on version given

           The base API path for the URL is different
           depending on UniFi server version.
           Default returns correct path for latest
           known stable working versions.

        """

        V3_PATH = 'api/s/' + self.site_id + '/'

        if(version == 'v2'):
            raise APIError("v2 controllers no longer supported")
        if(version == 'v3'):
            raise APIError("v3 controllers no longer supported")
        if(version == 'v4'):
            return V3_PATH
        if(version == 'v5'):
            return V3_PATH
        else:
            raise APIError("Unknown controller version:", version)

    def _login(self, version):
        log.debug('login() as %s', self.username)

        params = {'username': self.username, 'password': self.password}
        login_url = self.url

        if version == 'v4' or version == 'v5':
            login_url += 'api/login'
            # XXX Why doesn't passing in the dict work?
            params = "{'username':'" + self.username
            params += "', 'password':'" + self.password + "'}"
        else:
            raise APIError("Unknown controller version:", version)

        r = self.session.post(login_url, params)

        if r.status_code is not 200:
            raise APIError("Login failed - status code: %i" % r.status_code)

    def _logout(self):
        log.debug('logout()')
        self._write(self.url + 'logout')

    def get_alerts(self):
        """Return a list of all Alerts."""

        return self._read(self.api_url + 'list/alarm')

    def get_alerts_unarchived(self):
        """Return a list of Alerts unarchived."""

        js = json.dumps({'_sort': '-time', 'archived': False})
        params = urllib.urlencode({'json': js})
        return self._read(self.api_url + 'list/alarm', params)

    def get_statistics_last_24h(self):
        """Returns statistical data of the last 24h"""

        return self.get_statistics_24h(time())

    def get_statistics_24h(self, endtime):
        """Return statistical data last 24h from time"""

        js = {'attrs': ["bytes", "num_sta", "time"],
              'start': int(endtime - 86400) * 1000,
              'end': int(endtime - 3600) * 1000}
        return self._write(self.api_url + 'stat/report/hourly.site', params)

    def get_events(self):
        """Return a list of all Events."""

        return self._read(self.api_url + 'stat/event')

    def get_aps(self):
        """Return a list of all APs,
        with significant information about each.
        """

        # Set test to 0 instead of NULL
        params = {'_depth': 2, 'test': 0}
        return self._read(self.api_url + 'stat/device', params)

    def get_client(self, mac):
        """Get details about a specific client"""

        # stat/user/<mac> works better than stat/sta/<mac>
        # stat/sta seems to be only active clients
        # stat/user includes known but offline clients
        return self._read(self.api_url + 'stat/user/' + mac)[0]

    def get_clients(self):
        """Return a list of all active clients,
        with significant information about each.
        """
        return self._read(self.api_url + 'stat/sta')

    def get_users(self):
        """Return a list of all known clients,
        with significant information about each.
        """

        return self._read(self.api_url + 'list/user')

    def get_user_groups(self):
        """Return a list of user groups with its rate limiting settings."""

        return self._read(self.api_url + 'list/usergroup')

    def get_wlan_conf(self):
        """Return a list of configured WLANs
        with their configuration parameters.
        """

        return self._read(self.api_url + 'list/wlanconf')

    def _run_command(self, command, params={}, mgr='stamgr'):
        log.debug('_run_command(%s)', command)
        params.update({'cmd': command})
        return self._write(self.api_url + 'cmd/' + mgr, json=params)

    def _mac_cmd(self, target_mac, command, mgr='stamgr'):
        log.debug('_mac_cmd(%s, %s)', target_mac, command)
        params = {'mac': target_mac}
        return self._run_command(command, params, mgr)

    def block_client(self, mac):
        """Add a client to the block list.

        Arguments:
            mac -- the MAC address of the client to block.

        """

        self._mac_cmd(mac, 'block-sta')

    def unblock_client(self, mac):
        """Remove a client from the block list.

        Arguments:
            mac -- the MAC address of the client to unblock.

        """

        self._mac_cmd(mac, 'unblock-sta')

    def disconnect_client(self, mac):
        """Disconnect a client.

        Disconnects a client, forcing them to reassociate. Useful when the
        connection is of bad quality to force a rescan.

        Arguments:
            mac -- the MAC address of the client to disconnect.

        """

        self._mac_cmd(mac, 'kick-sta')

    def restart_ap(self, mac):
        """Restart an access point (by MAC).

        Arguments:
            mac -- the MAC address of the AP to restart.

        """

        self._mac_cmd(mac, 'restart', 'devmgr')

    def restart_ap_name(self, name):
        """Restart an access point (by name).

        Arguments:
            name -- the name address of the AP to restart.

        """

        if not name:
            raise APIError('%s is not a valid name' % str(name))
        for ap in self.get_aps():
            if ap.get('state', 0) == 1 and ap.get('name', None) == name:
                self.restart_ap(ap['mac'])

    def archive_all_alerts(self):
        """Archive all Alerts
        """
        js = {'cmd': 'archive-all-alarms'}
        answer = self._read(self.api_url + 'cmd/evtmgr', json=js)

    def create_backup(self):
        """Ask controller to create a backup archive file,
           response contains the path to the backup file.

        Warning: This process puts significant load on the controller may
                 render it partially unresponsive for other requests.
        """

        js = {'cmd': 'backup'}
        r = self.session.post(self.api_url + 'cmd/system', json=js)

        data = self._jsondec(r.text)
        return data[0]['url']

    def get_backup(self, download_path=None, target_file='unifi-backup.unf'):
        """Get a backup archive from a controller.

        Arguments:
            target_file -- Filename or full path to download the backup archive
            to, should have .unf extension for restore.

        """
        if not download_path:
            download_path = self.create_backup()

        r = self.session.get(self.url + download_path)

        backupfile = open(target_file, 'w')
        backupfile.write(str(r.content))
        backupfile.close()

    def authorize_guest(self, guest_mac, minutes, up_bandwidth=None,
                        down_bandwidth=None, byte_quota=None, ap_mac=None):
        """
        Authorize a guest based on his MAC address.

        Arguments:
            guest_mac     -- the guest MAC address : aa:bb:cc:dd:ee:ff
            minutes       -- duration of the authorization in minutes
            up_bandwith   -- up speed allowed in kbps (optional)
            down_bandwith -- down speed allowed in kbps (optional)
            byte_quota    -- quantity of bytes allowed in MB (optional)
            ap_mac        -- access point MAC address (UniFi >= 3.x) (optional)
        """
        cmd = 'authorize-guest'
        js = {'mac': guest_mac, 'minutes': minutes}

        if up_bandwidth:
            js['up'] = up_bandwidth
        if down_bandwidth:
            js['down'] = down_bandwidth
        if byte_quota:
            js['bytes'] = byte_quota
        if ap_mac:
            js['ap_mac'] = ap_mac

        return self._run_command(cmd, params=js)

    def unauthorize_guest(self, guest_mac):
        """
        Unauthorize a guest based on his MAC address.

        Arguments:
            guest_mac -- the guest MAC address : aa:bb:cc:dd:ee:ff
        """
        cmd = 'unauthorize-guest'
        js = {'mac': guest_mac}

        return self._run_command(cmd, params=js)
