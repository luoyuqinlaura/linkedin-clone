import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyA8tN4cBMrzqQSuiEi-0vplVIohBo88jy8',
  authDomain: 'linkedin-clone-88f42.firebaseapp.com',
  projectId: 'linkedin-clone-88f42',
  storageBucket: 'linkedin-clone-88f42.appspot.com',
  messagingSenderId: '632241172378',
  appId: '1:632241172378:web:707ceb58cbcf8040d15423',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
