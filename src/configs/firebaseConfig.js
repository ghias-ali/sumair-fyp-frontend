import firebase from "firebase/app";
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBbkPM3CL4drPXINQxWNWYV30NXReXAfNY",
    authDomain: "sumair-ads.firebaseapp.com",
    projectId: "sumair-ads",
    storageBucket: "sumair-ads.appspot.com",
    messagingSenderId: "905576631062",
    appId: "1:905576631062:web:0eb3aa9e53a452f0021e37"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage , firebase as default};