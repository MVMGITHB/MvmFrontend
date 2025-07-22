// pages/404.js
"use client"
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="max-w-md text-center">
        <img
          src="/images/notfound.webp" 
          alt="Page Not Found"
          className="w-full h-auto mb-8"
        />
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <button className="inline-block px-6 py-3 cursor-pointer bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition-colors">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
