import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase'
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDy1UaundT3hteXpQO_45ZU_8h1-oIGnuQ",
  authDomain: "login-d6034.firebaseapp.com",
  projectId: "login-d6034",
  storageBucket: "login-d6034.appspot.com",
  messagingSenderId: "90626733121",
  appId: "1:90626733121:web:f2bc0781b5646e297d42c0"
};

const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export default { auth, db };
