"use client";
import Image from 'next/image';
import React, { useState } from 'react';

export default function FreshVegetables() {
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
            How to Choose the Freshest Vegetables for Your Meals
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/images/blog1.jpg" 
            alt="Fresh Vegetables"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Selecting the freshest vegetables is key to preparing healthy and delicious meals. When shopping for vegetables, it&rsquo;s essential to focus on a few key aspects to ensure quality and freshness. Start by looking for vibrant colors in your vegetables, as this is usually a sign of ripeness and high nutrient content. The texture should be firm, with no soft spots or wilting, as these can indicate age or poor storage conditions. Always check for any bruising, discoloration, or signs of pests. For leafy vegetables like spinach or lettuce, check for crispness and avoid any yellowing or wilting leaves. For root vegetables like carrots or potatoes, make sure they feel firm and solid. The fresher your ingredients, the better the taste and nutritional value of your meals. When choosing produce, try to buy locally and seasonally for the best variety and sustainability. Fresh vegetables not only make your meals taste better, but they also provide essential vitamins and minerals for overall health.
          </p>
          <p className="text-sm text-gray-500 mt-4">December 24, 2024</p>
        </div>
      </div>
      <div className="p-4 w-full max-w-4xl bg-white rounded-lg shadow-lg mt-10">
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
