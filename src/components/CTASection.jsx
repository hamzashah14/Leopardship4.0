import React from 'react';
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="calltoaction" className="w-full max-w-6xl mx-auto p-8">
      <div className="border-2 border-gray-900 bg-white p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the Adventure Today!
            </h2>
            <p className="text-lg text-gray-700">
              Experience the thrill of Leopardship events!
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
            <Link to="/register">
              <button className="bg-black text-white px-8 py-3 font-medium border-2 border-black hover:bg-red-600 transition-colors cursor-pointer duration-200 rounded-md text-center w-full sm:w-auto">
                Register
              </button>
            </Link>
            <button className="border-2 border-gray-900 bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-50 hover:text-red-600 transition-colors cursor-pointer duration-200 rounded-md w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
