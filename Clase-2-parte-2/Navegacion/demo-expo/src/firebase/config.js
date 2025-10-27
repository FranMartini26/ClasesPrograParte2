import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAKOzypzn2HtP2hK99ViMoPjm353wLWnE",
  authDomain: "fmfirebase11.firebaseapp.com",
  projectId: "fmfirebase11",
  storageBucket: "fmfirebase11.appspot.com",
  messagingSenderId: "622504075467",
  appId: "1:622504075467:web:d9e0e459445133905bfb4e"
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore();
export default firebase;