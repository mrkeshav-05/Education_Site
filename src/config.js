// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtkyOmiCbzF0gQrPkMYP9t7otz53ypols",
  authDomain: "swyam-78c08.firebaseapp.com",
  projectId: "swyam-78c08",
  storageBucket: "swyam-78c08.appspot.com",
  messagingSenderId: "920961467034",
  appId: "1:920961467034:web:e6bb207271f6d3d11e5523",
  measurementId: "G-2QFS158B6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider =  new GoogleAuthProvider();

export {auth, provider};