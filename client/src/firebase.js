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


export const tunerValue = firebase.database().ref().child("value");

export const pitchValue = firebase.database().ref().child("pitchValue")
export const clarityValue = firebase.database().ref().child("clarityValue");


// export const GButtonActive = firebase.database().ref().child("gbuttonactive");
export const DButtonActive = firebase.database().ref().child("dbuttonactive");
export const GButtonActive = firebase.database().ref().child("gbuttonactive");


// const GbuttonClick = () => {
//   var database = firebase.database();
// 	var gbuttonactive;
// 	database.ref().on("value", function(snap){
// 		gbuttonactive = snap.val().gbuttonactive;
// 	});

//   if(gbuttonactive == 1) {
//      GButtonActive.set(0);
//      gbuttonactive = 0;
//   } else {
//      GButtonActive.set(1);
//      gbuttonactive = 1; 
//   }
// }


// const DbuttonClick = () => {
//   var database = firebase.database();
// 	var dbuttonactive;
// 	database.ref().on("value", function(snap){
// 		dbuttonactive = snap.val().dbuttonactive;
// 	});
  
//   if(dbuttonactive == 1) {
//      DButtonActive.set(0);
//      dbuttonactive = 0;
//   } else {
//      DButtonActive.set(1);
//      dbuttonactive = 1; 
//   }
// }


export const Check = () => {
  var database = firebase.database();
	var dbuttonactive;
  var gbuttonactive;

	database.ref().on("value", function(snap){
		dbuttonactive = snap.val().dbuttonactive;
	});

	database.ref().on("value", function(snap){
		gbuttonactive = snap.val().gbuttonactive;
	});

  if(gbuttonactive == 1) {
    GButtonActive.set(0);
    gbuttonactive = 0;
    DButtonActive.set(1);
    dbuttonactive = 1; 
 } else {
    GButtonActive.set(1);
    gbuttonactive = 1; 
    DButtonActive.set(0);
    dbuttonactive = 0;
 }
  
}
// нужно сделать 3 функцию которая будет различать какая кнопка была нажата с помощью айди, ее экспортировать на онклик (Check what exatly button clicked, when multiple buttons with the same selector on page)