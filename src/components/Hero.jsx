import React from "react";
import { Link } from "react-router-dom";
import AnimatedText from "./ui/AnimatedText";

const Hero = () => {

  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section className="bg-white pt-16 pb-12 lg:pt-8 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Embrace Adventure,{" "}
                <span className="block">Empower Your Journey</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Join Leopardship and discover the thrill of adventure while
                promoting sustainable tourism. Together, we empower youth to
                thrive in the extremes of nature.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium rounded-md transition-colors duration-200 shadow-lg cursor-pointer hover:shadow-xl w-full sm:w-auto">
                  Register
                </button>
              </Link>
              <button className="border border-gray-300 cursor-pointer text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium rounded-md transition-colors duration-200 w-full sm:w-auto">
                Learn More
              </button>
            </div>

            <AnimatedText
              text="📍 Our Venue: Siran Valley, Mansehra, KPK"
              textClassName="text-lg sm:text-lg text-right"
              underlineClassName="text-red-600"
              className="mt-12 self-end"
            />
          </div>

          {/* Right Image */}
          <div className="lg:order-last">
            <div className="relative">
              {/* Actual Image from public/images */}
              <img
                src={`${baseUrl}images/Hero.png`}
                alt="Leopardship Adventure"
                className="w-full h-96 lg:h-[450px] object-cover rounded-lg shadow-md"
                loading="lazy"
              />

              {/* Optional: Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
