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
            <h2 className="text-lg md:text-xl font-semibold text-[#E47F9F] mt-2">Obstetrician-Gynecologist & Family Counselor</h2>
            
            <div className="mt-4 md:mt-6">
              <p className="text-gray-700 mb-4">
                Dr. Monika Pandey is an <span className="font-semibold">Obstetrician-Gynecologist and Family Counselor</span> who operates a clinic in Indira Nagar, Bangalore. She is known for her supporting nature, good communication skills, and expertise in utilizing the latest technologies, according to patient reviews.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Practice Details</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-[#E47F9F] mr-2">•</div>
                    <div>
                      <span className="font-semibold">Specialization:</span> Obstetrics and Gynecology, Family Counseling
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#E47F9F] mr-2">•</div>
                    <div>
                      <span className="font-semibold">Clinic Location:</span> Indira Nagar, Bangalore
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#E47F9F] mr-2">•</div>
                    <div>
                      <span className="font-semibold">Patient Experience:</span> Supportive, Understanding, Excellent Communication
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#E47F9F] mr-2">•</div>
                    <div>
                      <span className="font-semibold">Services:</span> Online Appointments, Onsite Services, Google Pay Accepted
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#E47F9F] mr-2">•</div>
                    <div>
                      <span className="font-semibold">Facilities:</span> Gender-neutral Restroom, Nursing Room, LGBTQ+ Friendly
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#E47F9F] mr-2">•</div>
                    <div>
                      <span className="font-semibold">Opening Hours:</span> Monday to Sunday (Same hours daily)
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <button  onClick={()=>navigate("/appoitment")}   className="bg-[#E47F9F] text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300 mr-2">
                  Book Appointment
                </button>
                <button onClick={()=>navigate("/contact")} className="bg-white text-purple-800 border border-purple-800 px-4 py-2 rounded-md hover:bg-purple-50 transition duration-300">
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