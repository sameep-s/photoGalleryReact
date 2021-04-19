import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCg-slXUOBMmaZE1vvMVXxqCzE4Y0_hyWo",
  authDomain: "firegram-297ca.firebaseapp.com",
  projectId: "firegram-297ca",
  storageBucket: "firegram-297ca.appspot.com",
  messagingSenderId: "377063014271",
  appId: "1:377063014271:web:6fb52d215b5789098a244a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };