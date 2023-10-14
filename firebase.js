// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL93wU94__dSVX-U-PckxGmgPwn_e29O0",
  authDomain: "test-d4807.firebaseapp.com",
  projectId: "test-d4807",
  storageBucket: "test-d4807.appspot.com",
  messagingSenderId: "583302360172",
  appId: "1:583302360172:web:b218d65c7176cf3bbcfc49",
  measurementId: "G-8WWKFHXGV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);