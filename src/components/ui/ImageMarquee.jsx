import React from "react";

const images = [
  "/images/Siran1.jpg",
  "/images/Siran2.jpg",
  "/images/Siran3.jpg",
  "/images/Siran4.jpg",
  "/images/Siran5.jpg",
  "/images/Siran6.jpg",
];

const ImageMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8 bg-white">
      {/* Left and right fading edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex animate-marquee space-x-6">
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="w-60 h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
