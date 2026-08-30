/**
 * Represents an area with insufficient mesh network coverage.
 */
export interface CoverageGap {
  /** Unique identifier for the gap */
  id: string;
  /** Latitude of gap center in decimal degrees */
  lat: number;
  /** Longitude of gap center in decimal degrees */
  lng: number;
  /** approximate radius, in meters, of the uncovered area centered here */
  radiusMeters: number;
}

/**
 * Represents a recommended location for deploying the next relay node.
 */
export interface PlacementSuggestion {
  /** Latitude of suggested placement in decimal degrees */
  lat: number;
  /** Longitude of suggested placement in decimal degrees */
  lng: number;
  /** estimated additional coverage area, in square meters, gained by placing a node here */
  estimatedGainSqMeters: number;
  /** Priority ranking (lower is better) */
  rank: number;
}
