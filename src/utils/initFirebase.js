import { app } from './initAuth';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const db = getDatabase(app);

// Add customer
export const addMessage = async (name, email, message) => {
  const messageId = uuidv4();
  const dateTime = new Date().toISOString();

  try {
    await set(ref(db, 'messages/' + messageId), {
      dateTime: dateTime,
      messageId: messageId,
      name: name,
      email: email,
      message: message,
    });
    console.log(dateTime, messageId, name, email, message, 'added');
  } catch (error) {
    console.error('Error adding message:', error);
  }
};
