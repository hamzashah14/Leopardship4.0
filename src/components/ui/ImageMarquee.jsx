import React from "react";

const siranimages = [
  'Siran1.jpg',
  'Siran2.jpg',
  'Siran3.jpg',
  'Siran4.jpg',
  'Siran5.jpg',
  'Siran6.jpg',
];

const baseUrl = import.meta.env.BASE_URL;

const ImageMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8 bg-white">
      {/* Left and right fading edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex animate-marquee space-x-6">
        {[...images, ...images].map((img, idx) => (
          <img
            key={idx}
            src={`${baseUrl}images/${img}`}
            alt={`Slide ${idx}`}
            className="w-60 h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
