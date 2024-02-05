// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-325cc.firebaseapp.com",
  projectId: "realestate-325cc",
  storageBucket: "realestate-325cc.appspot.com",
  messagingSenderId: "377018493281",
  appId: "1:377018493281:web:01f397f539725d696e7d20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);