import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBynkTp6c_sEhEF6e-EZ7fLayy28_i70YI',
  authDomain: 'flavias-sweets.firebaseapp.com',
  databaseURL: 'https://flavias-sweets-default-rtdb.firebaseio.com',
  projectId: 'flavias-sweets',
  storageBucket: 'flavias-sweets.appspot.com',
  messagingSenderId: '6930398200',
  appId: '1:6930398200:web:31b9d3eeedd904e0e6340d',
  measurementId: 'G-ECC718YS2N',
};

export const app = initializeApp(firebaseConfig);

export const AuthContextProvider = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const handleSignIn = () => {
    user ? logOut : logOut;
  };

  return { user, signInWithGoogle, logOut, handleSignIn };
};
