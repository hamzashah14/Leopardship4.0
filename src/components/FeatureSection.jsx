import React from 'react';
import { ChevronRight, Star, Globe, Users, Repeat, Zap, TreePine, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Star className="h-12 w-12 text-gray-800 group-hover:text-red-600" />,
      title: "Embracing Individuality",
      description:
        "The theme emphasizes the importance of recognizing and appreciating the qualities that make each person unique. It encourages individuals to explore their personal strengths, talents, & passions, empowering them to express themselves authentically and with confidence.",
      link: "Learn More",
    },
    {
      icon: <Globe className="h-12 w-12 text-gray-800 group-hover:text-red-600" />,
      title: "Celebrating Diversity",
      description:
        "Leopardship highlights the beauty & richness that arises from diverse perspectives, backgrounds, & cultures. It promotes the idea that by embracing diversity, we can create a more vibrant and harmonious society, where everyone's voice is valued and respected.",
      link: "Learn More",
    },
    {
      icon: <Users className="h-12 w-12 text-gray-800 group-hover:text-red-600" />,
      title: "Inclusion and Equality",
      description:
        "The theme encourages fostering an inclusive environment where every individual feels welcome, accepted, and valued. It advocates for breaking down barriers & promoting equal opportunities for all, regardless of factors such as race, gender, ethnicity, or socio-economic background.",
      link: "Learn More",
    },
    {
      icon: <Repeat className="h-12 w-12 text-gray-800 group-hover:text-red-600" />,
      title: "Resilience and Adaptability",
      description:
        "Inspired by the leopard's ability to adapt to various environments, Leopardship encourages individuals to develop resilience & adaptability in the face of challenges. It celebrates the strength and determination required to navigate through obstacles, encouraging personal growth and self-improvement.",
      link: "Learn More",
    },
    {
      icon: <Zap className="h-12 w-12 text-gray-800 group-hover:text-red-600" />,
      title: "Impactreneurship Unleashed",
      description:
        "Dive into the core of Impactreneurship - the blend of entrepreneurship and social responsibility. Learn how your ideas can be a force for good.",
      link: "Learn More",
    },
    {
      icon: <TreePine className="h-12 w-12 text-gray-800 group-hover:text-red-600" />,
      title: "Sustainability and Conservation",
      description:
        "Understand the intersection of leadership and environmental stewardship. How can your actions contribute to a sustainable and thriving world?",
      link: "Learn More",
    },
    {
      icon: <Award className="h-12 w-12 text-gray-800 group-hover:text-red-600" />,
      title: "Empowering Leadership",
      description:
        "The theme recognizes that leadership takes many forms & can emerge from any individual. It encourages people to cultivate leadership qualities within themselves, fostering a culture where everyone feels empowered to make a positive impact and lead by example.",
      link: "Learn More",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Core Values of Leopardship:
            <span className="block">Individuality, Diversity, and Leadership</span>
          </h2>

          {/* Detailed Description */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-base text-gray-500">
              This exclusive opportunity brings together passionate individuals from diverse backgrounds to embark on a transformative journey of personal growth, environmental awareness, and sustainable adventure tourism.
            </p>
          </div>
        </div>

        {/* First Row: 4 Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{feature.title}</h3>

                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Learn More Link */}
                <div className="pt-2">
                  <button className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 group">
                    {feature.link}
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 3 Features Centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-12">
          {features.slice(4).map((feature, index) => (
            <div key={index} className="text-center group w-full sm:w-1/3">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{feature.title}</h3>

                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Learn More Link */}
                <div className="pt-2">
                  <button className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 group">
                    {feature.link}
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-red-50 text-red-700 rounded-full text-sm font-medium">
            <Users className="h-4 w-4 mr-2" />
            Limited to 100 Candidates Nationwide
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
