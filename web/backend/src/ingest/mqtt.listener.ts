import mqtt from "mqtt";
import type { GatewayUplinkPayload } from "shared";
import { env } from "../config/env.js";

// TODO: on message, validate payload against GatewayUplinkPayload and persist/broadcast it.
export function startMqttListener() {
  const client = mqtt.connect(env.mqttBrokerUrl);

  client.on("connect", () => {
    client.subscribe("kalasag/nodes/+/status");
  });

  client.on("message", (_topic, message) => {
    const payload = JSON.parse(message.toString()) as GatewayUplinkPayload;
    void payload;
  });

  return client;
}
