import * as firebase from "firebase"
// Initialize Firebase
var config = {
  apiKey: "...",
  authDomain: "my-project.firebaseapp.com",
  databaseURL: "https://my-project.firebaseio.com",
  projectId: "my-project",
  storageBucket: "my-project.appspot.com",
  messagingSenderId: "..."
};
firebase.initializeApp(config);

export default firebase;


/*import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCz2Eqbnm1Z68Y-M9boWPtU-n46M7_s7cM",
  authDomain: "oneprojectvue.firebaseapp.com",
  projectId: "oneprojectvue",
  storageBucket: "oneprojectvue.appspot.com",
  messagingSenderId: "117349842859",
  appId: "1:117349842859:web:9d9e4d60b9b488b9f55cee",
  measurementId: "G-8J9GT7324F"
};
/*
var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};*/
/*
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;*/