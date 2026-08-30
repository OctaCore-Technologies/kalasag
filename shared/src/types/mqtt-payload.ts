/** Shape of the JSON payload the gateway node publishes over MQTT/HTTP to the backend. */
export interface GatewayUplinkPayload {
  nodeId: string;
  lat: number;
  lng: number;
  positionSource: "gps" | "manual";
  batteryPercent: number;
  signalRssi: number;
  /** ISO 8601 timestamp, set by the node at read time */
  timestamp: string;
}
