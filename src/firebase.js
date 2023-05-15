import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2OjKGjQHHp3Q1daZzPtQc2-TN6CiZX78",
    authDomain: "fir-react-auth-8b74d.firebaseapp.com",
    projectId: "fir-react-auth-8b74d",
    storageBucket: "fir-react-auth-8b74d.appspot.com",
    messagingSenderId: "110576502081",
    appId: "1:110576502081:web:f2e1215eb42e4b67ffcdc0",
    measurementId: "G-CKFMJVB3MC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
