import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqvYCcZWKen2EZqgVo3j2jKOj4-HeBBSU",
  authDomain: "tiktok-b4edb.firebaseapp.com",
  projectId: "tiktok-b4edb",
  storageBucket: "tiktok-b4edb.appspot.com",
  messagingSenderId: "760280721762",
  appId: "1:760280721762:web:830538edb93fcd52efa43b",
  measurementId: "G-S44BSFTZNK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
