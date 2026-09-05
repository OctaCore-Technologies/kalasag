import AsyncStorage from '@react-native-async-storage/async-storage';
import type { GatewayUplinkPayload } from 'shared';

const QUEUE_KEY = 'kalasag:pending-registrations';

/**
 * Reads the queue of pending node registrations from local storage.
 *
 * @returns {Promise<GatewayUplinkPayload[]>} Promise resolving to array of queued payloads
 */
async function readQueue(): Promise<GatewayUplinkPayload[]> {
  const raw = await AsyncStorage.getItem(QUEUE_KEY);
  return raw ? (JSON.parse(raw) as GatewayUplinkPayload[]) : [];
}

/**
 * Adds a node registration payload to the offline sync queue.
 *
 * @param {GatewayUplinkPayload} payload - The node registration data to enqueue
 * @returns {Promise<void>} Promise that resolves when the payload is saved
 */
export async function enqueue(payload: GatewayUplinkPayload): Promise<void> {
  const existing = await readQueue();
  existing.push(payload);
  await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(existing));
}

/**
 * Reads and clears the queue of pending node registrations.
 *
 * @returns {Promise<GatewayUplinkPayload[]>} Promise resolving to all queued payloads
 */
export async function drainQueue(): Promise<GatewayUplinkPayload[]> {
  const queued = await readQueue();
  await AsyncStorage.removeItem(QUEUE_KEY);
  return queued;
}
