import "dotenv/config";

export const env = {
  port: Number(process.env.PORT ?? 4000),
  mqttBrokerUrl: process.env.MQTT_BROKER_URL ?? "mqtt://localhost:1883",
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID ?? "",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL ?? "",
    privateKey: process.env.FIREBASE_PRIVATE_KEY ?? "",
  },
};
