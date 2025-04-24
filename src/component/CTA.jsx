import React from 'react';
import { Smartphone, Users } from 'lucide-react';

const CTA = () => {
  return (
    <div className="w-full bg-blue-50 rounded-lg overflow-hidden">
      <div className="container mx-auto px-20 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left column: Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="uppercase tracking-wider text-blue-600 font-bold">
              Download App
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Download Our Mobile App For The <span className="text-blue-800">Best Experience</span>
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center overflow-hidden">
                    <Users size={20} className="text-blue-700" />
                  </div>
                ))}
              </div>
              <div className="ml-2">
                <p className="font-bold text-blue-700">500+ DOCTORS</p>
                <p className="text-sm text-gray-600">are available in the app</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.523 20.25C5.1935 20.25 4.919 20.1407 4.6995 19.922C4.48 19.7033 4.37 19.4297 4.37 19.101V4.899C4.37 4.57033 4.48 4.2967 4.6995 4.078C4.919 3.85933 5.1935 3.75 5.523 3.75H18.477C18.8065 3.75 19.081 3.85933 19.3005 4.078C19.52 4.2967 19.63 4.57033 19.63 4.899V19.101C19.63 19.4297 19.52 19.7033 19.3005 19.922C19.081 20.1407 18.8065 20.25 18.477 20.25H5.523ZM12 16.107L16.92 11.1885L12 6.27V16.107Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs font-light">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.0448 12.0001C17.0392 10.123 18.0618 8.59437 20.1162 7.44802C19.0335 5.91291 17.3805 5.10209 15.1882 5.01867C13.0991 4.93745 10.8144 6.37871 10.0543 6.37871C9.25249 6.37871 7.28135 5.06035 5.58145 5.06035C2.86343 5.09801 0 7.24121 0 11.591C0 12.8545 0.235883 14.1529 0.707649 15.486C1.35754 17.3369 3.93271 22.1025 6.61247 21.9999C8.00263 21.9647 9.01885 21.0152 10.8214 21.0152C12.5782 21.0152 13.5247 21.9999 15.0612 21.9999C17.7575 21.9647 20.082 17.6573 20.6972 15.7975C17.5063 14.3387 17.0448 12.1057 17.0448 12.0001ZM14.0643 3.75017C15.7541 1.79438 15.5909 0.80127 15.5555 0C14.2271 0.0791457 12.6974 0.854127 11.7861 1.80439C10.7795 2.84508 10.1865 4.10055 10.3057 5.01867C11.7244 5.11989 12.8413 4.44466 14.0643 3.75017Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs font-light">GET IT ON</div>
                  <div className="text-sm font-semibold">Apple Store</div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Right column: Image */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              
              <div className="relative z-10 bg-white rounded-3xl shadow-xl p-4 border border-gray-100">
                <div className="bg-gradient-to-r from-pink-200 to-purple-300 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-full w-1/2 bg-pink-400 opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
                  
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Smartphone className="text-blue-600 w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-md mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="text-blue-600 w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Medical Consultation</p>
                        <p className="text-xs text-gray-500">Chat with doctors anytime</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-white font-bold">
                    <p className="text-lg">Take Prescription</p>
                    <p className="text-sm font-normal">Online appointments made easy</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;