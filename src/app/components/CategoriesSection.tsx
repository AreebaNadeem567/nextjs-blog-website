"use client";
import Image from 'next/image';

export default function CategoriesSection() {
  const categories = [
    {
      title: 'Fruits',
      Image: '/images/fruits.jpg',
    },
    {
      title: 'Juices',
      Image: '/images/juices.jpg',
    },
    {
      title: 'Vegetables',
      Image: '/images/vegetables.jpg',
    },
    {
      title: 'Dried',
      Image: '/images/dried fruits.jpg',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-600">Vegetables</h2>
          <p className="text-gray-500 mt-4">Protect the health of every home</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {categories.map((category, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={category.Image}
                  alt={category.title}
                  width={700}
                  height={500}
                  className="object-cover w-full h-full max-w-full max-h-full"
                />
              </div>
              <div className="absolute inset-0 bg-green-500 text-white flex items-center justify-center text-xl font-bold opacity-0 group-hover:opacity-75 visibility-hidden group-hover:visibility-visible transition-opacity duration-300">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}