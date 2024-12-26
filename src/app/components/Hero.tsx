import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-gray-100 h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', 
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          We Serve Fresh Vegetables & Fruits
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          We deliver organic vegetables & fruits
        </p>
        <Link href="/Blog">
        <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg rounded-full hover:bg-green-600 transition duration-300">
          View Blog
        </button>
        </Link>
      </div>
    </div>
  );
}