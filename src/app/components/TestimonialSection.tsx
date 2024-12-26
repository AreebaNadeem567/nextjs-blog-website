import Image from "next/image";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Garreth Smith",
      role: "Product Manager",
      Image: "/images/boy2.jpg",
      quote:
        "This platform has completely transformed the way we work. The experience has been seamless and efficient.",
    },
    {
      name: "James Carter",
      role: "Lead Developer",
      Image: "/images/boy1.jpg",
      quote:
        "Amazing service! It's fast, reliable, and the team behind it is always ready to help. Highly recommend it!",
    },
    {
      name: "Sharoon John",
      role: "UI/UX Designer",
      Image: "/images/boy3.jpg",
      quote:
        "The user experience is intuitive, and the interface is clean and modern. I couldn't ask for a better solution.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-12">
          Our satisfied customer says
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Discover how our services have helped clients succeed and grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <Image
                src={testimonial.Image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto mb-6"
              />
              <p className="text-center text-gray-600 italic mb-6">
              &ldquo;{testimonial.quote}&ldquo;
              </p>
              <h3 className="text-center text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;