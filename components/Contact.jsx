import React, { useState } from 'react';
import { MapIcon, PhoneIcon, SquaresPlusIcon } from '@heroicons/react/24/outline';

export default function ContactUsSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-100 py-16">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Contact Us</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0">
            {/* Contact Information */}
            <div className="max-w-lg w-full lg:mr-12">
            <div className="space-y-2 lg:space-y-6 text-gray-700">
                <div className="flex items-center">
                <MapIcon className="h-6 w-6 mr-2" />
                <p>123 Main Street, City, Country</p>
                </div>
                <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 mr-2" />
                <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="flex items-center">
                <SquaresPlusIcon className="h-6 w-6 mr-2" />
                <p>Email: info@example.com</p>
                </div>
            </div>
            </div>
            {/* Contact Form */}
            <div className="max-w-lg w-full">
            {submitted ? (
                <div className="text-center text-lg font-semibold text-green-600">
                Thank you for reaching out to us. We will get back to you shortly.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="4"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                    </div>
                </div>
                <div>
                    <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Submit
                    </button>
                </div>
                </form>
            )}
            </div>
        </div>
    </div>
  );
}
