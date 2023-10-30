// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAnpbeWvf_NZi62YakWm1s04hfQPodbEhQ",
  authDomain: "react-fireabase-chat-app.firebaseapp.com",
  projectId: "techconnects-6c2bd",
  storageBucket: "react-fireabase-chat-app.appspot.com",
  messagingSenderId: "880511893822",
  appId: "1:880511893822:web:682c67688e990f6524ac6f",
  measurementId: "G-HYV0YHQ1KM",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default app;
