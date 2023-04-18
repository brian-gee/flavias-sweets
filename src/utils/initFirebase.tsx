import { app } from './initAuth';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const messageId = uuidv4();

const db = getDatabase(app);

// Add customer
export const addMessage = (name: string, email: string, message: string) => {
  set(ref(db, 'messages/' + messageId), {
    name: name,
    email: email,
    message: message,
  });
};
