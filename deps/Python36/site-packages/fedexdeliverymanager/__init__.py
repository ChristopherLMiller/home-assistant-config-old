"""Fedex Delivery Manager."""

import json
import os
import pickle
from bs4 import BeautifulSoup
from dateutil.parser import parse
import requests
from requests.auth import AuthBase


LOGIN_URL = 'https://www.fedex.com/etc/services/fedexlogin'
TRACKING_URL = 'https://www.fedex.com/trackingCal/track'
LOGIN_REDIRECT_URL = 'https://www.fedex.com/fedextracking'
COOKIE_PATH = './fedexdeliverymanager_cookies.pickle'
DEFAULT_LOCALE = 'en_US'
HTML_PARSER = 'html.parser'
ERROR_FIND_TAG = 'b'
ERROR_FIND_ATTR = {'class': 'alertsmall'}
SHIPMENT_LIST_ACTION = 'getShipmentList'
SHIPMENT_LIST_FORMAT = 'json'
SHIPMENT_LIST_REQUEST = {
    'ShipmentListRequest': {
        'appType': 'WTRK',
        'appDeviceType': 'DESKTOP',
        'uniqueKey': '',
        'processingParameters': {},
        'pageSize': 500,
        'pageToken': '1',
        'sort': 'PRIORITY',
        'isSummaryCount': False,
        'updatedSinceTs': '',
        'shipmentFilterList': []
    }
}
ATTRIBUTION = 'Information provided by www.fedex.com'


class FedexError(Exception):
    """Fedex error."""

    pass


def _save_cookies(requests_cookiejar, filename):
    """Save cookies to a file."""
    with open(filename, 'wb') as handle:
        pickle.dump(requests_cookiejar, handle)


def _load_cookies(filename):
    """Load cookies from a file."""
    with open(filename, 'rb') as handle:
        return pickle.load(handle)


def authenticated(function):
    """Re-authenticate if session expired."""
    def wrapped(*args):
        """Wrap function."""
        try:
            return function(*args)
        except FedexError:
            _login(*args)
            return function(*args)
    return wrapped


def _login(session):
    """Login to Fedex Delivery Manager."""
    resp = session.post(LOGIN_URL, {
        'user': session.auth.username,
        'pwd': session.auth.password
    })
    parsed = BeautifulSoup(resp.text, HTML_PARSER)
    error_elem = parsed.find(ERROR_FIND_TAG, ERROR_FIND_ATTR)
    if error_elem:
        raise FedexError(error_elem.string)
    _save_cookies(session.cookies, session.auth.cookie_path)


@authenticated
def get_packages(session):
    """Get packages."""
    resp = session.post(TRACKING_URL, {
        'data': json.dumps(SHIPMENT_LIST_REQUEST),
        'action': SHIPMENT_LIST_ACTION,
        'format': SHIPMENT_LIST_FORMAT,
        'locale': session.auth.locale,
        'version': 1
    })
    data = resp.json().get('ShipmentListLightResponse')
    if not data.get('successful'):
        err = 'failed to get shipment list: {}'.format(data.get('errorList')[0]
                                                       .get('message'))
        raise FedexError(err)
    packages = []
    for package in data.get('shipmentLightList'):
        if 'trkNbr' not in package or not package['trkNbr']:
            continue
        if 'isOut' in package and package['isOut'] == '1':
            continue
        packages.append({
            'weight': package['dispPkgLbsWgt'],
            'dimensions': package['pkgDimIn'],
            'tracking_number': package['trkNbr'],
            'from': package['shpBy'],
            'shipped_from': '{} {} {} {}'.format(package['shprAddr1'], package['shprCity'],
                                                 package['shprStCD'], package['shprCntryCD']),
            'primary_status': package['keyStat'],
            'secondary_status': package['mainStat'],
            'estimated_delivery_date': (str(parse(package['estDelTs']).date())
                                        if package['estDelTs'] else ''),
            'delivery_date': str(parse(package['delTs']).date()) if package['delTs'] else ''
        })
    return packages


def get_session(username, password, locale=DEFAULT_LOCALE, cookie_path=COOKIE_PATH):
    """Get Fedex HTTP session."""
    class FedexAuth(AuthBase):  # pylint: disable=too-few-public-methods
        """Fedex authorization storage."""

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
    session.auth = FedexAuth(username, password, locale, cookie_path)
    if os.path.exists(cookie_path):
        session.cookies = _load_cookies(cookie_path)
    else:
        _login(session)
    return session
