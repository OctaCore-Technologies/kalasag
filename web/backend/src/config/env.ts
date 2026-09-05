import "dotenv/config";

/**
 * Application environment configuration loaded from environment variables.
 * Provides server port, MQTT broker URL, and Firebase credentials.
 */
export const env = {
  /** HTTP server port (default: 4000) */
  port: Number(process.env.PORT ?? 4000),
  /** MQTT broker connection URL for ingesting node telemetry */
  mqttBrokerUrl: process.env.MQTT_BROKER_URL ?? "mqtt://localhost:1883",
  /** Firebase Admin SDK configuration for Firestore synchronization */
  firebase: {
    /** Firebase project ID */
    projectId: process.env.FIREBASE_PROJECT_ID ?? "",
    /** Firebase service account email */
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL ?? "",
    /** Firebase service account private key */
    privateKey: process.env.FIREBASE_PRIVATE_KEY ?? "",
  },
};
