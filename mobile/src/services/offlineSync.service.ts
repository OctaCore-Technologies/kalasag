import type { GatewayUplinkPayload } from 'shared';
import { enqueue, drainQueue } from '../storage/localDb';

// TODO: call flushQueuedRegistrations() on connectivity-regained events (NetInfo listener).
export async function queueNodeRegistration(payload: GatewayUplinkPayload): Promise<void> {
  await enqueue(payload);
}

export async function flushQueuedRegistrations(
  send: (payload: GatewayUplinkPayload) => Promise<void>,
): Promise<void> {
  const queued = await drainQueue();
  for (const payload of queued) {
    await send(payload);
  }
}
