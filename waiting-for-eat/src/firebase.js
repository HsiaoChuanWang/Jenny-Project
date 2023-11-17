// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9f_ta6MNXQzmnFYpn9PzgaFT3AJRlg38",
  authDomain: "project-fire-6a02f.firebaseapp.com",
  projectId: "project-fire-6a02f",
  storageBucket: "project-fire-6a02f.appspot.com",
  messagingSenderId: "938279563215",
  appId: "1:938279563215:web:44ed6d2a4d9f6f921bacba",
  measurementId: "G-785SQ5G265",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //建立 Firebase App 物件
const analytics = getAnalytics(app);
const db = getFirestore(app); //database
export const storage = getStorage(app); //storage connect

export default db; //要用的地方就要用db
