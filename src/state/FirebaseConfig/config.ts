// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAknQKPD5YfNdVOIGyNuBuZQ5B4bP9j3EE",
  authDomain: "medtracker-9131d.firebaseapp.com",
  projectId: "medtracker-9131d",
  storageBucket: "medtracker-9131d.appspot.com",
  messagingSenderId: "109632163727",
  appId: "1:109632163727:web:5d3272798ce4abcb8145fa",
  measurementId: "G-XWRHT39964",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
