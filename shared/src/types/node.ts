/**
 * Current connectivity status of a relay node.
 */
export type NodeStatus = "online" | "offline" | "unknown";

/**
 * Represents a KALASAG mesh relay node with its position, health, and connectivity data.
 */
export interface RelayNode {
  /** Unique identifier for the node */
  id: string;
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
  /** true if lat/lng came from an onboard GPS reading rather than a manual pin */
  positionSource: "gps" | "manual";
  /** Battery level as a percentage (0-100) */
  batteryPercent: number;
  /** Signal strength in dBm (Received Signal Strength Indicator) */
  signalRssi: number;
  /** ISO 8601 timestamp of last communication */
  lastSeen: string;
  /** Current connectivity status */
  status: NodeStatus;
  /** Whether this node serves as an internet-connected gateway */
  isGateway: boolean;
}
