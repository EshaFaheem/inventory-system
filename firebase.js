// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdrT1UVLPA1V5O4XRNBPX5BDbtwW5ffrQ",
  authDomain: "inventory-system-ade52.firebaseapp.com",
  projectId: "inventory-system-ade52",
  storageBucket: "inventory-system-ade52.appspot.com",
  messagingSenderId: "883226883198",
  appId: "1:883226883198:web:526368c8459d167b20942f",
  measurementId: "G-856SLHGLKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};
