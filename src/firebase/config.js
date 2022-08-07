
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


//Configurations
const firebaseConfig = {
  apiKey: "AIzaSyBxOS21aHCDQT3yHlnz6OMyQZ3Meol2IQ4",
  authDomain: "ecommerce-lanzacastelli.firebaseapp.com",
  projectId: "ecommerce-lanzacastelli",
  storageBucket: "ecommerce-lanzacastelli.appspot.com",
  messagingSenderId: "189641780160",
  appId: "1:189641780160:web:fc7719e3ba4c3106437625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);