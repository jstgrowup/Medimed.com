
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDful2K4ALB9lasd6n0DgOI-ae0odqVV9w",
  authDomain: "netmedsotp.firebaseapp.com",
  projectId: "netmedsotp",
  storageBucket: "netmedsotp.appspot.com",
  messagingSenderId: "1038132214110",
  appId: "1:1038132214110:web:43279509a353a3eba477cf",
  measurementId: "G-EW3C65RW3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;