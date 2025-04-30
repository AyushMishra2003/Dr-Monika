import { useState } from 'react';
import { Calendar, Clipboard, Stethoscope, FileText, PhoneCall, ChevronDown, ChevronUp } from 'lucide-react';

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(null);

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

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  // Custom color variables based on the provided hex codes
  const primaryColor = "#E47F97"; // Rose/pink
  const secondaryColor = "#5B2E67"; // Deep purple

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4" style={{ color: secondaryColor }}>
            Your Journey to Better Health
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: primaryColor }}>
            Dr. Monika's patient-centered approach ensures a seamless experience from your first call to ongoing care
          </p>
          <div 
            className="mt-6 w-24 h-1 mx-auto rounded-full" 
            style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
          ></div>
        </div>

        {/* Desktop version - Timeline */}
        <div className="hidden lg:flex justify-between items-start mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-1/5 px-4 relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 w-full h-0.5 bg-pink-200 left-1/2" style={{ backgroundColor: `${primaryColor}40` }}>
                  <div 
                    className="w-0 h-full group-hover:w-full transition-all duration-700" 
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                </div>
              )}
              
              {/* Icon circle */}
              <div 
                className="bg-white p-4 rounded-full border-2 shadow-lg mb-4 relative z-10 group-hover:border-purple-600 group-hover:bg-pink-50 transition-all duration-300" 
                style={{ borderColor: primaryColor, "--hover-border-color": secondaryColor }}
              >
                <div style={{ color: primaryColor }} className="group-hover:text-purple-700 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>
              
              {/* Step number */}
              <div 
                className="absolute -top-3 -right-3 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center z-20" 
                style={{ backgroundColor: secondaryColor }}
              >
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-2" style={{ color: secondaryColor }}>{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile & Tablet version - Accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button 
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-full mr-3 relative" style={{ backgroundColor: `${primaryColor}15` }}>
                    <div style={{ color: primaryColor }}>{step.icon}</div>
                    <div 
                      className="absolute -top-2 -right-2 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center" 
                      style={{ backgroundColor: secondaryColor }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: secondaryColor }}>{step.title}</h3>
                </div>
                {activeStep === index ? 
                  <ChevronUp style={{ color: primaryColor }} size={20} /> : 
                  <ChevronDown style={{ color: primaryColor }} size={20} />
                }
              </button>
              
              {activeStep === index && (
                <div className="p-4 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-2 text-center">
          <a 
            href="#book-appointment" 
            className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ 
              background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
              "--hover-bg": `linear-gradient(to right, ${secondaryColor}, ${primaryColor})`
            }}
          >
            Schedule Your Visit
            <Calendar className="ml-2" size={18} />
          </a>
          <p className="mt-4 text-sm text-gray-500">Experience the difference with Dr. Monika's personalized care</p>
        </div>
      </div>
    </div>
  );
}