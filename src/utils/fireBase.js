// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWdv4EH-TLptqIg93Ny03tFUNEJY4XbVc",
  authDomain: "netflixclone-55b9a.firebaseapp.com",
  projectId: "netflixclone-55b9a",
  storageBucket: "netflixclone-55b9a.appspot.com",
  messagingSenderId: "137969652602",
  appId: "1:137969652602:web:30255b56b323c8f1013cc3",
  measurementId: "G-DF1YEPF87P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
