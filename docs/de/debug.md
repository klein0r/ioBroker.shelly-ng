![Logo](../../admin/shelly-ng.png)

# ioBroker.shelly-ng

This is the German documentation - [🇺🇸 English version](../en/debug.md)

## Debugging aktivieren

1. Der Debug-Modus muss auf jedem Shelly-Gerät separat aktiviert werden. Dazu kann entweder die Weboberfläche genutzt werden, oder der Zustand `<device-id>.Sys.debugEnabled`.
2. Damit Debug-Meldungen in das Standard-Log vom ioBroker geschrieben werden (Log-Level `info`), muss in der Instanz die Konfiguration `Debug-Meldungen protokollieren` aktiviert werden (Standard ist `false`).

Alle Debug-Meldungen im Log beginnen mit `[Shelly Debug Message] ...`
