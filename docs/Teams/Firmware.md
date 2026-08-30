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

- Team: `@OctaCore-Technologies/firmware`
- Integration branch: `firmware-main`
- CI: `firmware-ci.yml` (`pio run` — build only, no test framework wired yet)

> [!warning] Platform version is pinned on purpose
> `platformio.ini` pins an exact `espressif32` version. If you bump it, you must also regenerate `sdkconfig.4d_systems_esp32s3_gen4_r8n16` (delete it, rebuild, commit the fresh one) — otherwise CI breaks the same way it did before this was pinned. See `firmware/README.md` for the full note.

## Related

- [[Architecture/System Overview]]
- For who's actually on this team by name, see the root [README's Team Members table](../../README.md#team-members).
