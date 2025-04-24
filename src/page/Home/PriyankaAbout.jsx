import { useState } from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';

const PriyankaAbout=()=> {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full bg-gradient-to-r from-pink-100 to-pink-50">
      <div className="container mx-auto px-10  py-12 md:py-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="w-full md:w-2/5">
            <div className="rounded-full overflow-hidden border-8 border-pink-300 shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img 
                src="/api/placeholder/400/400" 
                alt="Dr. Priyanka" 
                className="w-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-4">
              Dr. Priyanka
            </h1>
            <h2 className="text-xl md:text-2xl text-pink-500 font-medium mb-6">
              Specialist in Healthcare
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl">
              Dr. Priyanka brings over 10 years of experience in providing compassionate and comprehensive healthcare. With a focus on preventive medicine and holistic wellness, she is dedicated to helping patients achieve their optimal health goals.
            </p>
            
            {/* Quick Info */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <Calendar className="text-pink-500 mr-2" size={20} />
                <span className="text-gray-600">Available Mon-Fri</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="text-pink-500 mr-2" size={20} />
                <span className="text-gray-600">24/7 Support</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="text-pink-500 mr-2" size={20} />
                <span className="text-gray-600">Quick Response</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className={`px-8 py-3 rounded-full bg-pink-500 text-white font-medium text-lg transition-all duration-300 transform ${
                  isHovered ? 'bg-pink-600 scale-105' : ''
                } hover:bg-pink-600 hover:shadow-lg`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Book Appointment
              </button>
              <button className="px-8 py-3 rounded-full bg-white text-pink-500 font-medium text-lg border-2 border-pink-300 hover:border-pink-500 transition-all duration-300 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriyankaAbout