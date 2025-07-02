import React, { useState } from 'react';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatYouDo: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      whatYouDo: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto p-8">
      <div className="bg-white px-6 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-LTMuseum">
              Contact Info
            </h2>
            <p className="text-gray-700 mb-4">
              We'd love to hear from you! Reach out to us through any of the following ways.
            </p>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="h-6 w-6 text-red-800 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p>123 Leopardship St, Adventure City, Country</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="h-6 w-6 text-red-800 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="h-6 w-6 text-red-800 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>contact@leopardship.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-6 md:pt-0">
            <div>
              <label htmlFor="fullName" className="block text-gray-900 font-semibold mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 font-semibold mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="whatYouDo" className="block text-gray-900 font-semibold mb-1">
                What you Do?
              </label>
              <input
                type="text"
                id="whatYouDo"
                name="whatYouDo"
                value={formData.whatYouDo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
                placeholder="Your profession or role"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-900 font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
                placeholder="Subject of your message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-900 font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 font-medium hover:bg-red-800 transition-colors cursor-pointer duration-200 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
