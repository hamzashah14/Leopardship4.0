import React from "react";

const PastEvents = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const events = [
    {
      id: 1,
      title: "Mountain Trekking Expedition",
      description:
        "A challenging 5-day trek through the northern mountains of Pakistan, testing endurance and building team spirit.",
      date: "March 2024",
      image: `${baseUrl}images/Event1.jpg`,
    },
    {
      id: 2,
      title: "Wilderness Survival Camp",
      description:
        "Learn essential survival skills while camping in the remote wilderness areas of Hunza Valley.",
      date: "January 2024",
      image: `${baseUrl}images/Event2.jpg`,
    },
    {
      id: 3,
      title: "Rock Climbing Adventure",
      description:
        "Professional rock climbing training and adventure in the scenic cliffs of Margalla Hills.",
      date: "November 2023",
      image: `${baseUrl}images/Event3.jpg`,
    },
    {
      id: 4,
      title: "River Rafting Challenge",
      description:
        "Thrilling white-water rafting experience through the rapids of River Chitral with safety training.",
      date: "September 2023",
      image: `${baseUrl}images/Event4.jpg`,
    },
  ];

  return (
    <section id="events" className="bg-gray-50 pt-8 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Event Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the adventure through our past events.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:brightness-90 transition duration-300 rounded-lg"
                />

                {/* Overlay on hover
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div> */}
              </div>

              {/* Event Details */}
              <div className="space-y-2">
                {/* Date */}
                <p className="text-sm text-gray-400 font-medium">
                  {event.date}
                </p>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-md transition-colors duration-200">
            View All Events
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
