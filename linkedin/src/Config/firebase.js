import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcC4EcE4jj4994HKNGWbX3wVnqR6yJApk",
  authDomain: "linkedin-clone-6bfc4.firebaseapp.com",
  projectId: "linkedin-clone-6bfc4",
  storageBucket: "linkedin-clone-6bfc4.appspot.com",
  messagingSenderId: "459758700887",
  appId: "1:459758700887:web:42a76d84b8a7ceecdb1612",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
