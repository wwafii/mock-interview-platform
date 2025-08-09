// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs_lKKZHvfrsce8OWJof3FVmPp2kM_HLQ",
  authDomain: "prepwise-94ad7.firebaseapp.com",
  projectId: "prepwise-94ad7",
  storageBucket: "prepwise-94ad7.firebasestorage.app",
  messagingSenderId: "330427128882",
  appId: "1:330427128882:web:4b09112f7bb8a02586302b",
  measurementId: "G-FKZDP8W75Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);