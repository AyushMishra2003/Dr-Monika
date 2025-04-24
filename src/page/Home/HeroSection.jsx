import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="font-sans">
      {/* Hero Section - Full Screen Height */}
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 relative overflow-hidden flex items-center py-20">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-pink-300 rounded-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side Image */}
            <div className="lg:w-1/4 mb-6 lg:mb-0 transform -rotate-6 relative animate-pulse">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/07/banner1.jpg" alt="Smiling child" className="rounded-xl" />
              </div>
            </div>
            
            {/* Center Content */}
            <div className="lg:w-2/4 text-center mb-8 lg:mb-0">
              <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm p-8 rounded-3xl shadow-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 leading-tight">
                  Growing Smiles, Healing Hearts
                </h1>
                <p className="text-gray-700 text-xl mb-8 font-light">
                  Where every child receives the gentlest care, the warmest smiles, and the brightest medical expertise.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center transform transition-transform hover:scale-105 shadow-lg">
                    Book Appointment
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                  <button className="bg-white text-pink-600 border-2 border-pink-500 px-8 py-4 rounded-full font-medium hover:bg-pink-50 flex items-center justify-center transform transition-transform hover:scale-105 shadow-lg">
                    Our Services
                  </button>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  <div className="flex items-center">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <span className="ml-2 font-medium text-gray-700">Compassionate Care</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                      </svg>
                    </div>
                    <span className="ml-2 font-medium text-gray-700">Expert Pediatricians</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="ml-2 font-medium text-gray-700">24/7 Care</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side Image */}
            <div className="lg:w-1/4 transform rotate-6 relative animate-pulse">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/07/banner2.jpg" alt="Doctor with child" className="rounded-xl" />
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-pink-600">5000+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-pink-600">50+</h3>
                <p className="text-gray-600">Specialists</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-pink-600">20+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-pink-600">24/7</h3>
                <p className="text-gray-600">Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Shape at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}