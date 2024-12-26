"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Vegefoods</h2>
            <p className="text-sm">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-500 transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center space-x-2">
                <span className="text-sm">📍</span>
                <span className="text-sm">203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <span className="text-sm">📞</span>
                <span className="text-sm">+2 392 3929 210</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <span className="text-sm">✉️</span>
                <span className="text-sm">info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-12">
        <p>
          Copyright &copy; 2024 All rights reserved | This template is made with
          <span className="text-red-500"> ♥ </span> by Areeba Nadeem
        </p>
      </div>
    </footer>
  );
}