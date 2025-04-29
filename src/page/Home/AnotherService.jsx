import React from "react";

const ServiceCard = ({ title, subtitle, description, icon, color }) => {
  return (
    <div className={`rounded-lg p-8 ${color} text-white flex flex-col h-full`}>
      <div className="flex-1">
        <h3 className="text-xl font-normal mb-1">{title}</h3>
        <h2 className="text-3xl font-bold mb-4">{subtitle}</h2>
        <p className="mb-8">{description}</p>
      </div>
      <div className="flex justify-between items-end">
        <button className="flex items-center text-white hover:underline">
          <span>Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex-shrink-0">
          {icon}
        </div>
      </div>
    </div>
  );
};

const AnotherService=()=> {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:py-12 md:py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Instant Video Consultation Card */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ServiceCard
            title="Instant Video"
            subtitle="Consultation"
            description="Connect within 60 secs with our medical expert of Hospa General Hospital."
            color="bg-emerald-400"
            icon={
              <svg className="w-32 h-32 opacity-90" viewBox="0 0 100 100">
                <path d="M85,45c-3.3-1.5-7-2.3-11-2.3c-14.4,0-26,11.6-26,26c0,4,0.9,7.7,2.4,11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M50,80c-3.3,1.5-7,2.3-11,2.3c-14.4,0-26-11.6-26-26c0-4,0.9-7.7,2.4-11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M50,25c0,0-10,5-10,15s10,15,10,15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M60,40c0,0-10,5-10,10s0,15,0,15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />
        </div>

        {/* 24/7 Medicines Card */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ServiceCard
            title="24/7"
            subtitle="Medicines"
            description="Essentials at your doorstep anytime in emergency situation."
            color="bg-purple-400"
            icon={
              <svg className="w-32 h-32 opacity-90" viewBox="0 0 100 100">
                <circle cx="60" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="75" cy="60" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="40" y="65" width="10" height="25" rx="5" transform="rotate(-45 45 75)" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="25" y="50" width="10" height="25" rx="5" transform="rotate(-45 30 60)" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
          />
        </div>

        {/* Accurate Lab Tests Card */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ServiceCard
            title="Accurate"
            subtitle="Lab Tests"
            description="Sample pickup at your home & give 99.8% accuracy in results."
            color="bg-red-400"
            icon={
              <svg className="w-32 h-32 opacity-90" viewBox="0 0 100 100">
                <path d="M50,20v15L35,65c-2,5,0,15,15,15s17-10,15-15L50,35" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="60" cy="45" r="3" fill="currentColor"/>
                <circle cx="45" cy="55" r="2" fill="currentColor"/>
                <circle cx="55" cy="65" r="4" fill="currentColor"/>
                <circle cx="42" cy="70" r="3" fill="currentColor"/>
                <path d="M40,80h20" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AnotherService