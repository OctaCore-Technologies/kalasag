export interface CoverageGap {
  id: string;
  lat: number;
  lng: number;
  /** approximate radius, in meters, of the uncovered area centered here */
  radiusMeters: number;
}

export interface PlacementSuggestion {
  lat: number;
  lng: number;
  /** estimated additional coverage area, in square meters, gained by placing a node here */
  estimatedGainSqMeters: number;
  rank: number;
}
