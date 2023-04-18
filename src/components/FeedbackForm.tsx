import { useState } from 'preact/hooks';
import firebase from '../utils/firebaseConfig';

export default function Form() {
  const [responseMessage, setResponseMessage] = useState('');

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phone-number'),
      country: formData.get('country'),
      message: formData.get('message'),
    };

    try {
      await firebase.database().ref('feedback').push(data);
      setResponseMessage('Thank you for your feedback!');
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
      console.error('Error submitting form data:', error);
    }
  }

  return (
    <form onSubmit={submit} class="mx-auto max-w-4xl mb-10 md:mb-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-6">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6">
            First name
          </label>
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6">
            Last name
          </label>
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6">
            Email
          </label>
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold leading-6">
            Phone number
          </label>
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 sm:text-sm">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6">
            Message
          </label>
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="file-upload"
            class="block text-sm font-semibold leading-6">
            Upload file (max 25MB)
          </label>
          <div class="mt-2.5">
            <input
              type="file"
              name="file-upload"
              id="file-upload"
              accept="*"
              class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              onChange={(e) => {
                const fileSize = e.target.files[0].size / (1024 * 1024);
                if (fileSize > 25) {
                  alert('File size exceeds 25MB');
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="w-full mt-4 py-4 text-white bg-pink-400 hover:bg-pink-500 rounded-2xl focus:outline-none">
            Send Message
          </button>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </form>
  );
}
