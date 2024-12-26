"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Background Section */}
      <div
        className="absolute inset-0 h-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      ></div>

      {/* Navbar */}
      <div className="relative z-10 bg-black shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-700">VEGEFOODS</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-200 hover:text-green-400">
              Home
            </Link>
            <Link href="/About" className="text-gray-200 hover:text-green-400">
              About
            </Link>
            <Link href="/Blog" className="text-gray-200 hover:text-green-400">
              Blog
            </Link>
            <Link href="/Contact" className="text-gray-200 hover:text-green-400">
              Contact
            </Link>
            <div className="text-gray-200 hover:text-green-400 flex items-center">
              <span className="text-xl hover:bg-green-400">🛒</span>
            </div>
          </nav>

          {/* Burger Menu Button for Mobile */}
          <button
            className="md:hidden text-gray-200 hover:text-green-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white">
            <nav className="flex flex-col items-start space-y-4 px-6 py-4">
              <Link href="/" className="hover:text-green-500">
                Home
              </Link>
              <Link href="/About" className="hover:text-green-500">
                About
              </Link>
              <Link href="/Blog" className="hover:text-green-500">
                Blog
              </Link>
              <Link href="/Contact" className="hover:text-green-500">
                Contact
              </Link>
              {/* Shopping Cart inside Mobile Menu */}
              <div className="bg-green-700 text-white px-4 py-2 rounded-md mt-4">
                🛒 
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;  