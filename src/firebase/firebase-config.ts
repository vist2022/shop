
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyB5UJgR7ezc2dY4Twv-xIvYrJA_8cYYE6c",
    authDomain: "shop-3beae.firebaseapp.com",
    projectId: "shop-3beae",
    storageBucket: "shop-3beae.appspot.com",
    messagingSenderId: "361738235059",
    appId: "1:361738235059:web:447ce50b600067f06894c6"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);