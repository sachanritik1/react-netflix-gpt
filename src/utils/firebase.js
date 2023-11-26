// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnlPtvrm3_XED0Mk4_cyGJUWZpU5VRCxE",
  authDomain: "netflix-gpt-44d7e.firebaseapp.com",
  projectId: "netflix-gpt-44d7e",
  storageBucket: "netflix-gpt-44d7e.appspot.com",
  messagingSenderId: "966590433511",
  appId: "1:966590433511:web:f69f30beb9507802817a42",
  measurementId: "G-D6HQK3ZYT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
