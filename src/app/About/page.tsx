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
              Discover Freshness at Vegefoods
            </h1>
            <p className="text-gray-600 mb-6">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>
            <p className="text-gray-600 mb-6">
              But nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her, made her drunk
              with Longe and Parole and dragged her into their agency, where they
              abused her for their.
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
