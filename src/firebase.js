import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBD6zjc7luc5--g2PQK1xowWo9LgOFWOJQ",
    authDomain: "botogram-74df1.firebaseapp.com",
    projectId: "botogram-74df1",
    storageBucket: "botogram-74df1.appspot.com",
    messagingSenderId: "572210606744",
    appId: "1:572210606744:web:6d8672623a37f0489616ed"
  }).auth();