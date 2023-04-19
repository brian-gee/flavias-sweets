exports.handler = async function (event, context) {
  try {
    const data = await Astro.request.formData();
    const firstName = data.get('first-name');
    const lastName = data.get('last-name');
    const email = data.get('email');
    const phoneNumber = data.get('phone-number');
    const message = data.get('message');

    await addMessage(firstName, lastName, email, phoneNumber, message);
    return Astro.redirect('/success');
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
