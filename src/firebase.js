import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4v3qmwUfIpldE9DHXQqvzVsIk76pZLH0",
    authDomain: "coderhouse-a2063.firebaseapp.com",
    projectId: "coderhouse-a2063",
    storageBucket: "coderhouse-a2063.appspot.com",
    messagingSenderId: "462913304018",
    appId: "1:462913304018:web:76f2ae3707fdadfc9bc40b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

