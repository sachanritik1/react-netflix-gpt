// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgIvc8v2HYz3C-P43x8mMsGiZIQj877xE",
  authDomain: "netflix-gpt-22e43.firebaseapp.com",
  projectId: "netflix-gpt-22e43",
  storageBucket: "netflix-gpt-22e43.appspot.com",
  messagingSenderId: "437159890672",
  appId: "1:437159890672:web:ae37dae431841ed626fc35",
  measurementId: "G-6S30JLTBH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
