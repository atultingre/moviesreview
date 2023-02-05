// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYFmH2MLjdXb19UomgCwqoDYHWhfvW-Dg",
  authDomain: "moviesreview-4568.firebaseapp.com",
  projectId: "moviesreview-4568",
  storageBucket: "moviesreview-4568.appspot.com",
  messagingSenderId: "744123996485",
  appId: "1:744123996485:web:ffb20d0c2d6880a893062c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;