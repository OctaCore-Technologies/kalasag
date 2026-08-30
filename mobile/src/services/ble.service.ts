import { BleManager, type Device } from 'react-native-ble-plx';

const manager = new BleManager();

// TODO: filter by KALASAG node service UUID once firmware defines it.
export function scanForNodes(onDeviceFound?: (device: Device) => void): void {
  manager.startDeviceScan(null, null, (error, device) => {
    if (error || !device) {
      return;
    }
    onDeviceFound?.(device);
  });
}

export function stopScan(): void {
  manager.stopDeviceScan();
}
