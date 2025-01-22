![Logo](../../admin/shelly-ng.png)

# ioBroker.shelly-ng

This is the English documentation - [🇩🇪 German version](../de/debug.md)

## Enable debugging

1. The debug mode has to be enabled for each Shelly device separately by using the web configuration of the device or by using the state ``<device-id>.Sys.debugEnabled``.
2. To log the debug messages to the default ioBroker log file (log level ``info``), the instance configuration flag ``Log debug messages`` has to be enabled (default is ``false``).

All debug messages will start with ``[Shelly Debug Message] ...``
