// import * as firebase from "firebase";
// const config = {
//     apiKey: "AIzaSyBvjORPdQi_ZKz02b-SJcTn5MFZ575uhb0",
//     authDomain: "movie-app-41cc2.firebaseapp.com",
//     projectId: "movie-app-41cc2",
//     storageBucket: "movie-app-41cc2.appspot.com",
//     messagingSenderId: "635146164264",
//     appId: "1:635146164264:web:f602e25f73c807d7e1bd1d"
//   };

// firebase.initializeApp(config);

// export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvjORPdQi_ZKz02b-SJcTn5MFZ575uhb0",
  authDomain: "movie-app-41cc2.firebaseapp.com",
  projectId: "movie-app-41cc2",
  storageBucket: "movie-app-41cc2.appspot.com",
  messagingSenderId: "635146164264",
  appId: "1:635146164264:web:f602e25f73c807d7e1bd1d"
};


firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export const firebaseProvider = new firebase.auth.GoogleAuthProvider();