const faqs = [
  {
    question: 'Do you only make cakes?',
    answer:
      'We specialize in a wide range of baked delights, including classic and contemporary cakes, cupcakes, pastries, and cookies. We also offer seasonal specials and are always experimenting with new flavors and designs.',
  },
  {
    question: 'Do you offer delivery services?',
    answer:
      'We offer delivery within a specific radius. Delivery charges may vary based on distance. You can also choose to pick up your order from us at a scheduled time.',
  },
  {
    question: 'How can I ensure my cake stays fresh?',
    answer:
      "To keep your cake fresh, store it in a cool, dry place away from direct sunlight. If it's a cream-based cake, we recommend refrigerating it. We'll provide specific storage instructions with each order.",
  },
  {
    question: 'Can I request a custom design for my cake?',
    answer:
      "Absolutely! We love bringing your visions to life. You can request custom designs for any occasion. Just provide us with your ideas, themes, or inspirations, and we'll work with you to create a unique cake that meets your specifications.",
  },
  {
    question: 'How do I provide feedback on my order?',
    answer:
      'We appreciate your feedback! You can provide feedback through our website form, via email, or directly call us. Your suggestions help us improve our service and offerings.',
  },
];

export default function Example() {
  return (
    <section
      id="faqs"
      className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 pt-20 scroll-m-20 sm:pt-24 sm:scroll-m-24 md:pt-20 xl:scroll-m-32 bg-neutral-200 pb-0 md:pb-20">
      <h1 className="text-center text-4xl font-bold text-slate-900 xl:text-5xl">
        Everything you need to know
      </h1>
      <div className="mx-auto max-w-2xl mt-10 divide-y divide-slate-100">
        {faqs.map((faq) => (
          <details className="group py-4">
            <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-bold text-lg text-slate-900">
              {faq.question}
              <svg
                className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700"
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
