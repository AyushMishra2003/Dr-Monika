import { useState } from 'react';
import { ChevronRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyWeChooseUs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();

    const features = [
        {
            id: 1,
            title: "Expert Care",
            description: "Specialized in Psychiatry and Gynecology, offering comprehensive solutions for mental and physical health.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            ),
            bgColor: "bg-blue-950",
        },
        {
            id: 2,
            title: "Personalized Treatment",
            description: "Tailored care plans that address your unique health needs and goals.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            bgColor: "bg-red-500",
        },
        {
            id: 3,
            title: "Confidential & Compassionate",
            description: "We prioritize your privacy and offer a non-judgmental, supportive environment.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                </svg>
            ),
            bgColor: "bg-yellow-500",
        },
        {
            id: 4,
            title: "Comprehensive Services",
            description: "From pregnancy support to mental wellness, we provide a full spectrum of care under one roof.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            ),
            bgColor: "bg-cyan-500",
        }
    ];

    return (
        <div className="w-full bg-gray-50 lg:py-12 py-8 px-4 md:px-12">
            <div className="container mx-auto lg:px-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <button className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium mb-6 transition-all">
                            Why Choose Us
                        </button>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-4">
                            Your Trusted Partner in Mental and Women’s Health
                        </h2>

                        <p className="text-gray-700 mb-8">
                            Choose Sadbhawna Clinic for expert, compassionate care in psychiatry and gynecology, offering personalized, confidential treatments for overall wellness.
                        </p>

                        {/* Feature Cards */}
                        <div className="space-y-6">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="flex items-start gap-4 group cursor-pointer"
                                    onMouseEnter={() => setHoveredCard(feature.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className={`${feature.bgColor} p-3 rounded-full text-white transition-all duration-300 ${hoveredCard === feature.id ? 'scale-110' : ''}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-blue-950 group-hover:text-red-400 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button onClick={() => navigate("/appoitment")} className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] cursor-pointer text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center">
                                Book An Appointment
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </button>

                            <div className="flex items-center">
                                <div className="mr-4">
                                    <p className="text-gray-600 text-sm">Need Urgent Care?</p>
                                    <a href="tel:919838346118" className="text-blue-950 font-bold text-xl">+91 9838346118</a>
                                </div>

                                <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-3 rounded-full text-white">
                                    <a href="tel:919838346118" className='cursor-pointer'>
                                        <Phone className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2">
                        <div className="rounded-lg overflow-hidden h-full">
                            <img
                                src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/08/main.jpg"
                                alt="Doctor with patients"
                                className="w-full h-180 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyWeChooseUs;
