import firebase from "firebase/app";
import { firebaseConfig } from '../firebase.config';

export function initApp() {
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (error) {
        if (!/already exists/u.test(error.message)) {
            console.error('Firebase admin initialization error', error.stack);
        }
    }
    return firebase;
}