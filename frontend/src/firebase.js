// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA4xTHOTghwcSEgH5tDnUg-wJ5YZuNP4Pw",
  authDomain: "react-fireabase-chat-app.firebaseapp.com",
  projectId: "techConnect-e0e01", // Update this line
  storageBucket: "react-fireabase-chat-app.appspot.com",
  messagingSenderId: "880511893822",
  appId: "1:880511893822:web:682c67688e990f6524ac6f",
  measurementId: "G-HYV0YHQ1KM",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default app;
