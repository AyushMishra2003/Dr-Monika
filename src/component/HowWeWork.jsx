import { useState, useEffect } from 'react';
import { Calendar, Clipboard, Stethoscope, FileText, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowWeWorkPremium() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const steps = [
    {
      icon: <Calendar strokeWidth={1.5} size={36} />,
      title: "Schedule Consultation",
      description: "Book your appointment through our online portal or contact our friendly staff by phone.",
      number: "01"
    },
    {
      icon: <Clipboard strokeWidth={1.5} size={36} />,
      title: "Initial Assessment",
      description: "Complete your medical history form and discuss your health concerns with our nursing team.",
      number: "02"
    },
    {
      icon: <Stethoscope strokeWidth={1.5} size={36} />,
      title: "Doctor Consultation",
      description: "Meet with Dr. Monika for a thorough examination and personalized care plan discussion.",
      number: "03"
    },
    {
      icon: <FileText strokeWidth={1.5} size={36} />,
      title: "Treatment Plan",
      description: "Receive your customized treatment recommendations and prescription if needed.",
      number: "04"
    },
    {
      icon: <PhoneCall strokeWidth={1.5} size={36} />,
      title: "Ongoing Care",
      description: "Get continuous support through follow-up visits and our 24/7 patient portal.",
      number: "05"
    }
  ];

  // Auto-rotate through steps on desktop
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
          setIsAnimating(false);
        }, 300);
      }
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAnimating, steps.length]);

  const handleStepChange = (index) => {
    if (activeStep !== index && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep(index);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="w-full bg-gray-100 lg:py-12 py-4 sm:py-6 md:py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-[#5B2E67] font-medium text-sm mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-[#5B2E67]">How We </span>
            <span className="text-[#E47F97]">Work</span>
          </h2>
          <div className="relative w-24 h-2 mx-auto mb-6">
            <div className="absolute inset-0 bg-[#E47F97] rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E47F97] to-[#5B2E67] rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience our streamlined approach to healthcare with Dr. Monika's signature five-step process, designed with your comfort and care in mind.
          </p>
        </div>

        {/* Desktop View - Interactive Hexagon Process */}
        <div className="hidden lg:block relative mb-16">
          <div className="flex justify-center items-center min-h-96">
            {/* Center Circle */}
            <div className="absolute z-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#E47F97] to-[#5B2E67] shadow-lg flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center flex-col p-6">
                <div className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E47F97] to-[#5B2E67] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  {steps[activeStep].number}
                </div>
                <h3 className={`text-xl font-bold text-[#5B2E67] text-center mt-2 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  {steps[activeStep].title}
                </h3>
                <p className={`text-sm text-gray-600 text-center mt-2 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  {steps[activeStep].description}
                </p>
              </div>
            </div>
            
            {/* Outer Steps */}
            <div className="relative w-full h-96">
              {steps.map((step, index) => {
                // Calculate position in a circle
                const angleInRadians = ((index / steps.length) * 2 * Math.PI) - (Math.PI / 2);
                const radius = 300; // Distance from center
                const x = Math.cos(angleInRadians) * radius;
                const y = Math.sin(angleInRadians) * radius;
                
                return (
                  <div
                    key={index}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-16 h-16 rounded-full 
                    flex items-center justify-center cursor-pointer transition-all duration-500 
                    ${activeStep === index ? 'bg-[#E47F97] text-white scale-125 shadow-lg z-20' : 'bg-white text-[#5B2E67] shadow-md hover:scale-110'}`}
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    onClick={() => handleStepChange(index)}
                  >
                    <div className="flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                );
              })}
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 600 600">
                {steps.map((_, index) => {
                  const angleInRadians = ((index / steps.length) * 2 * Math.PI) - (Math.PI / 2);
                  const outerX = Math.cos(angleInRadians) * 300 + 300;
                  const outerY = Math.sin(angleInRadians) * 300 + 300;
                  
                  return (
                    <line 
                      key={index}
                      x1="300" 
                      y1="300" 
                      x2={outerX} 
                      y2={outerY}
                      stroke={activeStep === index ? "#E47F97" : "#DDD"}
                      strokeWidth={activeStep === index ? "3" : "1"}
                      strokeDasharray={activeStep === index ? "0" : "5,5"}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
        
        {/* Tablet View - Timeline */}
        <div className="hidden sm:block lg:hidden mb-12">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#E47F97] to-[#5B2E67]"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-left' : 'pl-12 text-left'}`}>
                  <span className="block text-sm font-bold text-[#E47F97] mb-1">{step.number}</span>
                  <h3 className="text-xl font-bold text-[#5B2E67] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-justify">{step.description}</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#E47F97] flex items-center justify-center z-10">
                  <div className="text-[#5B2E67]">{step.icon}</div>
                </div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile View - Modern Card Carousel */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden pb-12">
            <div className={`flex transition-transform duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`} style={{ transform: `translateX(-${activeStep * 100}%)` }}>
              {steps.map((step, index) => (
                <div key={index} className="min-w-full p-1">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="h-3 bg-gradient-to-r from-[#E47F97] to-[#5B2E67]"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                          <div className="text-[#5B2E67]">{step.icon}</div>
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-[#E47F97]">{step.number}</span>
                          <h3 className="text-xl font-bold text-[#5B2E67]">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md text-[#5B2E67] flex items-center justify-center hover:bg-pink-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {steps.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all ${activeStep === idx ? 'w-6 bg-[#E47F97]' : 'bg-gray-300'}`}
                    onClick={() => handleStepChange(idx)}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md text-[#5B2E67] flex items-center justify-center hover:bg-pink-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="lg:mt-16  md:mt-8 text-center">
          <Link to={"/contact"} 
    
            className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-[#E47F97] to-[#5B2E67] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-200"
          >
            <span className="absolute left-0 w-0 h-full rounded-full bg-white opacity-10 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative flex items-center">
              <Calendar className="w-5 h-5 mr-2" /> 
              Book Your Appointment
            </span>
          </Link>
          <p className="mt-4 text-gray-500 text-sm">Or call us        <a href="tel:9838346118" className="hover:text-[#5B2E67]">+91 9838346118</a></p>
        </div>
      </div>
    </div>
  );
}