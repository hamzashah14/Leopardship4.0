import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu on navigation
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/src/assets/logo.png" alt="Logo" className="h-20 object-contain" />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-black px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-black px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-black px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Events List
            </button>
            <button
              onClick={() => scrollToSection('calltoaction')}
              className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-black px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Get Involved
            </button>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/register">
              <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl inline-block text-center">
                Register
              </button>
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="border border-transparent text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium underline rounded-md transition-colors duration-200 inline-block text-center"
            >
              Learn More
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative text-gray-700 hover:text-gray-900 p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-base font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-base font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-base font-medium"
          >
            Events List
          </button>
          <button
            onClick={() => scrollToSection('calltoaction')}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-base font-medium"
          >
            Get Involved
          </button>
          <a
            href="/register"
            className="block w-full text-center bg-red-600 text-white px-3 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-200"
          >
            Register
          </a>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-center border border-transparent text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium underline transition-colors duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;