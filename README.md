# Home Assistant Configuration
This is my currently configuration of my [Home Assistant](https://home-assistant.io') server.  Currently installed onto my laptop while in the testing / proof stage.  This repo is in a constant state of flux as I learn new ways to do things, and updates happen to components and the overall architecture.  Some point in the future this will be migrated to a permanent home, on either a rasberry PI or into a virtualized environment on one of my server.

Currently there isn't anything on the device side, just phones, and existing network equipment.  The first few things will be trickling in soon though, a couple things already on hand just needing reprogrammed and others in a proof of concept stage.  The house we live in doesn't provide any sort of central heating and cooling and so many things will be related to automating of fans and heating elements for a more stable environment.

## Devices In Use
* [Sonoff Basic](http://sonoff.itead.cc/en/products/sonoff/sonoff-basic) - Used for basic on/off state devices, needs flashed with tasmota for MQTT
* Amazon echo show
* Amazon echo dot

## Devices planned
* NodeMCU w/ DHT22 - Track temperature and humidity on a per room basis.
* LifX bulbs - for more scene control in rooms
* LED digital strips - accent lighting with scene/time of day controls

## Services and software in use
* [Owntracks](http://owntracks.org/) - device tracking, uses MQTT for presence detection
* [Discord](https://discordapp.com/) - notifications
* Alexa - operate based on given intents, controls devices and can give information about the house

## Automations
* Notifications to Discord channel when sun rises, sets, people arrive home and leave home, and when any other form of automation is triggered.
* Alerts when network devices go on and offline.
* Turning off lights and appliances when nobody is home
* Guest and vacation mode - disables daily routines and presense routines depending on the mode
* Crime reports - notifications when a crime has been reported in my case within 10 miles (not supported)

## Automations Planned
* outdoor lighting based on time of day and presence.
* scenes for time of day in indidividual rooms.
