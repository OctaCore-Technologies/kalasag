jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

import type { GatewayUplinkPayload } from 'shared';
import { flushQueuedRegistrations, queueNodeRegistration } from '../src/services/offlineSync.service';

const samplePayload: GatewayUplinkPayload = {
  nodeId: 'node-1',
  lat: 14.5995,
  lng: 120.9842,
  positionSource: 'manual',
  batteryPercent: 87,
  signalRssi: -72,
  timestamp: '2026-08-30T00:00:00Z',
};

test('queued registrations are flushed via the provided sender and then cleared', async () => {
  await queueNodeRegistration(samplePayload);

  const sent: GatewayUplinkPayload[] = [];
  await flushQueuedRegistrations(async (payload) => {
    sent.push(payload);
  });

  expect(sent).toEqual([samplePayload]);

  const sentAgain: GatewayUplinkPayload[] = [];
  await flushQueuedRegistrations(async (payload) => {
    sentAgain.push(payload);
  });
  expect(sentAgain).toEqual([]);
});
