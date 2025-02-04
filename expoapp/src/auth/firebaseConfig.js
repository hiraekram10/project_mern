// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiW0Gy9i1UVCNysd_g5peh-sqPtYuflWw",
  authDomain: "padelpulse-7f2bc.firebaseapp.com",
  projectId: "padelpulse-7f2bc",
  storageBucket: "padelpulse-7f2bc.firebasestorage.app",
  messagingSenderId: "978502346151",
  appId: "1:978502346151:web:ba2797fe8464e345278282",
  measurementId: "G-K0S56PWF2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {auth}