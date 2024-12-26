import Image from 'next/image';
import Icons from '../components/Icons';
import Hero from './Hero';

export default function About() {
  return (
    <div>
      <Hero />

      {/* Image and Text Section at the top */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Section: Image */}
          <div className="relative w-full h-80 md:h-auto group mt-4">
            <Image
              src="/images/aboutgirl.jpg"
              alt="Fresh vegetables"
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
          </div>

          {/* Right Section: Text */}
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-black-500 mb-6">
              Welcome to Vegefoods: Fresh, Local, and Healthy
            </h1>
            <p className="text-gray-600 mb-6">
              At Vegefoods, we believe in providing the freshest, locally-sourced produce to our customers. Our commitment to quality ensures that every product you find with us is grown sustainably and harvested at its peak.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is simple: to connect people with the healthiest food options available. From vibrant fruits and vegetables to a variety of organic selections, we strive to make fresh, nutritious food accessible to everyone.
            </p>
            <p className="text-gray-600 mb-6">
              We work closely with local farmers, ensuring that our products are fresh, ethically sourced, and full of flavor. At Vegefoods, every meal is an opportunity to nourish your body and support sustainable agriculture.
            </p>
          </div>
        </div>
      </div>

      {/* Icons Section*/}
      <div className="flex justify-center items-center w-full mt-10">
        <Icons />
      </div>
    </div>
  );
}
