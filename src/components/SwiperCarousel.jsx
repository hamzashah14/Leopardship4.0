import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

const SwiperCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
          bulletClass: "custom-swiper-pagination-bullet",
          bulletActiveClass: "custom-swiper-pagination-bullet-active",
        }}
        dir="rtl"
        className="mb-8"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              loading="lazy"
              className="w-full h-80 lg:h-96 object-cover rounded-lg"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows - Outside the images */}
      <div className="custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="red" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </div>
      <div className="custom-swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="red" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="9,6 15,12 9,18"></polyline>
        </svg>
      </div>

      {/* Custom Pagination Dots - Outside the images */}
      <div className="custom-swiper-pagination flex justify-center mt-4 space-x-2"></div>

      {/* Custom Styles */}
      <style>{`
        .custom-swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid black;
          background: transparent;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination-bullet-active {
          background: red !important;
        }
        .custom-swiper-button-prev:hover svg,
        .custom-swiper-button-next:hover svg {
          stroke: #dc2626;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default SwiperCarousel;