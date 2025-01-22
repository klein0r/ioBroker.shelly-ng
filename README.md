![Logo](admin/shelly-ng.png)

# ioBroker.shelly-ng

[![NPM version](https://img.shields.io/npm/v/iobroker.shelly-ng?style=flat-square)](https://www.npmjs.com/package/iobroker.shelly-ng)
[![Downloads](https://img.shields.io/npm/dm/iobroker.shelly-ng?label=npm%20downloads&style=flat-square)](https://www.npmjs.com/package/iobroker.shelly-ng)
![node-lts](https://img.shields.io/node/v-lts/iobroker.shelly-ng?style=flat-square)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/iobroker.shelly-ng?label=npm%20dependencies&style=flat-square)

![GitHub](https://img.shields.io/github/license/klein0r/iobroker.shelly-ng?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/klein0r/iobroker.shelly-ng?logo=github&style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/klein0r/iobroker.shelly-ng?logo=github&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/klein0r/iobroker.shelly-ng?logo=github&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/klein0r/iobroker.shelly-ng?logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/klein0r/iobroker.shelly-ng/test-and-release.yml?branch=main&logo=github&style=flat-square)

## Versions

![Beta](https://img.shields.io/npm/v/iobroker.shelly-ng.svg?color=red&label=beta)
![Stable](http://iobroker.live/badges/shelly-ng-stable.svg)
![Installed](http://iobroker.live/badges/shelly-ng-installed.svg)

Integrate your Shelly next gen (Gen2+) devices into ioBroker via MQTT

## Sponsored by

[![ioBroker Master Kurs](https://haus-automatisierung.com/images/ads/ioBroker-Kurs.png)](https://haus-automatisierung.com/iobroker-kurs/?refid=iobroker-shelly-ng)

## Documentation

[🇺🇸 Documentation](./docs/en/README.md)

[🇩🇪 Dokumentation](./docs/de/README.md)

### Bluetooth Low Energy (BLU)

**Experimental** - see [documentation](https://github.com/klein0r/ioBroker.shelly-ng/blob/main/docs/en/ble-devices.md) for details (Shelly Scripting required)

Adapter version >= v6.6.0 required!

- BLU Button 1,
- BLU Door/Window
- BLU Motion

## NOT Supported devices

- Shelly Plus Wall Dimmer US
- Shelly Plus Plug US
- Shelly Pro EM 2x50A
- USB powered UVC LED strip

## Sentry

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

## Troubleshooting after installation

### TypeError: xmlserializer.Builder is not a constructor

execute

`cd /opt/iobroker/node_modules/iobroker.shelly npm install xml2js@0.4.23`

## Changelog

<!--
  Placeholder for the next version (at the beginning of the line):
  ### **WORK IN PROGRESS**
-->
### **WORK IN PROGRESS**

NodeJS >= 20.x and js-controller >= 6 is required

## License

The MIT License (MIT)

Copyright (c) 2025 Matthias Kleine <info@haus-automatisierung.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
