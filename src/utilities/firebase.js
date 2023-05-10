// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import { getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyB8wXJIza9fAeiSZoIP5b-gEuMz0DrZY9E",
  authDomain: "react-tailwind-b0108.firebaseapp.com",
  projectId: "react-tailwind-b0108",
  storageBucket: "react-tailwind-b0108.appspot.com",
  messagingSenderId: "697760867225",
  appId: "1:697760867225:web:86f82debbad3c9f4e32908"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app