// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf7IJoKbCyK_4h_QaG1RdrLzx32dX60LI",
  authDomain: "myflixgpt-27d6a.firebaseapp.com",
  projectId: "myflixgpt-27d6a",
  storageBucket: "myflixgpt-27d6a.appspot.com",
  messagingSenderId: "1022930830634",
  appId: "1:1022930830634:web:d97ada14dc49a9d8ed8a53",
  measurementId: "G-7S8LSWVEKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Export Firebase authentication
export const auth = getAuth();