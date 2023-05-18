import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCfeQcFRZXw-J3ealEsMh2Kep9C5UhLOFQ",
  authDomain: "dealer-a1957.firebaseapp.com",
  projectId: "dealer-a1957",
  storageBucket: "dealer-a1957.appspot.com",
  messagingSenderId: "872417427443",
  appId: "1:872417427443:web:7f35818242f40d10f75c86",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
