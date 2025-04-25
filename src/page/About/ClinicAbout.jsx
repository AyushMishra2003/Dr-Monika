import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Imported icons

const ClinicAbout = () => {


    return (
        <div className='w-full'>
            <div className="relative overflow-hidden lg:py-16 py-10 sm:py-12 md:py-14 ">
                {/* Background Image */}
                <div
                    className="absolute inset-0 hidden lg:block"
                    style={{
                        backgroundImage: `url(${"p1"})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.8,
                    }}
                ></div>

                {/* Main Content */}
                <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 max-w-7xl mx-auto z-10">
                    {/* Left Side: Text Content */}
                    <div className="flex-1 z-10 md:px-8 rounded-lg transition-transform transform hover:scale-105" >
                        <div className='flex flex-col gap-2'>
                            <div className="relative overflow-hidden">
                                <h2 className="bg-transparent md:text-[1.5rem] text-[1rem]">About Astitva Clinic For Womens Health Care</h2>
                            </div>
                            <h1 className="font-bold text-gray-800">
                                Best Obstetrician and Gynecologist in Lucknow
                            </h1>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed text-justify mt-4">
                        Dr. S. Singh is a dedicated gynecologist with a passion for providing comprehensive care tailored to women’s health. With years of experience, she believes in empowering women through knowledge and personalized treatment plans.
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed text-justify mt-2">
                            At our clinic, we prioritize your comfort and health. We offer a range of services from routine check-ups to specialized treatments, ensuring every woman receives the highest standard of care.
                        </p>

                        {/* New Features Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center">
                                <FaCheckCircle className="text-[#1e3a8a] mr-2" />
                                <p className="text-gray-600">Personalized care plans</p>
                            </div>
                            <div className="flex items-center">
                                <FaCheckCircle className="text-[#1e3a8a] mr-2" />
                                <p className="text-gray-600">Experienced medical staff</p>
                            </div>
                            <div className="flex items-center">
                                <FaCheckCircle className="text-[#1e3a8a] mr-2" />
                                <p className="text-gray-600">State-of-the-art equipment</p>
                            </div>
                            <div className="flex items-center">
                                <FaCheckCircle className="text-[#1e3a8a] mr-2" />
                                <p className="text-gray-600">Comfortable clinic environment</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 z-10 w-full flex flex-col items-center lg:items-start relative" data-aos="fade-left">
                        <div className="relative group w-full">
                            <img
                                src={"clinic"}
                                alt="Dr. S.Singh"
                                className="w-full h-auto lg:h-[470px] max-w-full lg:max-w-[500px] rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicAbout;
