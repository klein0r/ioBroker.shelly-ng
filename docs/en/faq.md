![Logo](../../admin/shelly-ng.png)

# ioBroker.shelly-ng

This is the English documentation - [🇩🇪 German version](../de/faq.md)

## I don't know anything about MQTT, is it hard to use?

No, just configure your Shelly devices as documented [here](protocol-mqtt.md) and the Shelly adapter will handle everything else.

## Is it possible to connect the Shelly adapter to an existing MQTT broker?

It is not possible to connect the Shelly adapter to an existing MQTT broker in your network. The Shelly adapter starts an own MQTT broker which is running on the (non default) port ``1882`` to avoid conflicts with other MQTT brokers on the same system.
