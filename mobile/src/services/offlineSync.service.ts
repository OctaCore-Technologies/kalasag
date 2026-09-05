import type { GatewayUplinkPayload } from 'shared';
import { enqueue, drainQueue } from '../storage/localDb';

/**
 * Queues a node registration for later synchronization when offline.
 *
 * @param {GatewayUplinkPayload} payload - The node registration data to queue
 * @returns {Promise<void>} Promise that resolves when the payload is queued
 */
// TODO: call flushQueuedRegistrations() on connectivity-regained events (NetInfo listener).
export async function queueNodeRegistration(payload: GatewayUplinkPayload): Promise<void> {
  await enqueue(payload);
}

/**
 * Flushes all queued node registrations to the backend when connectivity is restored.
 *
 * @param {(payload: GatewayUplinkPayload) => Promise<void>} send - Function to send each payload to the backend
 * @returns {Promise<void>} Promise that resolves when all queued registrations are sent
 */
export async function flushQueuedRegistrations(
  send: (payload: GatewayUplinkPayload) => Promise<void>,
): Promise<void> {
  const queued = await drainQueue();
  for (const payload of queued) {
    await send(payload);
  }
}
