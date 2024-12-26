"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function OrganicVegetables() {
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
            The Importance of Organic Vegetables
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/images/blog6.jpg"
            alt="Organic Vegetables"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Discover the benefits of choosing organic vegetables for a healthier lifestyle. Organic produce is grown without synthetic pesticides and fertilizers, ensuring that your meals are as natural and nutrient-rich as possible. By incorporating organic vegetables into your diet, you can reduce exposure to harmful chemicals, support sustainable farming practices, and enjoy fresher, tastier ingredients. Make the switch to organic and experience the positive impact on your health and the environment.
          </p>
          <p className="text-sm text-gray-500 mt-4">December 24, 2024</p>
        </div>
      </div>

      {/* Comment Section at the bottom */}
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10 w-full p-4">
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