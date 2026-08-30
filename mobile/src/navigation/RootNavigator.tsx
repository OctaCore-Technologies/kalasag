import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapScreen } from '../screens/MapScreen';
import { NodeListScreen } from '../screens/NodeListScreen';
import { NodePairingScreen } from '../screens/NodePairingScreen';

export type RootStackParamList = {
  Map: undefined;
  NodeList: undefined;
  NodePairing: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
