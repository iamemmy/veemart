import React, { useState } from 'react';

const faqs = [
  {
    question: "What is VeeMart?",
    answer: "VeeMart is an online marketplace offering a wide range of products from various vendors."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking link provided in the confirmation email or by logging into your account on our website."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused and unopened items. Please visit our return policy page for more details."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support via email at support@veemart.com or by calling our hotline at 1-800-123-4567."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we do offer international shipping. Please check our shipping policy page for more details and applicable rates."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200 pt-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-gray-900 focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  <svg className={`${openIndex === index ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform transition-transform duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
