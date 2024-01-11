import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7LNHVCDnTDnNrtangUdOmp4kdM0x1dQs",
  authDomain: "melutienda-react.firebaseapp.com",
  projectId: "melutienda-react",
  storageBucket: "melutienda-react.appspot.com",
  messagingSenderId: "272423724699",
  appId: "1:272423724699:web:f3c006a22a8e954f72883e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db