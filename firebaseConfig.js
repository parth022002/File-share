// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqjZ32ujgDk1XpdRoppXhmN9lc0eEZhMM",
    authDomain: "ultra-airway-350119.firebaseapp.com",
    projectId: "ultra-airway-350119",
    storageBucket: "ultra-airway-350119.appspot.com",
    messagingSenderId: "197035546429",
    appId: "1:197035546429:web:656111bd744b784747d754",
    measurementId: "G-N3B0GKQCX5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
