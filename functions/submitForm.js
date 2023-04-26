import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: 'AIzaSyBynkTp6c_sEhEF6e-EZ7fLayy28_i70YI',
  authDomain: 'flavias-sweets.firebaseapp.com',
  databaseURL: 'https://flavias-sweets-default-rtdb.firebaseio.com',
  projectId: 'flavias-sweets',
  storageBucket: 'flavias-sweets.appspot.com',
  messagingSenderId: '6930398200',
  appId: '1:6930398200:web:31b9d3eeedd904e0e6340d',
  measurementId: 'G-ECC718YS2N',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const userEmail = 'briangeertsma@gmail.com';

const addMessage = async (firstName, lastName, email, phoneNumber, message) => {
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

exports.handler = async function (event, context) {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }

    const data = new URLSearchParams(event.body);
    const firstName = data.get('first-name');
    const lastName = data.get('last-name');
    const email = data.get('email');
    const phoneNumber = data.get('phone-number');
    const message = data.get('message');

    await addMessage(firstName, lastName, email, phoneNumber, message);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
