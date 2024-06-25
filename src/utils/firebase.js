// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbibJAkN3fFJOCvlt4jIEPtblVFe-NP0g",
  authDomain: "netflixgpt-5e18c.firebaseapp.com",
  projectId: "netflixgpt-5e18c",
  storageBucket: "netflixgpt-5e18c.appspot.com",
  messagingSenderId: "587968511451",
  appId: "1:587968511451:web:16bb9a9f4fb3ae449b7bfe",
  measurementId: "G-8M4DZXDVMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();