import React from "react";
import SwiperCarousel from "./SwiperCarousel";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
          About Us
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              <span className="block">What Actually</span>

              <span className="inline text-5xl font-bold bg-gradient-to-r from-red-600 via-black to-red-600 bg-clip-text text-transparent">
                Leopardship
              </span>
              <span className="inline">  is about ?</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Leopardship Youth Leadership Expedition's vision is to be
              Pakistan's premier wilderness based youth leadership program,
              empowering young individuals to unlock their potential, develop
              vital interpersonal and social leadership skills, & become
              catalysts for positive change in society. We envision a future
              where our alumni lead with passion, integrity, & a deep commitment
              to conservation, contributing to a sustainable and thriving world.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:order-last">
            <div className="relative">
              {/* Replace placeholder with SwiperCarousel */}
              <SwiperCarousel />

              {/* Optional: Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
