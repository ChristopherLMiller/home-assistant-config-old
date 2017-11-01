"""
Sensor to display all overheard aircraft with certain distance.

For more details about this platform, please refer to the documentation at
https://home-assistant.io/components/sensor.aircraft_overhead
"""
import logging

import requests
import voluptuous as vol

from homeassistant.components.sensor import PLATFORM_SCHEMA
from homeassistant.helpers.entity import Entity

import homeassistant.helpers.config_validation as cv

_LOGGER = logging.getLogger(__name__)

CONF_LATITUDE = "lat"
CONF_LONGITUDE = "long"
CONF_RADIUS = "radius"

ICON = "mdi:airplane"
URL = "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json"

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
  vol.Optional(CONF_RADIUS, default=100): cv.positive_int,
  vol.Optional(CONF_LATITUDE): cv.latitude,
  vol.Optional(CONF_LONGITUDE): cv.longitude,
})

def setup_platform(hass, config, add_devices, discovery_info=None):
  """ Configure the platform and add the sensors. """

  latitude = config.get(CONF_LATITUDE, hass.config.latitude)
  longitude = config.get(CONF_LONGITUDE, hass.config.longitude)
  radius = config.get(CONF_RADIUS)

  add_devices([AircraftOverheadSensor(latitude, longitude, radius)], True)

class AircraftOverheadSensor(Entity):
  """ A class for the Aircraft Overhead. """

  def __init__(self, latitude, longitude, radius):
    """ Initialize the sensor. """
    self._latitude = latitude
    self._longitude = longitude
    self._radius = radius
    self._state = self._data = None

  @property
  def name(self):
    """ Return the name of the sensor. """
    return "Aircraft Overhead"

  @property
  def entity_id(self):
    """ Return the entity ID. """
    return "sensor.aircraft_overhead"

  @property
  def state(self):
    """ Return the state of the sensor. """
    return self._state

  @property
  def unit_of_measurement(self):
    """ Return the unit of measuremen. """
    return "planes"

  @property
  def device_state_attributes(self):
    """ return the state attributes of the sensor. """
    attributes = {}
    count = 1
    for aircraft in self._data['acList']:
      callsign = ""

      if 'Call' in aircraft:
        callsign = aircraft['Call']
      else:
        callsign = aircraft['Reg']

      attributes["icon"] = ICON
      attributes["Aircraft " + str(count)] = ("Callsign: " + callsign + " Model: " + aircraft['Mdl'])
      count = count + 1

    attributes['attribution'] = "Data provided by ADB-S Exchange"
    return attributes

  def update(self):
    """" Update device state. """
    try:
      payload = {
        "lat" : self._latitude,
        "lng": self._longitude,
        "fDstL": 0,
        "fDstU": self._radius
      }
      res = requests.get(URL, payload)
    except OSError:
      _LOGGER.error("Unable to fetch overhead aircraft")
      self._state = None
      return

    if res.status_code == 200:
      self._data = res.json()

      self._state = len(self._data['acList'])