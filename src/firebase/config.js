import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBu8SC-WJ15DIBHTHXSCtdiOtOPKQf0b8E",
  authDomain: "eshop-f1ef1.firebaseapp.com",
  projectId: "eshop-f1ef1",
  storageBucket: "eshop-f1ef1.appspot.com",
  messagingSenderId: "730093808777",
  appId: "1:730093808777:web:0b06f76266530a24b12a58",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
