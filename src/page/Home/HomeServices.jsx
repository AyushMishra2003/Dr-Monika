import React from 'react';
import { Heart, Activity, Stethoscope, Pill, User, Baby, Brain, Bone } from 'lucide-react';

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: "General Medicine",
      description: "Complete health consultations and treatments for common illnesses and conditions.",
      icon: <Stethoscope className="h-8 w-8 text-pink-500" />
    },
    {
      id: 2,
      title: "Women's Health",
      description: "Specialized care for women's health issues with compassionate treatment.",
      icon: <User className="h-8 w-8 text-pink-500" />
    },
    {
      id: 3,
      title: "Child Care",
      description: "Gentle healthcare for infants, children and adolescents with proper guidance.",
      icon: <Baby className="h-8 w-8 text-pink-500" />
    },
    {
      id: 4,
      title: "Cardiology",
      description: "Heart health monitoring and treatments for cardiovascular conditions.",
      icon: <Heart className="h-8 w-8 text-pink-500" />
    },
    {
      id: 5,
      title: "Pharmacy",
      description: "All types of medications with expert guidance for proper usage.",
      icon: <Pill className="h-8 w-8 text-pink-500" />
    },
    {
      id: 6,
      title: "Diagnostics",
      description: "Complete testing services to accurately diagnose health conditions.",
      icon: <Activity className="h-8 w-8 text-pink-500" />
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Services</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dr. Monika Pandey's Clinic offers comprehensive healthcare services with all types of medications available for your medical needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-t-4 border-pink-500"
            >
              <div className="bg-pink-50 p-3 inline-block rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full px-6 py-3 transition-colors duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;