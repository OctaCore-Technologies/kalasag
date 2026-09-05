/**
 * Shape of the JSON payload the gateway node publishes over MQTT/HTTP to the backend.
 * Contains node telemetry and position data.
 */
export interface GatewayUplinkPayload {
  /** Unique identifier of the reporting node */
  nodeId: string;
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
  /** Whether position came from GPS or manual entry */
  positionSource: "gps" | "manual";
  /** Battery level as a percentage (0-100) */
  batteryPercent: number;
  /** Signal strength in dBm */
  signalRssi: number;
  /** ISO 8601 timestamp, set by the node at read time */
  timestamp: string;
}
