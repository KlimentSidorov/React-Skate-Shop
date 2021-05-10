import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId: process.env.REACT_APP_FIREBASE_APIID,
});

var db = firebaseApp.firestore();
var dbe = firebaseApp.firestore();
var dbp = firebaseApp.firestore();

export { db, dbe, dbp };
