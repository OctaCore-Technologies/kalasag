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

| Name | Department | Role |
| :--- | :--- | :--- |
| **Aquino** | IoT | Hardware, Quality Assurance, Scrum Master / Project Manager |
| **Villareal** | IoT | Hardware, Quality Assurance (Lead), Research Developer / Business Analyst |
| **Seraspe** | IoT, Web | Hardware (Lead), Backend Developer / Database Manager |
| **Tarroza** | IoT, Web | Hardware, Frontend Developer |
| **Pangilinan** | Web | Backend Developer / Database Manager, Frontend Developer |
| **Delos Santos** | Application | Backend Developer / Database Manager (Lead) |
| **Gonzal** | Application | Fullstack Developer, Frontend Developer |
| **Dayapera** | Application | Frontend Developer |

Departments map onto this repo's fronts — IoT → `firmware/`, Web → `web/frontend/` + `web/backend/`, Application → `mobile/`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the matching branch model (`firmware-main` / `web-main` / `mobile-main`) and [docs/Teams](docs/Teams) for the corresponding GitHub teams.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for branching, commit conventions, and PR workflow. See [shared/](shared/) for the data contracts shared across backend, web, mobile, and firmware, and [docs/](docs/) for architecture notes, decision records, and team pages.
