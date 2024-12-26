"use client";
import Image from 'next/image';
import React, { useState } from 'react';

export default function StoreFreshProduce() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ name: string, comment: string }[]>([]);

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      setComments([...comments, { name, comment }]);
      setName('');
      setComment('');
    }
  };

  const handleRemoveComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            How to Store Fresh Produce Properly
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/images/blog3.jpg" 
            alt="Fresh Produce Storage"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Learn the best ways to store fruits and vegetables to maintain freshness and flavor. Proper storage not only helps to retain the nutritional value of your produce but also minimizes food waste. Different types of produce require specific storage methods to maximize their shelf life. For instance, leafy greens should be kept in the refrigerator with a damp paper towel to maintain moisture, while root vegetables like potatoes and onions are best stored in a cool, dark place. By following these guidelines, you can enjoy fresh, delicious produce for longer and make the most out of your grocery shopping.
          </p>
          <p className="text-sm text-gray-500 mt-4">December 24, 2024</p>
        </div>
      </div>
      <div className="p-4 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Comment Section</h2>
        <input
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <textarea
          className="border p-2 w-full mb-4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
        <div className="mt-4">
          {comments.map((cmt, index) => (
            <div key={index} className="border-b py-2 flex justify-between items-center">
              <div>
                <p className="font-bold">{cmt.name}</p>
                <p>{cmt.comment}</p>
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleRemoveComment(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
