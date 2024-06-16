import React, { useState } from 'react';

export default function NewsletterSubscriptionSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // I'll write the logic later -- Samson
    setSubmitted(true);
  };

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white text-center mb-4">Subscribe to our Newsletter</h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Get the latest news, updates, and special offers delivered directly to your inbox.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-white"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-lg text-gray-300 text-center">
            Thank you for subscribing! Please check your email to confirm your subscription.
          </p>
        )}
      </div>
    </div>
  );
}
