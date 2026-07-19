/**
 * Firebase setup - OPTIONAL in this clean independent version.
 * 
 * Firestore writes are disabled by default to avoid free-tier RESOURCE_EXHAUSTED.
 * Primary persistence is localStorage + Catbox.
 * 
 * If you want to use your own Firebase project, replace the config below
 * and re-enable writes carefully (watch quota).
 */

import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type Auth } from "firebase/auth";

// Replace with your own Firebase project config if needed.
// Left empty / placeholder so the app can run without Firebase.
const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID || "",
  appId: process.env.FIREBASE_APP_ID || "",
  apiKey: process.env.FIREBASE_API_KEY || "",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
  // No named databaseId - use default (undefined) to avoid AI Studio specific DB
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;

try {
  if (firebaseConfig.projectId && firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    // Use default database (no named databaseId from AI Studio)
    db = getFirestore(app);
    auth = getAuth(app);
  } else {
    console.warn("[firebase] No Firebase config provided. Running without Firebase (localStorage + Catbox only).");
  }
} catch (e) {
  console.warn("[firebase] Failed to initialize Firebase:", e);
}

export { db, auth };
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signOut, onAuthStateChanged };
