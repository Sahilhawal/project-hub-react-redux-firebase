import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCgZCj_66Fy0K5k2RwE1lmi4CBzSG-bFOk",
  authDomain: "project-manager-c8d03.firebaseapp.com",
  databaseURL: "https://project-manager-c8d03.firebaseio.com",
  projectId: "project-manager-c8d03",
  storageBucket: "project-manager-c8d03.appspot.com",
  messagingSenderId: "95197855547",
  appId: "1:95197855547:web:a37d9b2b1b61e31eaac11e",
  measurementId: "G-D47TMCPG07",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
