---
title: Glossary
tags:
  - reference
---

# Glossary

Terms specific to KALASAG — see [[Architecture/System Overview]] for how these pieces fit together.

**Relay node** — an ESP32 + LoRa device running mesh firmware (Meshtastic/MeshCore); the physical unit a responder drops in the field.

**Gateway node** — a relay node that also has internet connectivity; the one node type that uplinks status/coverage data to the [[Teams/Web|backend]] via MQTT/HTTP.

**Coverage gap** — an area the console has identified as not covered by any relay node's estimated radius. See `web/backend/src/services/coverage.service.ts` (currently a `TODO` stub).

**Placement suggestion** — the console's recommended next drop point, from the grid-based greedy max-coverage algorithm. See `web/backend/src/services/placement.service.ts` (currently a `TODO` stub).

**Position source** — whether a node's coordinates came from an onboard GPS reading (`gps`) or were manually pinned by the responder in the [[Teams/Mobile|field app]] (`manual`). See `shared/src/types/node.ts`.

**RSSI** — Received Signal Strength Indicator; raw signal-strength reading reported by a node, in dBm.

**Coordination console** — the web app (`web/frontend/`) used by whoever is *directing* a deployment. Not used in the field — that's the field app's job.

**Field app** — the React Native app (`mobile/`) used by the responder physically placing nodes: BLE pairing, GPS/manual position logging, offline-first sync.
