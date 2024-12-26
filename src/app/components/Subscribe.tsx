"use client"
import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleClear = () => {
    setEmail('')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded shadow-md w-full max-w-lg text-center">
        <p className="text-gray-700 text-sm">
          Subscribe to our Newsletter
        </p>
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
  )
}

export default Subscribe
