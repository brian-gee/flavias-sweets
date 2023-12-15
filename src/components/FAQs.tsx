const faqs = [
  {
    question: 'Do you only make cakes?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.',
  },
];

export default function Example() {
  return (
    <section
      id="faqs"
      className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 pt-20 scroll-m-20 sm:pt-24 sm:scroll-m-24 xl:pt-32 xl:scroll-m-32 bg-neutral-200 pb-20">
      <h1 className="text-center text-4xl font-bold text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
        Everything you need to know
      </h1>
      <div className="mx-auto max-w-2xl mt-10 divide-y divide-slate-100">
        {faqs.map((faq) => (
          <details className="group py-4">
            <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600">
              {faq.question}
              <svg
                className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M18 12H6"></path>
                <path className="group-open:hidden" d="M12 6v12"></path>
              </svg>
            </summary>
            <div className="pb-6 pt-6">
              <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                <p>{faq.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
