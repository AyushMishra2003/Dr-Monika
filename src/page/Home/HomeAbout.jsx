import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import image from '../../assets/monika.png'

const HomeAbout = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-white font-sans lg:py-10 py-4 sm:py-6 md:py-8">
            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left side with images */}
                    <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
                        {/* Main image */}
                        <div className="relative">
                            <img
                                src={image}
                                alt="Dr. Monika Pandey's Medical Clinic in Lucknow"
                                className="rounded-lg shadow-lg w-full h-auto md:h-96 object-cover"
                            />
                        </div>

                        {/* Decorative stars */}
                        <div className="absolute top-1/4 left-0 transform -translate-x-1/2 text-pink-200 text-4xl">
                            ✦
                        </div>
                        <div className="absolute bottom-1/4 left-1/4 text-pink-200 text-4xl">
                            ✦
                        </div>
                    </div>

                    {/* Right side with text content */}
                    <div className="w-full lg:w-1/2 lg:pl-12">
                        <div className="text-[#E47F97] font-medium flex items-center mb-2">
                            <span className="mr-2">+</span>
                            <span>ABOUT DR. MONIKA PANDEY'S CLINIC</span>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                            <span className="text-[#E47F97]">Dr. Monika Pandey's Clinic</span> – Complete Medical Care in Lucknow
                        </h1>

                        <p className="text-gray-600 mb-4 text-justify">
                            Welcome to <strong>Dr. Monika Pandey's Clinic</strong>, your trusted healthcare center in Lucknow. 
                            We offer comprehensive medical services and provide all types of medications for various health conditions. 
                            Our clinic is equipped with modern facilities and staffed by qualified healthcare professionals dedicated to your wellbeing. 
                            At <strong>Dr. Monika Pandey's Clinic</strong>, patient health and satisfaction are our highest priorities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="flex items-center">
                                <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Complete Range of Medicines</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Quality Healthcare Services</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Experienced Medical Staff</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Emergency Medical Assistance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomeAbout;