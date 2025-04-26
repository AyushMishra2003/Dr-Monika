import React, { useEffect } from 'react';
import { Heart, Calendar, Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import BreadCrumbs from '../../component/Breadcums';

export default function AboutDrMonika() {
  // Define our color scheme as constants
  const primaryColor = "#E47F9F";
  const secondaryColor = "#5B2E67";


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section>
      {/* <BreadCrumbs/> */}
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header with curved bottom */}
      <div 
        className="relative w-full pt-16 pb-24 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
      >
        <div 
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ 
            borderTopLeftRadius: '50% 100%', 
            borderTopRightRadius: '50% 100%', 
            transform: 'scale(1.5)' 
          }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-48 h-48 bg-white p-1 rounded-full shadow-xl mb-6 md:mb-0 md:mr-8">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Placeholder for doctor image */}
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipO7qc_MAY337K4YjBCSSUxmvTXvzbxlo4Ghr4pY=s1360-w1360-h1020" 
                  alt="Dr. Monika" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Dr. Monika Singh
              </h1>
              <p className="text-white text-xl opacity-90 mb-4">
                Obstetrics & Gynecology Specialist
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="bg-white bg-opacity-30 text-[#E48F97] px-4 py-1 rounded-full text-sm">MBBS</span>
                <span className="bg-white bg-opacity-30 text-[#E48F97] px-4 py-1 rounded-full text-sm">MD</span>
                <span className="bg-white bg-opacity-30 text-[#E48F97] px-4 py-1 rounded-full text-sm">MRCOG</span>
                <span className="bg-white bg-opacity-30 text-[#E48F97] px-4 py-1 rounded-full text-sm">FMAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Card */}
      <div className="container mx-auto px-4 md:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: primaryColor }}>
            Compassionate Care for Every Woman
          </h2>
          <p className="text-gray-700 mb-6 text-center max-w-4xl mx-auto">
            A skilled and compassionate obstetrician and gynecologist, Dr. Monika Singh is committed to not just treating her patients, but understanding them. With a unique focus on holistic healthcare and personalized treatment plans, her practice reflects the belief that women's health is deeply personal and needs an individualized approach.
          </p>
          
          <div className="flex justify-center">
            <button 
              className="px-6 py-3 rounded-full text-white font-medium transition-all hover:shadow-lg"
              style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="h-0.5 flex-1 bg-gray-200"></div>
            <Heart size={32} className="mx-4" style={{ color: primaryColor }} />
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: primaryColor }}>
            Why Patients Choose Dr. Monika
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: primaryColor }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                Expert Care
              </h3>
              <p className="text-gray-700">
                With over a decade of experience in women's health, Dr. Monika combines clinical expertise with genuine empathy for her patients. She specializes in managing complex obstetric and gynecological cases, focusing on minimally invasive procedures and preventive care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: secondaryColor }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: secondaryColor }}>
                Personal Philosophy
              </h3>
              <p className="text-gray-700">
                Her philosophy of care is simple: to empower women to make informed choices about their health while providing unwavering support. Dr. Monika believes in partnership with patients for better outcomes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: secondaryColor }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: secondaryColor }}>
                Individualized Approach
              </h3>
              <p className="text-gray-700">
                Dr. Monika believes that no two patients are the same. From the first consultation, she takes the time to listen, understand, and create a plan that's tailored to each individual's needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: primaryColor }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                Holistic Methods
              </h3>
              <p className="text-gray-700">
                She's known for her expertise in using holistic methods, advocating for lifestyle changes, and taking a conservative approach to surgery—always opting for the least invasive options first.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div 
        className="w-full py-16"
        style={{ background: `linear-gradient(to bottom right, ${primaryColor}10, ${secondaryColor}10)` }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <div className="h-0.5 flex-1 bg-gray-200"></div>
              <Award size={32} className="mx-4" style={{ color: secondaryColor }} />
              <div className="h-0.5 flex-1 bg-gray-200"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: secondaryColor }}>
              Areas of Expertise
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Obstetric Care", desc: "Complex obstetric care and high-risk pregnancies" },
                { title: "Minimally Invasive Surgery", desc: "Minimally invasive gynecological surgery" },
                { title: "Advanced Procedures", desc: "Laparoscopic and hysteroscopic procedures" },
                { title: "Reproductive Health", desc: "Comprehensive reproductive health management" },
                { title: "Infertility", desc: "Infertility consultation and treatment options" },
                { title: "Menopause", desc: "Menopause management and hormone therapy" },
                { title: "Adolescent Care", desc: "Adolescent gynecology and counseling" },
                { title: "Pelvic Health", desc: "Pelvic floor disorders and treatments" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div 
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ background: index % 2 === 0 ? `${primaryColor}20` : `${secondaryColor}20` }}
                  >
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: index % 2 === 0 ? primaryColor : secondaryColor }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: index % 2 === 0 ? primaryColor : secondaryColor }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="h-0.5 flex-1 bg-gray-200"></div>
            <BookOpen size={32} className="mx-4" style={{ color: primaryColor }} />
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: primaryColor }}>
            Education & Credentials
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            {[
              { 
                year: "2005", 
                degree: "MBBS", 
                institution: "GSVMC Medical College Kanpur",
                side: "left" 
              },
              { 
                year: "2010", 
                degree: "MD (Obstetrics and Gyenecology)", 
                institution: "KGMU, Command Hospital, Lucknow",
                side: "right" 
              },
              { 
                year: "2013", 
                degree: "MRCOG", 
                institution: "Royal College of Obstertrics and Gyenecology, London",
                side: "left" 
              },
              { 
                year: "2015", 
                degree: "FMAS & FICMCH", 
                institution: "Fellowship in Minimal Access Surgery",
                side: "right" 
              },
              { 
                year: "2017", 
                degree: "Fellowship", 
                institution: "Diagnostic and Operative Hysteroscopy",
                side: "left" 
              }
            ].map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex ${item.side === 'left' || index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="hidden md:block w-1/2"></div>
                  
                  <div 
                    className="z-10 w-8 h-8 rounded-full bg-white shadow-md border-2 mx-0 md:mx-auto flex items-center justify-center"
                    style={{ borderColor: index % 2 === 0 ? primaryColor : secondaryColor }}
                  >
                    <Calendar size={16} style={{ color: index % 2 === 0 ? primaryColor : secondaryColor }} />
                  </div>
                  
                  <div 
                    className="ml-4 md:ml-0 w-full md:w-1/2 p-4 md:p-6 bg-white rounded-lg shadow-md border-l-4"
                    style={{ borderColor: index % 2 === 0 ? primaryColor : secondaryColor }}
                  >
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                      style={{ 
                        backgroundColor: index % 2 === 0 ? `${primaryColor}20` : `${secondaryColor}20`,
                        color: index % 2 === 0 ? primaryColor : secondaryColor 
                      }}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                    <p className="text-gray-600 text-sm">{item.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Get in Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                className="text-center p-6 rounded-xl backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-white bg-opacity-20">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                <p className="text-gray-300">+91-7379127000</p>
              </div>
              
              <div 
                className="text-center p-6 rounded-xl backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-white bg-opacity-20">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-gray-300">saumya.751983@gmail.com</p>
              </div>
              
              <div 
                className="text-center p-6 rounded-xl backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-white bg-opacity-20">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="text-gray-300">14/25, Indira Nagar, Near Mahi Medical Store, Lucknow</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button 
                className="px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* Footer */}
      {/* <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Monika Singh Obstetrics & Gynecology. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
    </section>
  );
}