exports.handler = async function (event, context) {
  try {
    try {
      const data = await Astro.request.formData();
      const firstName = data.get('username');
      const lastName = data.get('email');
      const email = data.get('password');
      const phoneNumber = data.get('password');
      const message = data.get('password');
  
      addMessage(
        firstName,
        lastName,
        email,
        phoneNumber,
        message 
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
};
