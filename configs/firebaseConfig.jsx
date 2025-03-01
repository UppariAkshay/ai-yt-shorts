// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-yt-shorts.firebaseapp.com",
  projectId: "ai-yt-shorts",
  storageBucket: "ai-yt-shorts.firebasestorage.app",
  messagingSenderId: "913325621980",
  appId: "1:913325621980:web:65cca81cb8b5f9bcb22a19",
  measurementId: "G-GSHREMXQ03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)