import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzqbpF5WpD7jwzbyNp-wblirw-SsLShy4",
  authDomain: "house-marketplace-app-dc9b0.firebaseapp.com",
  projectId: "house-marketplace-app-dc9b0",
  storageBucket: "house-marketplace-app-dc9b0.appspot.com",
  messagingSenderId: "1085899929052",
  appId: "1:1085899929052:web:bccd2a0b2c1db9b1eecb19",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
