// import firebase from "firebase/compat/app";
// import dotenv from "dotenv";
// import "firebase/auth";
// import { getAuth } from "firebase/auth";
// dotenv.config();
// console.log(process.env.REACT_APP_FIREBASE_API_KEY)

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.REACT_APP_FIREBASE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,

    
// });

// // Initialize Firebase
// export const auth = getAuth(app);
// export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFk6PANTBF-wHMT5pLIPAJEnLu96KJ0PQ",
  authDomain: "iutedumate.firebaseapp.com",
  projectId: "iutedumate",
  storageBucket: "iutedumate.appspot.com",
  messagingSenderId: "201450120299",
  appId: "1:201450120299:web:0f11ee8be7ad6e8ae53d2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);