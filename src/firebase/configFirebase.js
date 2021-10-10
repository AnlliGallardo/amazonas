
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAqsTYZD6xH0NVRsOvh7vUb4Biv65ZEzBI",
  authDomain: "as-c7397.firebaseapp.com",
  projectId: "as-c7397",
  storageBucket: "as-c7397.appspot.com",
  messagingSenderId: "820706037776",
  appId: "1:820706037776:web:a89610719a2a33bb323a95"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const bd = getFirestore(app)

export{
    app,
    google,
    facebook,
    bd
}