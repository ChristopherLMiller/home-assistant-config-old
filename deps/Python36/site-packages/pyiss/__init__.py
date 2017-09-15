from datetime import datetime
import requests
from voluptuous import Schema, Required, All, Any, Length, Range


class ISS(object):
    """Representation of the ISS details."""
    API_URL = "http://api.open-notify.org/"
    API_CURRENT_LOCATION = "iss-now.json"
    API_PASS_TIMES = "iss-pass.json"
    API_PEOPLE = "astros.json"

    def __init__(self):
        return

    def people_in_space(self):
        """Number of people in space.
        Be aware that does not mean these people are inside the ISS (it does
        most of the time), They can be travelling to and from the station.

        :return: Return a dict with number of people in space right now and
        their name and their craft
        :rtype: dict
        """
        data = requests.get('{}{}'.format(self.API_URL, self.API_PEOPLE),
                            timeout=5)

        if data.status_code is 200:
            return data.json()
        else:
            raise Exception("Error server n {}".format(data.status_code))

    def current_location(self):
        """Current location of the ISS.

        :return: A dict with latitude and longitude of ISS
        :rtype: dict
        """
        data = requests.get('{}{}'.format(
            self.API_URL, self.API_CURRENT_LOCATION), timeout=5)

        if data.status_code is 200:
            return data.json()['iss_position']
        else:
            raise Exception("Error server n {}".format(data.status_code))

    def pass_times(self, latitude, longitude, altitude=None, number=None):
        """The next pass times of the ISS.

        :param latitude: latitude in degrees of location you want iss pass
        above
        :type latitude: float
        :param longitude: longitude in degrees of location you want iss pass
        above
        :type longitude: float
        :param altitude: altitude in meters of location you want iss pass
        above, default is 100 when not given
        :type altitude: float
        :param number: number of next pass above the location, default is 5
        if not given. Min is 1, max is 100
        :type number: int
        :return: a list of the next pass of the ISS with the risetime and
        the duration
        :rtype: list
        """
        # Check input
        schema = Schema({
            Required('lat'): All(Any(int, float), Range(min=-80, max=80)),
            Required('long'): All(Any(int, float), Range(min=-180, max=180)),
            'alt': Any(None, All(Any(int, float), Range(min=0, max=10000))),
            'number': Any(None, All(int, Range(min=1, max=100)))
        })
        schema({
            'lat' : latitude, 'long': longitude, 'alt' : altitude,
            'number': number})

        # Build request
        payload = {'lat': latitude, 'lon': longitude}

        if altitude is not None:
            payload['alt'] = altitude

        if number is not None:
            payload['n'] = number

        data = requests.get('{}{}'.format(self.API_URL, self.API_PASS_TIMES),
                            params=payload, timeout=5)

        # Check error
        if data.status_code is 200:
            return data.json()['response']
        else:
            raise Exception("Error server n {}".format(data.status_code))

    def number_of_people_in_space(self):
        """The number of people onboard the ISS at the moment.

        :return: The number of people in space right now
        :rtype: int
        """
        return self.people_in_space()['number']

    def next_rise(self, latitude, longitude, altitude=None):
        """The next rise of the ISS.

        :param latitude: latitude in degrees of location you want iss pass
        above
        :type latitude: float
        :param longitude: longitude in degrees of location you want iss pass
        above
        :type longitude: float
        :param altitude: altitude in meters of location you want iss pass
        above, default is 100 when not given
        :type altitude: float
        :return: Return the next date when ISS will be over 10 degree above the
        horizon
        :rtype: datetime
        """
        rise = self.pass_times(latitude, longitude, altitude,
                               2)
        timestamp = rise[0]['risetime']

        return datetime.fromtimestamp(timestamp)

    def is_ISS_above(self, latitude, longitude, altitude=None):
        """Location of the ISS regardin the current location.

        :param latitude: latitude in degrees of location you want iss pass
        above
        :type latitude: float
        :param longitude: longitude in degrees of location you want iss pass
        above
        :type longitude: float
        :param altitude: altitude in meters of location you want iss pass
        above, default is 100 when not given
        :type altitude: float
        :return: True if the ISS is above the location, False if not
        :rtype: bool
        """
        test = self.pass_times(latitude, longitude, altitude, 2)
        # 2 results where asked so if API return only 1, that mean ISS is
        # above the location
        return len(test) is 1

if __name__ == '__main__':
    iss = ISS()
