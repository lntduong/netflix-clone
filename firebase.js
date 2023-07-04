// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7-x_rFZEmJSQIcw49HttNpkURUjMFLNU",
  authDomain: "netflix-yang.firebaseapp.com",
  projectId: "netflix-yang",
  storageBucket: "netflix-yang.appspot.com",
  messagingSenderId: "909089328705",
  appId: "1:909089328705:web:8235b02fc00b07ae1a00c0",
  measurementId: "G-V598DG6SNE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }