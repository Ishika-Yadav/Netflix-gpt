// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK2El1S-3F6TRy_wfqgAHaCf0y9Maa8VQ",
  authDomain: "netflix-gpt-6c261.firebaseapp.com",
  projectId: "netflix-gpt-6c261",
  storageBucket: "netflix-gpt-6c261.firebasestorage.app",
  messagingSenderId: "739709546726",
  appId: "1:739709546726:web:079d104032855e3dcfcb27",
  measurementId: "G-79LJNXWPK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();