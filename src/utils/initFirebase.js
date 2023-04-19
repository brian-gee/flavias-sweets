import { app } from './initAuth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore(app);
const userEmail = 'briangeertsma@gmail.com';

// Add customer
export const addMessage = async (
  firstName,
  lastName,
  email,
  phoneNumber,
  message
) => {
  const messageId = uuidv4();
  const dateTime = new Date().toISOString();

  try {
    await setDoc(doc(db, 'mail/' + messageId), {
      dateTime: dateTime,
      messageId: messageId,
      to: userEmail,
      message: {
        subject: "New message from Flavias's Sweets!",
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\n\nMessage:\n${message}`,
      },
    });
  } catch (error) {
    console.error('Error adding message:', error);
  }
};
