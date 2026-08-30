export type NodeStatus = "online" | "offline" | "unknown";

export interface RelayNode {
  id: string;
  lat: number;
  lng: number;
  /** true if lat/lng came from an onboard GPS reading rather than a manual pin */
  positionSource: "gps" | "manual";
  batteryPercent: number;
  signalRssi: number;
  lastSeen: string;
  status: NodeStatus;
  isGateway: boolean;
}
