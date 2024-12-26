"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const CreativeRecipesWithComments = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Creative Recipes Section */}
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Creative Recipes Using Fresh Fruits & Vegetables
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/images/blog5.jpg"
            alt="Creative Recipes"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Get inspired with creative recipes to incorporate more fruits and vegetables into your diet. Adding fresh produce to your meals not only enhances their flavor but also boosts your nutritional intake. Discover exciting ways to transform ordinary ingredients into extraordinary dishes, packed with taste and health benefits. From refreshing salads to delightful desserts, these recipes will help you embrace a vibrant and balanced lifestyle.
          </p>
          <p className="text-sm text-gray-500 mt-4">December 24, 2024</p>
          
          {/* Move Comment Section Below the Date */}
          <div className="mt-10">
            <CommentSection />
          </div>
        </div>
      </div>
    </div>
  );
}

const CommentSection = () => {
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
    <div className="p-4">
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
  )
}

export default CreativeRecipesWithComments;