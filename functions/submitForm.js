import { addMessage } from './initFirebase';

exports.handler = async function (event, context) {
  try {
    const data = JSON.parse(event.body);
    const { name, email, password } = data;

    // Call addMessage only when there are no validation errors
    await addMessage(name, email, password);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message added successfully.' }),
    };
  } catch (error) {
    console.error('Error adding message:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error adding message.' }),
    };
  }
};
