import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src="/7777.jpeg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-2xl font-extrabold md:text-5xl lg:text-6xl">Welcome to VeeMart</h1>
        <p className="mt-4 text-sm md:text-xl">A better shopping experience...</p>
        <Link href="/explore" className="mt-8 inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md">
            EXPLORE
        </Link>
      </div>
    </div>
  );
}
