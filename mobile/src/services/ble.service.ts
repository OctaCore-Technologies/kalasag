import { BleManager, type Device } from 'react-native-ble-plx';

const manager = new BleManager();

/**
 * Scans for nearby KALASAG relay nodes via Bluetooth Low Energy.
 *
 * @param {(device: Device) => void} [onDeviceFound] - Optional callback invoked when a node is discovered
 */
// TODO: filter by KALASAG node service UUID once firmware defines it.
export function scanForNodes(onDeviceFound?: (device: Device) => void): void {
  manager.startDeviceScan(null, null, (error, device) => {
    if (error || !device) {
      return;
    }
    onDeviceFound?.(device);
  });
}

/**
 * Stops the active BLE scan for relay nodes.
 */
export function stopScan(): void {
  manager.stopDeviceScan();
}
