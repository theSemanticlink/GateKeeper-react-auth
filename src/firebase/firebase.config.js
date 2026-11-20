// ============================================
// Firebase Configuration File
// ============================================
// Step 1: Import the required functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Step 2: Config object copied from Firebase Console
// (Firebase Console > Project Settings > Your apps > Config)
const firebaseConfig = {
  apiKey: "AIzaSyCrgp2wEbkT8LjiAU-CpW8C83bxaLsvD7s",
  authDomain: "gatekeeper-react-auth.firebaseapp.com",
  projectId: "gatekeeper-react-auth",
  storageBucket: "gatekeeper-react-auth.firebasestorage.app",
  messagingSenderId: "107637146237",
  appId: "1:107637146237:web:d4c47978b12bf50760a714"
};


// Step 3: Initialize Firebase app with the config
const app = initializeApp(firebaseConfig);

// Step 4: Export the Auth service - we'll use this throughout the app
// getAuth() gives us the Firebase Authentication instance
export const auth = getAuth(app);
