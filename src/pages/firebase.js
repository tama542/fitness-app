// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs4RUGcGjcUwGCIXACjbQmoXE8YNW6qEI",
  authDomain: "pump-fitness-37743.firebaseapp.com",
  projectId: "pump-fitness-37743",
  storageBucket: "pump-fitness-37743.firebasestorage.app",
  messagingSenderId: "628834569202",
  appId: "1:628834569202:web:2327370794a69544d9796b",
  measurementId: "G-PDXM8EL0WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export default app;