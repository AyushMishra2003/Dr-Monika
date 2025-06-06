import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import image from '../../assets/monika.png'
import image1 from '../../assets/logo/clinic.jpg'


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
                                src={image1}
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
                            <span>ABOUT SADBHAWANA  CLINIC</span>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-1">
                            Expert Women's Healthcare & Mental Wellness Under One Roof
                        </h1>
                        <p className="text-gray-600 mb-2 text-justify">
                            <strong>Sadbhawana Clinic</strong> is a trusted healthcare center with a primary focus on <strong>Gynaecology</strong>, offering expert care for every stage of a woman’s life. From <strong>Menstrual Issues</strong>, <strong>Fertility</strong>, and <strong>Regular Health Check-ups of Pregnant Women</strong>  and <strong>Menopause Management</strong>, We provide <strong>Personalized</strong> and <strong>Confidential treatment</strong> in a <strong>Compassionate</strong> setting. Our integrated approach also supports <strong>Mental Wellness</strong>, addressing <strong>Stress</strong>, <strong>Anxiety</strong>, and <strong>Mood Concerns</strong> with <strong>Empathy</strong> and <strong>Expertise</strong>.
                        </p>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div className="flex items-center">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Comprehensive Gynaecological care for all ages</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Personalized fertility and pregnancy support</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Expert hormonal and menstrual health management</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] rounded-full p-1 mr-3">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-700 font-medium">Safe, supportive environment for total well-being</span>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    );
};

export default HomeAbout;