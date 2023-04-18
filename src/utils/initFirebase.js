import { app } from './initAuth';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const db = getDatabase(app);

export const addMessage = (name, email, message) => {
  const messageId = uuidv4();
  const dateTime = new Date().toISOString();

  set(ref(db, 'messages/' + messageId), {
    dateTime: dateTime,
    messageId: messageId,
    name: name,
    email: email,
    message: message,
  });
};
