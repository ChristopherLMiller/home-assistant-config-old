# Home Assistant Configuration

This is my currently configuration of my [Home Assistant](https://home-assistant.io') server. Currently installed onto my laptop while in the testing / proof stage. This repo is in a constant state of flux as I learn new ways to do things, and updates happen to components and the overall architecture. Some point in the future this will be migrated to a permanent home, on either a rasberry PI or into a virtualized environment on one of my server.

With my household in great flux and constantly someone on the go the automations are rather limited, however i'm automating what i can. Hopefully some point more things dealing with heating and cooling as well as security will start showing up.

## Devices In Use

- 5x [Sonoff Basic](http://sonoff.itead.cc/en/products/sonoff/sonoff-basic) - Used for basic on/off state devices, needs flashed with tasmota for MQTT
- Amazon echo show
- Google Home Mini x 2
- Google Home Hub
- NodeMCU w/ DHT22 - Temperature tracking. Currently just monitoring one room.

## Devices planned

- NodeMCU - monitor each room of the house for temp and humidity as well as motion.
- LifX bulbs - for more scene control in rooms
- LED digital strips - accent lighting with scene/time of day controls
- August Smart Locks - need to keep original deadbolts stock for landlord, august makes good comprimise i think
- Yee home security cameras - 24/7 live feed of the entire house, outside monitoring and key areas indoors
- Amazon fire tablet 7" - General control of the house including lighting and alarm control.
- [HASwitchPlate](https://github.com/aderusha/HASwitchPlate) - replace standard light switches in each room with touch enabled screens.
- [ThermOS](https://mholgatem.github.io/ThermOS/) - rasberry PI thermostat controller with scheduling etc. modifying to add MQTT support.

## Services and software in use

- [FIND](https://www.internalpositioning.com/) - device tracking for inside the home, can determine location based on WIFI signal strength
- [Discord](https://discordapp.com/) - notifications
- Google TTS - voice notifications and feedback of things happening around the house
- Alexa - operate based on given intents, controls devices and can give information about the house
- Google Home - basically the same as Alexa

## Automations

- Notifications to Discord channel when sun rises, sets, people arrive home and leave home, and when any other form of automation is triggered
- Alerts when network devices go on and offline
- Turning off lights and appliances when nobody is home
- Guest and vacation mode - disables daily routines and presense routines depending on the mode
- Bedtime and wake scripts to turn on and off key lights and eventually trigger door locks and alarms etc as people come and go
- Outdoor lighting based on time of day and day of the week for home business needs

## Automations Planned

- outdoor lighting based on time of day and presence.
- scenes for time of day in indidividual rooms.

## Holidays

- Built in support for different holidays and lighting conditions they may require, including configurations for differernt smart switchs to turn on and off based on time of day ETC.
- ability for users outside the house to go to webpage and control lighting and eventually music.
