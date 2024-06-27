// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXC0GA3abW_mhhT1kWvLd8VS3eST3KABw",
  authDomain: "react-journal-1e78f.firebaseapp.com",
  projectId: "react-journal-1e78f",
  storageBucket: "react-journal-1e78f.appspot.com",
  messagingSenderId: "720930085809",
  appId: "1:720930085809:web:0a91303695b3b06ceabb90"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);