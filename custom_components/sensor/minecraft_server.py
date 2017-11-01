"""
Sensor for Minecraft server status.

For more details about this platform, please refer to the documentation at
https://home-assistant.io/components/sensor.minecraft_server/
"""
import logging

import requests
import voluptuous as vol

from homeassistant.components.sensor import PLATFORM_SCHEMA
from homeassistant.helpers.entity import Entity

import homeassistant.helpers.config_validation as cv

_LOGGER = logging.getLogger(__name__)

CONF_SERVERS = 'servers'

ICON = 'mdi:minecraft'
URL = "https://use.gameapis.net/mc/query/info/"


PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
  vol.Required(CONF_SERVERS, default=[]):
    vol.All(cv.ensure_list, [cv.string]),
})

# pylint: disable=unused-argument
def setup_platform(hass, config, add_devices, discovery_info=None):
  """ Setup the Minecraft Server Platform. """
  add_devices([MinecraftServerSensor(server) for server in config.get(CONF_SERVERS)], True)

class MinecraftServerSensor(Entity):
  """ A class for the Minecraft Server. """

  def __init__(self, server):
    """ Initialize the sensor. """
    self._server = server
    self._name = self._server.partition(':')[0].replace('.', '_')
    self._state = self._data = None

  @property
  def name(self):
    """ Return the name of the sensor. """
    return self._name

  @property
  def entity_id(self):
    """ Return the entity ID. """
    return 'sensor.{}'.format(self._name)

  @property
  def state(self):
    """ Return the state of the sensor. """
    return self._state

  @property
  def device_state_attributes(self):
    """ Return the state attributes of the sensor. """
    attributes = {}
    if self._data['status'] == True:
      attributes['max_players'] = self._data['players']['max']
      attributes['motd'] = self._data['motds']['ingame']
    else:
      attributes['icon'] = ICON
    return attributes

  @property
  def unit_of_measurement(self):
    """ Return unit of measurement """
    if self._data['status'] == True:
      return "players"

  @property
  def entity_picture(self):
    """ Return the entity picture of the sensor. """
    if self._data['status'] == True:
      return self._data['favicon']

  def update(self):
    """ Update device state. """
    try:
      res = requests.get(URL + self._server)
    except OSError:
      _LOGGER.error("Host %s is not available", URL + self._server)
      self._state = None
      return

    if res.status_code == 200:
      self._data = res.json()

      if self._data['status'] == True:
        self._state = self._data['players']['online']