import type { APIRoute } from 'astro';
import { addMessage } from '../../utils/initFirebase';

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }
  // Add the message to the database
  addMessage(name, email, message);
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: 'Success!',
    }),
    { status: 200 }
  );
};
