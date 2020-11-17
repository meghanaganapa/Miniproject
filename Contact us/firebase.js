import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials

    apiKey: "AIzaSyAvgPqbVLIHic0NZ8CdskMCr-H630mWGpI",
    authDomain: "contact-form-ce4e7.firebaseapp.com",
    databaseURL: "https://contact-form-ce4e7.firebaseio.com",
    projectId: "contact-form-ce4e7",
    storageBucket: "contact-form-ce4e7.appspot.com",
    messagingSenderId: "520535141633",
    appId: "1:520535141633:web:f0e0915aba48692708ff00"
  
  
});

var db = firebaseApp.firestore();

export { db };