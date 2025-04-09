import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDap0YriDePdFDuWJyoRRgcn5aVWXBDvcQ",
  authDomain: "prepai-26655.firebaseapp.com",
  projectId: "prepai-26655",
  storageBucket: "prepai-26655.firebasestorage.app",
  messagingSenderId: "244375186273",
  appId: "1:244375186273:web:f91222bd1c9bb3ba3df320",
  measurementId: "G-5QCNK7BGWH",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);