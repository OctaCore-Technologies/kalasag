import AsyncStorage from '@react-native-async-storage/async-storage';
import type { GatewayUplinkPayload } from 'shared';

const QUEUE_KEY = 'kalasag:pending-registrations';

async function readQueue(): Promise<GatewayUplinkPayload[]> {
  const raw = await AsyncStorage.getItem(QUEUE_KEY);
  return raw ? (JSON.parse(raw) as GatewayUplinkPayload[]) : [];
}

export async function enqueue(payload: GatewayUplinkPayload): Promise<void> {
  const existing = await readQueue();
  existing.push(payload);
  await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(existing));
}

/** Reads and clears the queue. */
export async function drainQueue(): Promise<GatewayUplinkPayload[]> {
  const queued = await readQueue();
  await AsyncStorage.removeItem(QUEUE_KEY);
  return queued;
}
