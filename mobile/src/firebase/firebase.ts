import firestore from '@react-native-firebase/firestore';

/**
 * Firestore database instance for offline-first node registration synchronization.
 * Mirrors data with the backend's Firebase sync service.
 */
// TODO: sync queued registrations to Firestore when connectivity allows, mirroring backend's firebase.sync.ts.
export const db = firestore();
