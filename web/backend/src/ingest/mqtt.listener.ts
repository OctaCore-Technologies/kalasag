import mqtt from "mqtt";
import type { GatewayUplinkPayload } from "shared";
import { env } from "../config/env.js";

/**
 * Starts the MQTT listener that subscribes to node status updates from gateway nodes.
 *
 * @returns {mqtt.MqttClient} The connected MQTT client instance
 */
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
