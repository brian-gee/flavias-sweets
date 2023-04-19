const { addMessage } = require('./initFirebase');

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
    return {
      statusCode: 204,
      body: '',
    };
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
