import React from "react";
import Image from "next/image"; 
import Hero from "./Hero";

const BlogPosts = () => {
  const blogs = [
    {
      title: "How to Choose the Freshest Vegetables for Your Meals",
      description:
        "Learn how to pick the freshest and healthiest vegetables for your daily meals.",
      Image: "/images/blog1.jpg", 
      buttonText: "Read More",
      link: "/Blog1",
    },
    {
      title: "The Benefits of Eating Seasonal Fruits",
      description:
        "Discover why seasonal fruits are better for your health and the environment.",
      Image: "/images/blog2.jpg",
      buttonText: "Read More",
      link: "/Blog2",
    },
    {
      title: "How to Store Fresh Produce Properly",
      description:
        "Learn the best ways to store fruits and vegetables to maintain freshness and flavor.",
      Image: "/images/blog3.jpg",
      buttonText: "Read More",
      link: "/Blog3",
    },
    {
      title: "Top 5 Superfoods You Should Add to Your Diet",
      description:
        "Here are five superfoods that can boost your energy and overall health.",
      Image: "/images/blog4.jpg",
      buttonText: "Read More",
      link: "/Blog4",
    },
    {
      title: "Creative Recipes Using Fresh Fruits & Vegetables",
      description:
        "Get inspired with creative recipes to incorporate more fruits and vegetables into your diet.",
      Image: "/images/blog5.jpg",
      buttonText: "Read More",
      link: "/Blog5",
    },
    {
      title: "The Importance of Organic Vegetables",
      description:
        "Understand the benefits of choosing organic vegetables for a healthier lifestyle.",
      Image: "/images/blog6.jpg",
      buttonText: "Read More",
      link: "/Blog6",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={blog.Image} 
                alt={blog.title}
                className="w-full h-40 object-cover"
                width={400} 
                height={160}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600">{blog.description}</p>
                <a href={blog.link}>
                  <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">
                    {blog.buttonText}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;