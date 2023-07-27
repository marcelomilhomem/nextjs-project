
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYuJNEhfvkZ3ZmRlVWa-1ASpwaHqpDVXc",
  authDomain: "nextjs-b2b9c.firebaseapp.com",
  projectId: "nextjs-b2b9c",
  storageBucket: "nextjs-b2b9c.appspot.com",
  messagingSenderId: "808516527340",
  appId: "1:808516527340:web:eef995613a431413ba31c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export const firestore = getFirestore(app);
export const storage = getStorage(app);
