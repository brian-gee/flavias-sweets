import { useState } from 'react';

const Contact = () => {
  const [subject, setSubject] = useState("New message from Flavia's Sweets!");

  const handleFirstNameChange = (e) => {
    const firstName = e.target.value;
    setSubject(`${firstName} sent a message from Flavias's Sweets`);
  };

  return (
    <div className="px-12 mx-auto max-w-7xl h-screen">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          <span>Get in touch</span>
        </h1>
        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
          Send us a message about your next party so we can get started on your
          custom cake.
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mx-auto max-w-4xl mb-10 md:mb-20">
          <input
            type="hidden"
            name="access_key"
            value="795bef11-df67-4a28-93d3-bbe7d6c7dc6e"
          />
          <input type="hidden" name="subject" value={subject} />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-6">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  onChange={handleFirstNameChange}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-black placeholder:text-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-black placeholder:text-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-black placeholder:text-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    {' '}
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-black sm:text-sm">
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  required
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 shadow-sm ring-1 ring-inset ring-black placeholder:text-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-black placeholder:text-black sm:text-sm sm:leading-6"></textarea>
              </div>
              {/* <div className="sm:col-span-2"> 
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-semibold leading-6">
                  Upload file (max 25MB)
                </label>
                <div className="mt-2.5">
                  <input
                    type="file"
                    name="attachment"
                    id="file-upload"
                    accept="*"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-black placeholder:text-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
              <input
                type="hidden"
                name="redirect"
                value="https://flavias-sweets.netlify.app/success"
              />

              <button
                type="submit"
                className="w-full mt-4 py-4 text-white bg-pink-400 hover:bg-pink-500 rounded-2xl">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
