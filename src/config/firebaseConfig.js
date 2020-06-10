import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAO2g_NTuGZhkcMh-dStanr54lwuLkaVNM",
    authDomain: "contacts-9ae48.firebaseapp.com",
    databaseURL: "https://contacts-9ae48.firebaseio.com",
    projectId: "contacts-9ae48",
    storageBucket: "contacts-9ae48.appspot.com",
    messagingSenderId: "60457352213",
    appId: "1:60457352213:web:f6b8e427dc713a9eaea21c",
    measurementId: "G-EFBB5QTJCB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase