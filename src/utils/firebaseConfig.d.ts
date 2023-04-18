declare module '../utils/firebaseConfig' {
  import firebase from 'firebase/app';
  import 'firebase/database';

  const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };

  const firebaseApp: firebase.app.App;
  const firebaseDatabase: firebase.database.Database;

  export { firebaseConfig, firebaseApp, firebaseDatabase };
}
