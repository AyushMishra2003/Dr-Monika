import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, ArrowRight, Shield, Star, Clock } from 'lucide-react';

const HomeService = () => {
  // Brand colors
  const primaryPink = "#E47F97";
  const primaryPurple = "#5B2E67";

  const services = [
    {
      id: "gynecology",
      title: "Obstetrics & Gynecology",
      subtitle: "Complete Women's Healthcare",
      description:
        "Sadbhawna Clinic provides comprehensive women’s health care, including pregnancy support, preventive services, and specialized treatments.",
      icon: <Heart className="h-10 w-10" />,
      color: primaryPink,
      features: [
        {
          icon: <Shield className="h-5 w-5" />,
          text: "Comprehensive women’s health care at all life stages"
        },
        {
          icon: <Star className="h-5 w-5" />,
          text: "Pregnancy support and antenatal care"
        },
        {
          icon: <Shield className="h-5 w-5" />,
          text: "Management of menstrual, hormonal, and fertility issues"
        },
        {
          icon: <Star className="h-5 w-5" />,
          text: "Preventive screenings and wellness check-ups"
        }
      ],
      link: "/services/gynecology"
    },
    {
      id: "psychiatry",
      title: "Psychiatrist",
      subtitle: "Mental Health & Wellness",
      description:
        "Comprehensive psychiatric care for emotional, behavioral, and mental health challenges through personalized treatment plans.",
      icon: <Activity className="h-10 w-10" />,
      color: primaryPurple,
      features: [
        {
          icon: <Shield className="h-5 w-5" />,
          text: "Treatment for anxiety, depression, and stress disorders"
        },
        {
          icon: <Star className="h-5 w-5" />,
          text: "Management of mood, sleep, and behavioral issues"
        },
        {
          icon: <Shield className="h-5 w-5" />,
          text: "Counseling and therapy for individuals and families"
        },
        {
          icon: <Star className="h-5 w-5" />,
          text: "Personalized treatment plans for each patient"
        }
      ],
      link: "/services/physiotherapy"
    },
  
  ];
  

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="md:text-center text-start lg:mb-16 mb-6 md:mb-8 ">


          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: primaryPurple }}>
            Our Specialized Services
          </h2>
          <div className="w-32 h-1 mx-auto mb-6" style={{ backgroundColor: primaryPink }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:text-center text-justify">

            <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:text-center text-justify">
              Sadbhawna Clinic provides expert Psychiatry and Gynecology services, offering compassionate and confidential care for mental wellness and women’s health at every stage of life.
            </p>

          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group"
              style={{ borderBottom: `5px solid ${service.color}` }}
            >
              <div className="p-4 md:6 lg:p-10">
                {/* Card Header */}
                <div className="flex items-center mb-6">
                  <div
                    className="p-3 rounded-xl mr-4 group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: service.color }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div
                        className="p-1.5 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <div style={{ color: service.color }}>
                          {feature.icon}
                        </div>
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <Link
                  to={service.link}
                  className="inline-flex items-center group/btn"
                >
                  <div
                    className="relative px-6 py-3 rounded-lg text-white font-medium overflow-hidden"
                    style={{ backgroundColor: service.color }}
                  >
                    <span className="relative z-10">View More Details</span>
                    <div className="absolute top-0 -right-12 w-12 h-full bg-white bg-opacity-20 skew-x-[-20deg] transform transition-all duration-500 group-hover/btn:right-0"></div>
                  </div>
                  <div
                    className="ml-3 w-8 h-8 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover/btn:translate-x-1"
                    style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-20 bg-gray-50 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryPurple }}>10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="h-16 border-l border-gray-300 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryPurple }}>5000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="h-16 border-l border-gray-300 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: primaryPurple }}>98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeService;