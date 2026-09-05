import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapScreen } from '../screens/MapScreen';
import { NodeListScreen } from '../screens/NodeListScreen';
import { NodePairingScreen } from '../screens/NodePairingScreen';

/**
 * Type definition for the root navigation stack parameters.
 */
export type RootStackParamList = {
  Map: undefined;
  NodeList: undefined;
  NodePairing: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigation component for the KALASAG mobile app.
 * Provides navigation between Map, NodeList, and NodePairing screens.
 *
 * @returns {React.JSX.Element} The navigation container with configured screens
 */
export function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="NodeList" component={NodeListScreen} />
        <Stack.Screen name="NodePairing" component={NodePairingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
