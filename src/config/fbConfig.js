import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBn8t-9XIETvPOVgqEDXi414xAW_wj4deU",
  authDomain: "johari-132ff.firebaseapp.com",
  databaseURL: "https://johari-132ff.firebaseio.com",
  projectId: "johari-132ff",
  storageBucket: "johari-132ff.appspot.com",
  messagingSenderId: "864873638992",
  appId: "1:864873638992:web:9e02d85f45d5f7ed2af555",
  measurementId: "G-96L0WCV9ND",
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
