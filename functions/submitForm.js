exports.handler = async function (event, context) {
  try {
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
