import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

/**
 * Screen component displaying an interactive map with relay node positions and coverage areas.
 *
 * @returns {React.JSX.Element} The rendered map screen
 */
// TODO: render node pins from api.service.ts and highlight coverage gaps.
export function MapScreen(): React.JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} />
    </View>
  );
}
