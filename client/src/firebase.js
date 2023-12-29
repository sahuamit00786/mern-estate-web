// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prince-estate-32947.firebaseapp.com",
  projectId: "prince-estate-32947",
  storageBucket: "prince-estate-32947.appspot.com",
  messagingSenderId: "989752458927",
  appId: "1:989752458927:web:0c523f5f97824787f35e5a",
  measurementId: "G-RCKWB049KH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);