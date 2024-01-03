// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-a76c0.firebaseapp.com",
  projectId: "mern-estate-app-a76c0",
  storageBucket: "mern-estate-app-a76c0.appspot.com",
  messagingSenderId: "742594607634",
  appId: "1:742594607634:web:a63540af5eb7ffc71bf6cb",
  measurementId: "G-RCKWB049KH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);