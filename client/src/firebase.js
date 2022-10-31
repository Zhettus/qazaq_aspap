import firebase from "firebase/compat/app";
import 'firebase/compat/database'
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDJ-7Mlyzzszl8HDL83SLGYXkxl4Hu8rRg",

  authDomain: "qazaq-aspap.firebaseapp.com",

  databaseURL: "https://qazaq-aspap-default-rtdb.firebaseio.com",

  projectId: "qazaq-aspap",

  storageBucket: "qazaq-aspap.appspot.com",

  messagingSenderId: "284484164686",

  appId: "1:284484164686:web:88c24eafce6e8ea27a771f",

  measurementId: "G-KVL4T6QWNX"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* 
const databseRef = firebase.database.ref()
export const notesRef = database.child("notes")
export default firebase */

export const tunerValue = firebase.database().ref().child();