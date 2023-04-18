export const prerender = true;
import type { APIRoute } from 'astro';
import { addMessage } from '../../utils/initFirebase';

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name')?.toString();
  const email = data.get('email')?.toString();
  const message = data.get('message')?.toString();
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }
  addMessage(name, email, message);
  return new Response(
    JSON.stringify({
      message: 'Success!',
    }),
    { status: 200 }
  );
};
