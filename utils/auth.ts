import * as firebase  from 'firebase/app';
import { storage } from 'firebase/app'

import 'firebase/auth'; 

interface Auth {
    init: () => void;
    login: () => Promise<firebase.User | null>;
    logout: () => Promise<any>;
    provider: firebase.auth.GoogleAuthProvider;
    storage: () => storage.Storage;
}

export interface AuthState {
  user?: firebase.User | null;
  initialized?: boolean;
}

export const authState = {
  user: null,
  initialized: false,
}

export const userEvent = (user: firebase.User | null) => {
  updateState({user: user});
  const event = new CustomEvent('user', { detail: user } )
  window.dispatchEvent(event);
}
const firebaseAuth = firebase.auth;

export const auth: Auth = {
    provider: new firebaseAuth.GoogleAuthProvider(),
    init: async () => {
      updateState({initialized: true});
      auth.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebaseAuth().onAuthStateChanged(function(user) {
          if (user) {
            userEvent(user);
          }
      });
    },
    login: () => {
        if (!authState.initialized) auth.init();
        if (!authState.user) {
        
            return firebaseAuth().signInWithPopup(auth.provider).then((result) => {           
                userEvent(result.user);
                return result.user;
            }).catch(function(error) {
                console.log(error);
                return null;
            });
        } else {
            return Promise.resolve(authState.user);
        }
    },
    logout: () => {
      return firebaseAuth().signOut().then(res => {
        userEvent(null);
        return res;
      });
    },
    storage: () => {
        return storage();
    }
}

export const updateState = (udpatedData: AuthState) => ({
  ...authState,
  ...udpatedData,
});

