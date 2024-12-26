"use client";
import Image from 'next/image';
import React, { useState } from 'react';

export default function Superfoods() {
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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 md:px-10">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Top 5 Superfoods You Should Add to Your Diet
          </h1>
        </div>
        <div className="relative h-64">
          <Image
            src="/images/blog4.jpg"
            alt="Superfoods"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-600 mt-4 text-xl leading-relaxed">
            Here are five superfoods that can boost your energy and overall health. Superfoods are packed with essential nutrients, antioxidants, and health benefits. Adding these to your diet can improve your well-being and help you maintain a balanced and nutritious lifestyle. From berries rich in vitamins to nutrient-dense greens, incorporating these superfoods into your meals can make a big difference. Discover the benefits of these powerful foods and start your journey towards a healthier you.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 text-gray-800">Top Superfoods and Their Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li><strong>Blueberries:</strong> Rich in antioxidants and vitamins, blueberries can help improve memory and support healthy skin.</li>
            <li><strong>Kale:</strong> A nutrient-dense leafy green, kale is packed with vitamins A, C, and K, and is known for its anti-inflammatory properties.</li>
            <li><strong>Quinoa:</strong> A complete protein, quinoa provides all nine essential amino acids and is high in fiber and antioxidants.</li>
            <li><strong>Chia Seeds:</strong> These tiny seeds are loaded with omega-3 fatty acids, fiber, and protein, which support heart health and digestion.</li>
            <li><strong>Avocado:</strong> Full of healthy fats, avocados promote heart health and help in the absorption of fat-soluble vitamins.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 text-gray-800">How to Incorporate These Superfoods Into Your Diet</h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Here are some easy ways to add these superfoods to your daily meals:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Add blueberries to your smoothies, yogurt, or oatmeal.</li>
            <li>Use kale as a base for salads, or blend it into green smoothies.</li>
            <li>Substitute quinoa for rice in meals or add it to soups and salads.</li>
            <li>Top your smoothie bowls or salads with chia seeds for an added nutrient boost.</li>
            <li>Enjoy avocado on toast, in salads, or as a creamy addition to smoothies.</li>
          </ul>

          <p className="text-sm text-gray-500 mt-4">December 24, 2024</p>
        </div>
      </div>

      {/* Comment Section Below Date */}
      <div className="w-full flex justify-center items-center mt-10 px-4 md:px-10">
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3 text-start">Comment Section</h2>

          {/* Comment input form */}
          <input
            className="border p-2 w-full mb-3 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <textarea
            className="border p-2 w-full mb-3 text-sm"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here..."
          />
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm w-fit ml-0"
            onClick={handleAddComment}
          >
            Add Comment
          </button>

          {/* Display comments list */}
          <div className="mt-4 space-y-2">
            {comments.map((cmt, index) => (
              <div key={index} className="border-b py-2 flex justify-between items-center text-sm">
                <div>
                  <p className="font-bold">{cmt.name}</p>
                  <p>{cmt.comment}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  onClick={() => handleRemoveComment(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}