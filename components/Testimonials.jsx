import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Jane Doe',
    image: '/222.jpeg',
    quote: 'VeeMart has completely transformed the way I shop. Their customer service is outstanding!',
  },
  {
    name: 'John Smith',
    image: '/224.jpeg',
    quote: 'The quality of the products is top-notch. I always find what I need at VeeMart.',
  },
  {
    name: 'Alice Johnson',
    image: '/223.jpeg',
    quote: 'Fast delivery and great prices. I highly recommend VeeMart to all my friends and family.',
  },
];

export default function CustomerTestimonialsSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="relative h-24 w-24 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
              <p className="mt-2 text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
