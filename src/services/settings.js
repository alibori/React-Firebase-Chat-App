import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2HmdQ0a0KfLz6ADqziHsusjoVS33FkMM",
  authDomain: "react-chat-app-90126.firebaseapp.com",
  projectId: "react-chat-app-90126",
  storageBucket: "react-chat-app-90126.appspot.com",
  messagingSenderId: "834339530549",
  appId: "1:834339530549:web:66f65b523bd6d2e1d14e7c",
  measurementId: "G-B0QN5RBX24",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
