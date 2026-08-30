import firestore from '@react-native-firebase/firestore';

// TODO: sync queued registrations to Firestore when connectivity allows, mirroring backend's firebase.sync.ts.
export const db = firestore();
