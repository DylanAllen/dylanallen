import { auth as firebaseAuth, storage } from 'firebase'
import { Subject } from 'rxjs';

interface Auth {
    init: () => void;
    login: () => Promise<firebase.User | null>;
    logout: () => Promise<any>;
    provider: firebaseAuth.GoogleAuthProvider;
    storage: () => storage.Storage;
}

export interface AuthState {
  user$?: Subject<firebase.User | null>;
  user?: firebase.User | null;
  initialized?: boolean;
}

export const authState = {
  user$: new Subject<firebase.User | null>(),
  user: null,
  initialized: false,
}

export const auth: Auth = {
    provider: new firebaseAuth.GoogleAuthProvider(),
    init: async () => {
      console.log('init');
      updateState({initialized: true});
      authState.user$.subscribe((user: firebase.User | null) => {
        updateState({user: user});
      })
      auth.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebaseAuth().onAuthStateChanged(function(user) {
          if (user) {
            authState.user$.next(user);
          }
      });
    },
    login: () => {
        if (!authState.initialized) auth.init();
        if (!authState.user) {
        
            return firebaseAuth().signInWithPopup(auth.provider).then((result) => {           
                authState.user$.next(result.user);
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
        authState.user$.next(null);
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

