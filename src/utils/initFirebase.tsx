import { app } from './initAuth';
import { getDatabase, ref, set } from 'firebase/database';

const db = getDatabase(app);
const dbRef = ref(db, 'contactForm');

// Add customer
export const addMessage = (name: string, email: string, message: string) => {
  set(dbRef, {
    name: name,
    email: email,
    message: message,
  });
};
