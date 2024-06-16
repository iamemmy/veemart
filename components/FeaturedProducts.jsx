import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    name: 'Complete Apple Kits',
    image: '/121.jpeg',
    price: '$49.99',
    link: '/products/product1',
  },
  {
    name: 'Jenine Skin Care',
    image: '/122.jpeg',
    price: '$59.99',
    link: '/products/product2',
  },
  {
    name: 'Aloe Vera Lotion set',
    image: '/123.jpeg',
    price: '$69.99',
    link: '/products/product3',
  },
  {
    name: 'Vintra Sanitizers',
    image: '/124.jpeg',
    price: '$79.99',
    link: '/products/product4',
  },
];

export default function FeaturedProductsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
          {featuredProducts.map((product) => (
            <div key={product.name} className="group relative bg-gray-100 shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-40 lg:h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base lg:text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <Link href={product.link} className="mt-2 inline-block text-indigo-600 hover:text-indigo-800 font-medium text-sm lg:text-base">
                    View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-4 px-2 w-full flex justify-end items-center'>
          <Link href={"/"} className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm lg:text-base">View all &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
