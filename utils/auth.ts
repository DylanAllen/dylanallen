import { auth as firebaseAuth } from 'firebase'
import { initApp } from '../utils/firebase'; 

interface Auth {
    init: () => void;
    login: () => Promise<firebase.User | null>;
    initialized: boolean;
    provider: firebaseAuth.GoogleAuthProvider;
    user: firebase.User | null;
}

export const auth: Auth = {
    provider: new firebaseAuth.GoogleAuthProvider(),
    user: null,
    initialized: false,
    init: async () => {
        auth.initialized = true;
        initApp();
        auth.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        firebaseAuth().onAuthStateChanged(function(user) {
            console.log('state change', user);
            if (user) {
              auth.user = user;
            }
        });
    },
    login: () => {
        if (!auth.initialized) auth.init();
        if (!auth.user) {
        
            return firebaseAuth().signInWithPopup(auth.provider).then((result) => {           
                auth.user = result.user;
                console.log(auth.user);
                return auth.user;
            }).catch(function(error) {
                console.log(error);
                return null;
            });
        } else {
            return Promise.resolve(auth.user);
        }
    }
}

