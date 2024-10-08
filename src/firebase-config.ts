import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1U-Fvylmg-afw0cGW1p6CzNuE39qsmFQ",
  authDomain: "shop-nhac-cu.firebaseapp.com",
  projectId: "shop-nhac-cu",
  storageBucket: "shop-nhac-cu.appspot.com",  
  messagingSenderId: "134799735433",
  appId: "1:134799735433:web:77e58dfe4bed7751b26458",
  measurementId: "G-K930L7PJ6F"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(firebaseApp)
export const db = getFirestore(firebaseApp);