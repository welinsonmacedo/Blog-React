import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyArimF0zBNuccpn3ooH14GLEs6XKq6uS6o",
  authDomain: "blogweb-5fb24.firebaseapp.com",
  projectId: "blogweb-5fb24",
  storageBucket: "blogweb-5fb24.appspot.com",
  messagingSenderId: "111195063706",
  appId: "1:111195063706:web:34faa5af12d000672d6623"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth(app);

export { db, auth,storage };
