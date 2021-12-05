// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS0N7HPugnE7oQ0ibHfZeKixN-z54JUqg",
  authDomain: "twitter-app-34bd6.firebaseapp.com",
  projectId: "twitter-app-34bd6",
  storageBucket: "twitter-app-34bd6.appspot.com",
  messagingSenderId: "144523834829",
  appId: "1:144523834829:web:e50ded4e09c7f6a1c94084",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
