"""UPS My Choice."""
# pylint: disable=wrong-import-position

import json
try:
    from json.decoder import JSONDecodeError
except ImportError:
    JSONDecodeError = ValueError
import os
import pickle
from bs4 import BeautifulSoup
from dateutil.parser import parse
import requests
from requests.auth import AuthBase


LOGIN_URL = 'https://www.ups.com/lasso/login'
DELIVERIES_URL = 'https://wwwapps.ups.com/mcdp'
SERVICE_URL = 'https://wwwapps.ups.com/mcdps/service'
COOKIE_PATH = './upsmychoice_cookies.pickle'
UPS_JSON_PREAMBLE_SIZE = 18
DEFAULT_LOCALE = 'en_US'
HTML_PARSER = 'html.parser'
TOKEN_FIND_TAG = 'input'
TOKEN_FIND_ATTR = {'id': 'mcdph_token0'}
TID_FIND_TAG = 'input'
TID_FIND_ATTR = {'id': 'mcdph_tid'}
ERROR_FIND_TAG = 'p'
ERROR_FIND_ATTR = {'class': 'error'}
CSRF_FIND_TAG = 'input'
CSRF_FIND_ATTR = {'name': 'CSRFToken'}
VALUE_ATTR = 'value'
ATTRIBUTION = 'Information provided by www.ups.com'


class UPSError(Exception):
    """UPS error."""

    pass


def _save_cookies(requests_cookiejar, filename):
    """Save cookies to a file."""
    with open(filename, 'wb') as handle:
        pickle.dump(requests_cookiejar, handle)


def _load_cookies(filename):
    """Load cookies from a file."""
    with open(filename, 'rb') as handle:
        return pickle.load(handle)


def _get_params(locale):
    """HTTP GET params."""
    return {'loc': locale}


def _parsed_date(date):
    """Parse a date."""
    return str(parse(date).date()) if date else ''


def _login(session):
    """Login to UPS."""
    resp = session.get(LOGIN_URL, params=_get_params(session.auth.locale))
    parsed = BeautifulSoup(resp.text, HTML_PARSER)
    csrf = parsed.find(CSRF_FIND_TAG, CSRF_FIND_ATTR).get(VALUE_ATTR)
    resp = session.post(LOGIN_URL, {
        'userID': session.auth.username,
        'password': session.auth.password,
        'loginAction': 'X',
        'CSRFToken': csrf,
        'loc': session.auth.locale
    })
    if resp.status_code == 403:
        raise UPSError('login failure')
    parsed = BeautifulSoup(resp.text, HTML_PARSER)
    error = parsed.find(ERROR_FIND_TAG, ERROR_FIND_ATTR)
    if error and error.string:
        raise UPSError(error.string.strip())
    _save_cookies(session.cookies, session.auth.cookie_path)


def authenticated(function):
    """Re-authenticate if session expired."""
    def wrapped(*args):
        """Wrap function."""
        try:
            return function(*args)
        except UPSError:
            _login(*args)
            return function(*args)
    return wrapped


@authenticated
def get_packages(session):
    """Get deliveries in progress and completed."""
    resp = session.get(DELIVERIES_URL, params=_get_params(session.auth.locale))
    parsed = BeautifulSoup(resp.text, HTML_PARSER)
    token_elem = parsed.find(TOKEN_FIND_TAG, TOKEN_FIND_ATTR)
    tid_elem = parsed.find(TID_FIND_TAG, TID_FIND_ATTR)
    if not token_elem or not tid_elem:
        raise UPSError('failed to find token or tid')
    token = token_elem.get(VALUE_ATTR)
    tid = tid_elem.get(VALUE_ATTR)
    resp = session.post(SERVICE_URL, {
        'token': token,
        'uid': session.auth.username,
        'callType': 'allShipments',
        'tid': tid,
        'loc': session.auth.locale
    })
    try:
        packages = []
        data = json.loads(resp.text[UPS_JSON_PREAMBLE_SIZE:])
        shipments = data['shipmentContainer']['inboundShipments'] + \
            data['shipmentContainer']['historyShipments']
        for shipment in shipments:
            from_location = '{}, {}, {}'.format(shipment['sfc'],
                                                shipment['sfs'],
                                                shipment['sfcn'])
            estimated_date = _parsed_date(shipment['sddfd'])
            actual_date = _parsed_date(shipment['dd'])
            packages.append({
                'tracking_number': shipment['tn'],
                'status': shipment['sts'],
                'from': shipment['sfn'],
                'from_location': from_location,
                'estimated_delivery_date': estimated_date,
                'estimated_delivery_timeframe': shipment['sdtfd'],
                'delivery_date': actual_date
            })
        return packages
    except JSONDecodeError:
        raise UPSError('failed to parse json')


def get_session(username, password, locale=DEFAULT_LOCALE,
                cookie_path=COOKIE_PATH):
    """Get UPS HTTP session."""
    class UPSAuth(AuthBase):  # pylint: disable=too-few-public-methods
        """UPS authorization storage."""

        def __init__(self, username, password, locale, cookie_path):
            """Init."""
            self.username = username
            self.password = password
            self.locale = locale
            self.cookie_path = cookie_path

        def __call__(self, r):
            """Call is no-op."""
            return r

    session = requests.session()
    session.auth = UPSAuth(username, password, locale, cookie_path)
    if os.path.exists(cookie_path):
        session.cookies = _load_cookies(cookie_path)
    else:
        _login(session)
    return session
