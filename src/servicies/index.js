// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS0bmxZOxp0Ye49n4w2e6cxuGFN7-tmQg",
  authDomain: "dietetica-carrazza.firebaseapp.com",
  projectId: "dietetica-carrazza",
  storageBucket: "dietetica-carrazza.appspot.com",
  messagingSenderId: "260402644565",
  appId: "1:260402644565:web:6d801e0b3f568a1ce876dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db