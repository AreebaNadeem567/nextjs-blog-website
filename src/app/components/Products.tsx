"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Products() {
  const products = [
    { name: "Bell Pepper", price: "$10.00", Image: "/images/product-1.jpg", discount: "30%" },
    { name: "Strawberry", price: "$20.00", Image: "/images/product-2.jpg", discount: "" },
    { name: "Green Beans", price: "$25.00", Image: "/images/product-3.jpg", discount: "" },
    { name: "Purple Cabbage", price: "$15.00", Image: "/images/product-4.jpg", discount: "" },
    { name: "Tomato", price: "$10.00", Image: "/images/product-5.jpg", discount: "20%" },
    { name: "Broccoli", price: "$20.00", Image: "/images/product-6.jpg", discount: "" },
    { name: "Carrots", price: "$12.00", Image: "/images/product-7.jpg", discount: "" },
    { name: "Fruit Juice", price: "$20.00", Image: "/images/product-8.jpg", discount: "" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, products.length - itemsPerPage)
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-green-500">
        Our Products
      </h1>
      <p className="text-center text-gray-600 mb-6 sm:mb-8">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
      </p>
      <div className="flex flex-col items-center">
        <div className="relative flex items-center w-full max-w-full">
          <button
            onClick={handlePrevious}
            className="bg-green-500 text-white px-3 py-2 rounded-full shadow-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={startIndex === 0}
          >
            &#8592;
          </button>
          <div className="flex gap-4 mx-auto items-center justify-center w-full">
            {products.slice(startIndex, startIndex + itemsPerPage).map((product, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 ease-in-out relative"
              >
                {product.discount && (
                  <div className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-full ">
                    {product.discount}
                  </div>
                )}
                <div className="relative w-full h-64">
                  <Image
                    src={product.Image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-t-md object-cover" // Use object-cover class here
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-sm sm:text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-green-500 text-white px-3 py-2 rounded-full shadow-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={startIndex + itemsPerPage >= products.length}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}