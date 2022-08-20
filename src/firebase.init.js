// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFC0YNuu4_ZL46n3wTEZChEc-uacugvWw",
  authDomain: "project-sunshine-96d55.firebaseapp.com",
  projectId: "project-sunshine-96d55",
  storageBucket: "project-sunshine-96d55.appspot.com",
  messagingSenderId: "486238286842",
  appId: "1:486238286842:web:9c3e5876afdde95cc4aa43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;