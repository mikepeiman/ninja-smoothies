 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Initialize Firebase
var config = {
  apiKey: "AIzaSyC8sZlO-_5ykvX9iQsuM01uld_ax15DfUw",
  authDomain: "ninja-smoothies-92f8a.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-92f8a.firebaseio.com",
  projectId: "ninja-smoothies-92f8a",
  storageBucket: "ninja-smoothies-92f8a.appspot.com", 
  messagingSenderId: "263632976481"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

// export firestore database

export default firebaseApp.firestore()