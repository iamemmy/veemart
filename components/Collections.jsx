import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    name: 'Spring Collection',
    image: '/aacc.jpeg',
    link: '/collections/spring',
  },
  {
    name: 'Summer Collection',
    image: '/addd.jpeg',
    link: '/collections/summer',
  },
  {
    name: 'Autumn Collection',
    image: '/aaffs.jpeg',
    link: '/collections/autumn',
  },
  {
    name: 'Winter Collection',
    image: '/assg.jpeg',
    link: '/collections/winter',
  },
];

export default function CollectionsSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div key={collection.name} className="group relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-40 lg:h-56 w-full">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{collection.name}</h3>
                <Link href={collection.link} className="mt-2 inline-block text-indigo-600 hover:text-indigo-800 font-medium text-sm lg:text-base">
                    View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
