import React from 'react';
import image from '../../assets/resize.png'
import { useNavigate } from 'react-router-dom';


export default function MonikaAbout() {


  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 md:p-6">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Information */}
        <div className="w-full lg:w-2/3 p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-900">Dr. Monika Pandey</h1>
          <h2 className="text-lg md:text-xl font-semibold text-[#E47F9F] mt-2">
            Leading Specialist in Obstetrics, Gynecology, and Infertility Treatments
          </h2>
  
          <div className="mt-4 md:mt-6">
            <p className="text-gray-700 mb-4">
              Dr. Monika Pandey is a renowned <span className="font-semibold">Obstetrician & Gynecologist</span> with extensive
              expertise in <span className="font-semibold">Infertility Treatments</span>. With a deep commitment to Women’s Health,
              she provides comprehensive care in all aspects of Obstetrics, Gynecology, and Reproductive Health.
              Passionate about helping couples achieve Parenthood, Dr. Monika Pandey offers personalized Infertility
              Treatments and Advanced Techniques, including IVF.
            </p>
            <p className="text-gray-700 mb-4">
              Her specialties include <span className="font-semibold">Pregnancy Care, High-Risk Pregnancy Management, Normal and Cesarean Deliveries,
              PCOS, Irregular Periods, Family Planning, Cervical Cancer Screening and Vaccination, Menopause Care,</span> and
              <span className="font-semibold"> Fertility Treatments</span>. Combining her expertise with a compassionate approach,
              Dr. Monika Pandey ensures every patient receives the highest standard of care in a supportive, nurturing environment.
            </p>
  
            <div className="mt-6">
              <button
                onClick={() => navigate("/appoitment")}
                className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white px-4 py-2 rounded-md transition duration-300 mr-2"
              >
                Book Appointment
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-purple-800 border border-purple-800 px-4 py-2 rounded-md hover:bg-purple-50 transition duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
  
        {/* Right side - Photo */}
        <div className="w-full lg:w-1/3 p-4 md:p-0">
          <div className="h-full flex items-center justify-center bg-gray-100">
            <img
              src={image}
              alt="Dr. Monika Pandey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}