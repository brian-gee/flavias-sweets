import { app } from './initAuth';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const db = getDatabase(app);

// Add customer
export const addMessage = (name, email, message) => {
  const messageId = uuidv4();

  set(ref(db, 'messages/' + messageId), {
    messageId: messageId,
    name: name,
    email: email,
    message: message,
  });
};
