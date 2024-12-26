import Image from 'next/image';

const Hero = () => {
    return (
      <div className="relative w-full h-64 bg-black flex items-center justify-center">
        {/* Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/about.jpg" 
            alt="Vegetables Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
        </div>
  
        {/* Text Overlay */}
        <div className="relative text-center">
          <h1 className="text-white font-bold text-3xl uppercase tracking-wider">
            Blog
          </h1>
        </div>
      </div>
    );
  };
  
  export default Hero;
