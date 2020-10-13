import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-SKmPzTQ-9ZtDvJsLI-iVApT6LbWUfrY",
  authDomain: "discord-redux.firebaseapp.com",
  databaseURL: "https://discord-redux.firebaseio.com",
  projectId: "discord-redux",
  storageBucket: "discord-redux.appspot.com",
  messagingSenderId: "537076342087",
  appId: "1:537076342087:web:a6b4639138b4be9d5b4062",
  measurementId: "G-FDBCVJN480",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
