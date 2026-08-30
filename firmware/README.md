# Firmware - KALASAG Relay Node

This directory contains the embedded codebase for the KALASAG relay node, running on the ESP32-S3 architecture. The node's core mesh relay behavior is provided by an existing open-source mesh firmware (Meshtastic or MeshCore) rather than being written from scratch — this firmware's job is integration and glue: GPS position logging, BLE pairing with the field app, and (on the gateway node only) uplinking status data to the backend.

## Hardware & Tech Stack

- **Microcontroller:** ESP32-S3 (Config: `4d_systems_esp32s3_gen4_r8n16`)
- **Environment:** PlatformIO
- **Radio:** LoRa module for multi-hop mesh relay
- **Key Peripherals:** GPS module (auto position logging on GPS-equipped nodes), BLE (pairing/registration with the field app), battery/signal monitoring

> `platformio.ini` pins an exact `espressif32` platform version. Leaving it unpinned lets CI silently pull a newer ESP-IDF release whose Kconfig options don't match the committed `sdkconfig.*` file, which breaks the build. If you bump the pinned version, delete `sdkconfig.4d_systems_esp32s3_gen4_r8n16` and let it regenerate against the new version, then commit the regenerated file.

## Node Roles

- **Relay node:** runs mesh firmware, relays messages, reports battery/signal/position.
- **Gateway node:** a relay node with internet connectivity that additionally uplinks node status and coverage data to the backend via MQTT/HTTP.

---

## Directory Structure

- `src/`: Main application entrypoint — mesh firmware init, calls into `lib/` modules.
- `lib/`: Custom, reusable internal libraries (LoRa/mesh integration, GPS logging, BLE pairing, gateway uplink).
- `include/`: Header files, global configurations, and unified GPIO pin mappings.
- `test/`: Unit tests for firmware logic.

---

## Developer Setup

Because our 5-person team develops across different operating systems (Windows and Linux), we rely entirely on **PlatformIO** to isolate the C++ toolchain and prevent local compiler conflicts.

1. Install the **PlatformIO IDE** extension in VS Code.
2. Open the `firmware/Software_Engineering` folder. (PlatformIO requires its folder to be the root of the workspace to initialize properly).
3. Allow PlatformIO a few minutes to automatically read the `platformio.ini` file and download the correct ESP32 toolchains and libraries.
4. Click the PlatformIO **Build** button (the checkmark icon in the bottom status bar) to verify your local environment compiles successfully.

---

## Flashing the Device

1. Connect the ESP32-S3 to your machine via USB.
2. Ensure you have the proper USB-to-UART bridge drivers installed for your OS.
3. Click the PlatformIO **Upload** button (the right-arrow icon in the bottom status bar).
4. Click the **Serial Monitor** button (the plug icon) to view the live logs.
