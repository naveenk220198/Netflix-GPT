// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX0nDVd6f-wEcbGYd_JMtJ_6ws-wLB2ZM",
  authDomain: "netflixgpt-ffbb0.firebaseapp.com",
  projectId: "netflixgpt-ffbb0",
  storageBucket: "netflixgpt-ffbb0.appspot.com",
  messagingSenderId: "775271917225",
  appId: "1:775271917225:web:b4e2427b00475097632bb8",
  measurementId: "G-K38M5B5QRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
