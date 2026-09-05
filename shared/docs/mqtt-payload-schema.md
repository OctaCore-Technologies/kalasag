# Gateway Uplink Payload Schema

This is the contract of record between firmware (C/C++) and the backend. Firmware cannot import the TypeScript types in `shared/src/types/`, so this document is authoritative — update it first when the schema changes, then mirror the change into `shared/src/types/mqtt-payload.ts`.

## Topic

The gateway node publishes to MQTT topic `kalasag/nodes/<nodeId>/status` (or POSTs the same JSON body to the backend's HTTP ingest endpoint when MQTT isn't available).

## Payload (JSON)

```json
{
  "nodeId": "string",
  "lat": 0.0,
  "lng": 0.0,
  "positionSource": "gps | manual",
  "batteryPercent": 0,
  "signalRssi": 0,
  "timestamp": "2026-08-30T00:00:00Z"
}
```

| Field | Type | Notes |
|---|---|---|
| `nodeId` | string | Unique per physical node, assigned at BLE pairing time by the field app. |
| `lat` / `lng` | number | Decimal degrees. From onboard GPS if fitted, otherwise the last manually-pinned position synced from the field app. |
| `positionSource` | `"gps"` \| `"manual"` | Lets the console distinguish confirmed GPS fixes from responder-pinned estimates. |
| `batteryPercent` | number (0-100) | |
| `signalRssi` | number | Raw RSSI reading, dBm. |
| `timestamp` | string (ISO 8601) | Set by the node at read time, not by the backend on receipt. |

Mirrors `shared/src/types/mqtt-payload.ts` (`GatewayUplinkPayload`).
