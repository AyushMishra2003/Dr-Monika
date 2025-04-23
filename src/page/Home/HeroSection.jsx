import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
      {/* Background elements and design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Medical background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/api/placeholder/100/100')] bg-repeat"></div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-between">
        {/* Left side (text content) */}
        <div className={`max-w-xl lg:w-1/2 text-white transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="mb-4">
            <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              Premier Healthcare
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Dr. Monika Pandey
            <span className="block text-yellow-300 mt-2">Excellence in Medicine</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 font-light">
            Transforming lives through compassionate care and medical innovation
          </p>
          
          <p className="mb-8 text-lg opacity-90">
            Experience world-class medical treatment with personalized care. Dr. Pandey combines cutting-edge expertise with a warm, patient-centered approach.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book Appointment
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-full font-semibold text-lg hover:-translate-y-1 transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
              Our Services
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5000+', label: 'Patients Treated' },
              { value: '98%', label: 'Patient Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md p-4 rounded-lg border-l-4 border-yellow-400 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side (doctor image) */}
        <div className={`lg:w-2/5 mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-red-500 rounded-full opacity-20 animate-pulse delay-300"></div>
            
            <div className="relative z-10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm p-4 rounded-2xl shadow-2xl">
              <img 
                src="/api/placeholder/600/800" 
                alt="Dr. Monika Pandey" 
                className="w-full h-auto rounded-xl object-cover shadow-lg"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-xl p-4 shadow-xl flex items-center max-w-xs animate-bounce-slow">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-gray-800">
                  <h3 className="font-bold text-lg">Emergency Care</h3>
                  <p className="text-sm text-gray-600">24/7 priority appointments available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-blue-300 opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-red-300 opacity-20 animate-float-delay"></div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-delay {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
        
        .animate-bounce-slow {
          animation: bounce 4s infinite;
        }
      `}</style>
    </div>
  );
}