import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'Top 10 Tips for Shopping Online',
    description: 'Discover the best tips to make your online shopping experience smooth and enjoyable.',
    image: '/aa1.jpeg',
    link: '#',
  },
  {
    title: 'How to Save Money While Shopping',
    description: 'Learn the secrets to saving money on your favorite products.',
    image: '/aa2.jpeg',
    link: '#',
  },
  {
    title: 'The Future of Online Shopping',
    description: 'Explore the trends and technologies shaping the future of online shopping.',
    image: '/aa3.jpeg',
    link: '#',
  },
];

export default function LatestBlogPostsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-40 lg:h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-2 lg:p-6">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    {post.description.split(' ').slice(0, 10).join(' ')}{post.description.split(' ').length > 10 ? ' ...' : ''}
                </p>
                <Link href={post.link} className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm lg:text-base">Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
