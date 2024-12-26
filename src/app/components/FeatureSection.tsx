"use client";

import { FaShippingFast, FaLeaf, FaStar, FaHeadset } from 'react-icons/fa';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaShippingFast size={40} />,
      title: 'FREE SHIPPING',
      description: 'On order over $100',
      bgColor: 'bg-pink-200',
      hoverColor: 'hover:text-pink-600',
    },
    {
      icon: <FaLeaf size={40} />,
      title: 'ALWAYS FRESH',
      description: 'Product well packaged',
      bgColor: 'bg-yellow-200',
      hoverColor: 'hover:text-yellow-600',
    },
    {
      icon: <FaStar size={40} />,
      title: 'SUPERIOR QUALITY',
      description: 'Quality products',
      bgColor: 'bg-blue-200',
      hoverColor: 'hover:text-blue-600',
    },
    {
      icon: <FaHeadset size={40} />,
      title: 'SUPPORT',
      description: '24/7 Support',
      bgColor: 'bg-yellow-200',
      hoverColor: 'hover:text-yellow-600',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full transition-transform transform hover:scale-110 ${feature.bgColor}`}
              >
                <div className={`transition-colors ${feature.hoverColor}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
