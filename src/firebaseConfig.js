// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASkb-njNBplHiyWkZOOgV7iGoc1Fn8Xts",
  authDomain: "libreria-hel.firebaseapp.com",
  projectId: "libreria-hel",
  storageBucket: "libreria-hel.appspot.com",
  messagingSenderId: "313316783043",
  appId: "1:313316783043:web:c04d882970d3b4baa48376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app);

export default db