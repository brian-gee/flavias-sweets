import { app } from './initAuth';
import { getDatabase, ref, set } from 'firebase/database';

export const db = getDatabase();
export const dbRef = ref(db, 'contactForm');

// Add customer
export const addMessage = (
  firstName: string,
  lastName: string,
  message: string
) => {
  set(ref(db), {
    first_name: firstName,
    last_name: lastName,
    message: message,
  });
};
