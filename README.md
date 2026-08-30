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
| `docs/` | Obsidian knowledge base — architecture notes, ADRs, team pages (open as its own vault, see [docs/README.md](docs/README.md)) |

## Tech Stack

| Component | Stack |
|---|---|
| Web console | React, TypeScript, Vite |
| Backend | Express, TypeScript, Node.js |
| Mobile app | React Native, TypeScript |
| Firmware | ESP32-S3, PlatformIO, Meshtastic/MeshCore |

## Team

Three departments map onto this repo's fronts — see [CONTRIBUTING.md](CONTRIBUTING.md) for the matching branch model (`firmware-main` / `web-main` / `mobile-main`) and [docs/Teams](docs/Teams) for the corresponding GitHub teams.

### IoT (`firmware/`)

| Name | Role |
| :--- | :--- |
| **Seraspe** | Hardware (Lead) |
| **Aquino** | Hardware |
| **Tarroza** | Hardware |
| **Villareal** | Hardware |

### Web (`web/frontend/`, `web/backend/`)

| Name | Role |
| :--- | :--- |
| **Seraspe** | Backend Developer / Database Manager |
| **Pangilinan** | Backend Developer / Database Manager, Frontend Developer |
| **Tarroza** | Frontend Developer |

### Application (`mobile/`)

| Name | Role |
| :--- | :--- |
| **Delos Santos** | Backend Developer / Database Manager (Lead) |
| **Gonzal** | Fullstack Developer, Frontend Developer |
| **Dayapera** | Frontend Developer |

### Cross-team roles

| Name | Role |
| :--- | :--- |
| **Aquino** | Scrum Master / Project Manager, Quality Assurance |
| **Villareal** | Quality Assurance (Lead), Research Developer / Business Analyst |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for branching, commit conventions, and PR workflow. See [shared/](shared/) for the data contracts shared across backend, web, mobile, and firmware, and [docs/](docs/) for architecture notes, decision records, and team pages.
