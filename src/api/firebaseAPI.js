// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCup1LF3Ak2hulkkLBB7-MvCRzj3HD6qY0",
  authDomain: "react-e-commerce-web-app-a7df1.firebaseapp.com",
  projectId: "react-e-commerce-web-app-a7df1",
  storageBucket: "react-e-commerce-web-app-a7df1.appspot.com",
  messagingSenderId: "626727353577",
  appId: "1:626727353577:web:4d26b82613486e6a9c8478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;