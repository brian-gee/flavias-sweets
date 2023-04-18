import { app } from './initAuth';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const db = getDatabase(app);

// Add customer
export const addMessage = (name, email, message) => {
  var messageId = uuidv4();
  let current = new Date();
  let cDate =
    current.getFullYear() +
    '-' +
    (current.getMonth() + 1) +
    '-' +
    current.getDate();
  let cTime =
    current.getHours() +
    ':' +
    current.getMinutes() +
    ':' +
    current.getSeconds();
  let dateTime = cDate + ' ' + cTime;

  set(ref(db, 'messages/' + messageId), {
    dateTime: dateTime,
    messageId: messageId,
    name: name,
    email: email,
    message: message,
  });
};
