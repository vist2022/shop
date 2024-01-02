import {
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {LoginData} from "../utils/types";
import {auth} from "./firebase-config";

export async function registrationFirebase(loginData: LoginData) {
    await createUserWithEmailAndPassword(auth, loginData.email, loginData.password);
    return loginData.email;
}

async function signInWithEmail(loginData: LoginData) {

    await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
    return loginData.email;


}

async function signInWithGoogle() {
    const credential = await signInWithPopup(auth, new GoogleAuthProvider());
    return credential.user.email
}

export async function loginFirebase(loginData: LoginData) {
    return loginData.email === 'GOOGLE' ? signInWithGoogle() : signInWithEmail(loginData);
}

export async function logoutFireBase() {
    await signOut(auth);
}