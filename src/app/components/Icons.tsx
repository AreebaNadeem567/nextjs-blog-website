"use client";

import { FaMicrosoft, FaAndroid, FaJava, FaGoogle } from 'react-icons/fa';  // Correct import for icons
import { useState } from 'react';

export default function Icons() {
  const [email, setEmail] = useState('');

  const handleClear = () => {
    setEmail('');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-20 p-10 bg-white rounded shadow-md mb-10 max-w-full">
        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaMicrosoft className="h-24 w-24 text-blue-500 hover:text-blue-700" />
          <p className="mt-2 text-gray-700">Microsoft</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaAndroid className="h-24 w-24 text-green-500 hover:text-green-700" />
          <p className="mt-2 text-gray-700">Android</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaJava className="h-24 w-24 text-yellow-600 hover:text-yellow-800" />
          <p className="mt-2 text-gray-700">Java</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transform transition duration-300 ease-in-out">
          <FaGoogle className="h-24 w-24 text-red-500 hover:text-red-700" />
          <p className="mt-2 text-gray-700">Google</p>
        </div>
      </div>
      <div className="mt-10 bg-gray-200 p-8 rounded shadow-md w-full max-w-lg text-center">
        <p className="text-gray-700 text-sm">Subscribe to our Newsletter</p>
        <div className="flex mt-3 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full p-3 border border-gray-300 rounded-l"
          />
          {email && (
            <button
              onClick={handleClear}
              className="absolute right-0 top-0 mt-3 mr-3 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          )}
          <button className="bg-green-500 text-white px-6 py-3 rounded-r">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}