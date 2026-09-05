# KALASAG

KALASAG is a low-cost, field-durable LoRa mesh relay system for disaster response. Field-durable ESP32+LoRa relay nodes (running Meshtastic/MeshCore mesh firmware) extend communication coverage into signal-dead areas, while a coordination console guides the deploying team on where to place the next node, and a field companion app lets the responder register and position each node as it's dropped.

## Architecture

```
Relay Node (ESP32 + LoRa, mesh firmware)
   │  LoRa multi-hop mesh
   ▼
Gateway Node (internet-connected)
   │  MQTT / HTTP uplink
   ▼
Backend (Express + TypeScript)
   │  serves coverage/placement API, ingests gateway data
   ├──► Web Console (React) — live coverage map, placement suggestions, node health
   └──► Field App (React Native) — BLE pairing, GPS/manual position logging, offline sync
```

## Repository Layout

| Path | Contents |
|---|---|
| `web/frontend/` | Coordination console — React + TypeScript (Vite) |
| `web/backend/` | API server — Express + TypeScript |
| `mobile/` | Field companion app — React Native + TypeScript |
| `firmware/` | ESP32 + LoRa relay node firmware — PlatformIO |
| `shared/` | Cross-component data contracts (node/coverage/MQTT payload types) |

## Tech Stack

| Component | Stack |
|---|---|
| Web console | React, TypeScript, Vite |
| Backend | Express, TypeScript, Node.js |
| Mobile app | React Native, TypeScript |
| Firmware | ESP32-S3, PlatformIO, Meshtastic/MeshCore |

## Team Members

| Name             | Role / Focus Area                                       |
| :--------------- | :------------------------------------------------------ |
| **Aquino**       | Project Manager / Scrum Master / Hardware Designer / QA |
| **Seraspe**      | Hardware Specialist / Database Manager                  |
| **Dayapera**     | Frontend Developer / UI/UX Designer                     |
| **Gonzal**       | Fullstack Developer                                     |
| **Pangilinan**   | Fullstack Developer                                     |
| **Tarroza**      | Backend Developer / Hardware Specialist                 |
| **Delos Santos** | Backend Developer / Database Manager                    |
| **Villareal**    | Hardware Designer / Researcher / QA                     |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for branching, commit conventions, and PR workflow. See [shared/](shared/) for the data contracts shared across backend, web, mobile, and firmware.
