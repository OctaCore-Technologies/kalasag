import { cert, initializeApp } from "firebase-admin/app";
import { env } from "../config/env.js";

// TODO: sync node registration/position data with the mobile app's offline-sync queue.
export function initFirebase() {
  if (!env.firebase.projectId) {
    return null;
  }

  return initializeApp({
    credential: cert({
      projectId: env.firebase.projectId,
      clientEmail: env.firebase.clientEmail,
      privateKey: env.firebase.privateKey.replace(/\\n/g, "\n"),
    }),
  });
}
