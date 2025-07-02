import React, { useState } from "react";
import ImageCreditsModal from "./ImageCreditsModal";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="w-28 h-24 bg-transparent flex items-center justify-center">
              <img
                src="/src/assets/footer-logo.png"
                alt="Logo"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8 text-gray-300">
            <a href="#" className="hover:text-white transition-colors duration-200">Adventure Awaits</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Join Us</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Our Mission</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Get Involved</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
            <p>© 2025 Leopardship. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#" className="hover:text-white transition-colors duration-200 underline">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200 underline">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors duration-200 underline">Cookie Policy</a>
              <button
                onClick={() => setShowCredits(true)}
                className="underline hover:text-white transition-colors duration-200"
              >
                Image Credits
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageCreditsModal isOpen={showCredits} onClose={() => setShowCredits(false)} />
    </footer>
  );
};

export default Footer;
