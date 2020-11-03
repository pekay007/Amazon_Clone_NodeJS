import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY4uB0t6hbOHupA_x0HjMpyefW792YwUw",
  authDomain: "clonepekay.firebaseapp.com",
  databaseURL: "https://clonepekay.firebaseio.com",
  projectId: "clonepekay",
  storageBucket: "clonepekay.appspot.com",
  messagingSenderId: "704472946069",
  appId: "1:704472946069:web:96ba083a799a4f8af9d29c",
  measurementId: "G-1MR00XY9BX"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };