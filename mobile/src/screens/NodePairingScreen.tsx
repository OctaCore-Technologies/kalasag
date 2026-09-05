import React from 'react';
import { Button, View } from 'react-native';
import { scanForNodes } from '../services/ble.service';

/**
 * Screen component for pairing new relay nodes via Bluetooth and registering them with position data.
 *
 * @returns {React.JSX.Element} The rendered node pairing screen
 */
// TODO: BLE scan/connect flow, register node id + position with the backend on confirm.
export function NodePairingScreen(): React.JSX.Element {
  return (
    <View>
      <Button title="Scan for nodes" onPress={() => scanForNodes()} />
    </View>
  );
}
