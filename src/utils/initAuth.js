import { initializeApp } from 'firebase/app';

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
