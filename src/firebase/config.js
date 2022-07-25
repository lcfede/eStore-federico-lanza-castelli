// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export const db = getFirestore(app);