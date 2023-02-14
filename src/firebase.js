//Database, detta kan hämtas på google. 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB1L-3eu0le-XfT9eAYEebbqBTq0DBon9c",
    authDomain: "twitter-clone-a953f.firebaseapp.com",
    databaseURL:"https://twitter-clone-a953f.firebaseio.com",
    projectId: "twitter-clone-a953f",
    storageBucket: "twitter-clone-a953f.appspot.com",
    messagingSenderId: "435254899860",
    appId: "1:435254899860:web:2bd01b6b622a35af64f081",
    measurementId: "G-49748Y4YJ6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;