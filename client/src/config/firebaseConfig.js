// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP9m4ZdsKjpevDKM9K0FbkQncUnULPu3E",
  authDomain: "mern-remove-bg.firebaseapp.com",
  projectId: "mern-remove-bg",
  storageBucket: "mern-remove-bg.appspot.com",
  messagingSenderId: "28332047771",
  appId: "1:28332047771:web:d183a2d17ff86b3703753e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);