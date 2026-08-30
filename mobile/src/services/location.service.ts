import Geolocation from 'react-native-geolocation-service';

/**
 * Geographic coordinates (latitude and longitude).
 */
export interface Coordinates {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
}

/**
 * Gets the device's current GPS position with high accuracy.
 *
 * @returns {Promise<Coordinates>} Promise resolving to current latitude and longitude
 * @throws {Error} If location permission is denied or GPS times out
 */
export function getCurrentPosition(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => resolve({ lat: position.coords.latitude, lng: position.coords.longitude }),
      (error) => reject(error),
      { enableHighAccuracy: true, timeout: 15000 },
    );
  });
}
