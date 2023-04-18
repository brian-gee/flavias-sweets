import firebase from 'firebase/app';
import 'firebase/database';
const APIKEY = import.meta.env.PUBLIC_API_KEY;
const AUTHDOMAIN = import.meta.env.PUBLIC_AUTH_DOMAIN;
const DATABASEURL = import.meta.env.PUBLIC_DATABASE_URL;
const PROJECTID = import.meta.env.PUBLIC_PROJECT_ID;
const STORAGEBUCKET = import.meta.env.PUBLIC_STORAGE_BUCKET;
const MESSAGINGSENDERID = import.meta.env.PUBLIC_MESSAGING_SENDER_ID;
const APPID = import.meta.env.PUBLIC_APP_ID;
const MEASUREMENTID = import.meta.env.PUBLIC_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
