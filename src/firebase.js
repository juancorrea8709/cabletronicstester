import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDz5O8BYRFVrd9B4U6LgvoQPL-apzo4dY",
    authDomain: "cabletronics-tester.firebaseapp.com",
    projectId: "cabletronics-tester",
    storageBucket: "cabletronics-tester.appspot.com",
    messagingSenderId: "1065557458648",
    appId: "1:1065557458648:web:0a6f3512988db483b3a1ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}