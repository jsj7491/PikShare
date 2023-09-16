import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDFUnhdwBIaxLQfWrZNxohgcukgFL7JF_8",
  authDomain: "pikshare-8eb02.firebaseapp.com",
  projectId: "pikshare-8eb02",
  storageBucket: "pikshare-8eb02.appspot.com",
  messagingSenderId: "515603989308",
  appId: "1:515603989308:web:d883e773595cbf73695439"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };