import { app } from './initAuth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore(app);
const userEmail = 'briangeertsma@gmail.com';

// Add customer
export const addMessage = async (name, email, message) => {
  const messageId = uuidv4();
  const dateTime = new Date().toISOString();

  try {
    await setDoc(doc(db, 'mail/' + messageId), {
      dateTime: dateTime,
      messageId: messageId,
      name: name,
      email: email,
      to: userEmail,
      message: {
        subject: 'Hello from Firebase!',
        text: message,
      },
    });
    console.log(dateTime, messageId, name, email, message, 'added');
  } catch (error) {
    console.error('Error adding message:', error);
  }
};
