import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDGqB_3ZNsWqbl43fy3-cOekIxEDH5H5Vs",
  authDomain: "tarefasapp-e44d2.firebaseapp.com",
  databaseURL: "https://tarefasapp-e44d2-default-rtdb.firebaseio.com",
  projectId: "tarefasapp-e44d2",
  storageBucket: "tarefasapp-e44d2.appspot.com",
  messagingSenderId: "1047311930157",
  appId: "1:1047311930157:web:9082025227524e31c4f9a4"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;