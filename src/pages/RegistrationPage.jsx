import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ImageMarquee from '../components/ui/ImageMarquee';
import RegistrationForm from '../components/ui/RegistrationForm';
import welcomeText from '../data/welcomeText.json';

const RegistrationPage = () => {
  return (
    <div>
      <div
        className="relative w-full h-80 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/RegBack.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Link
          to="/"
          className="absolute top-4 left-4 z-10 flex items-center text-white hover:text-red-600 font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
        <h1 className="text-4xl font-bold z-10">Registration</h1>
        <p className="z-10 mt-3 text-white text-sm">Home / <span className="text-red-600">Registration</span></p>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <main className="max-w-4xl mx-auto p-6">

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Venue</h2>
          <p className="text-lg leading-relaxed mb-6">
            Nestled in the serene foothills of the Himalayan range, <span style={{ backgroundColor: 'red', color: 'white' }}>Siran Valley in Mansehra, Khyber Pakhtunkhwa</span> is a hidden gem of natural beauty and tranquility. Surrounded by lush green meadows, snow-fed streams, and towering pine forests, this valley offers the perfect backdrop for adventure, resilience, and self-discovery.
          </p>
          <ImageMarquee />
          <p className="text-lg leading-relaxed">
            Its peaceful atmosphere and rugged terrain make it an ideal venue to test physical strength, develop leadership skills, and reconnect with nature. From starry nights and campfires to challenging treks and breathtaking vistas, Siran Valley promises an unforgettable experience.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Registration Form</h2>
          <RegistrationForm welcomeText={welcomeText} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
