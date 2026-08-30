---
title: Firmware Team
tags:
  - team
aliases:
  - Firmware
---

# Firmware Team

Owns the relay/gateway node firmware — integration and glue around an existing open-source mesh firmware, not a mesh protocol built from scratch.

## Owns

- `firmware/Software_Engineering/` — ESP32-S3, PlatformIO, Meshtastic/MeshCore

## GitHub

`@OctaCore-Technologies/firmware` team · branch off `firmware-main` · CI: `firmware-ci.yml` (`pio run`)

Heads up: `platformio.ini` pins the ESP-IDF platform version on purpose — see `firmware/README.md` before bumping it, or CI breaks the same way it did before it was pinned.

## Related

- [[Architecture/System Overview]]
- For who's actually on this team by name, see the root [README's team section](../../README.md#team).
