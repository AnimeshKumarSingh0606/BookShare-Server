const firebase=require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyCd3YHxnX4XkHArr_OB9tUttbApI65JNVI",
    authDomain: "bookshare-backend.firebaseapp.com",
    projectId: "bookshare-backend",
    storageBucket: "bookshare-backend.appspot.com",
    messagingSenderId: "1011561122493",
    appId: "1:1011561122493:web:9e247818fbf0bfd95505d4",
    measurementId: "G-38Y9V3FPJL"
  };

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();


