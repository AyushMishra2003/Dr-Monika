import { useState } from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const WhyWeChooseUs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const features = [
        {
            id: 1,
            title: "Comprehensive Care",
            description: "From primary care to specialized treatments, we offer full spectrum of pediatric services to meet all your child's health needs.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M3.22 12H9.5l.5-1 .5 1h6.28" />
                </svg>
            ),
            bgColor: "bg-blue-950",
        },
        {
            id: 2,
            title: "Experienced Professionals",
            description: "Our team consists of board-certified pediatricians, specialists, and healthcare professionals who are experts in their fields.",
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
            title: "Child-Friendly Environment",
            description: "Our hospital is designed to be a welcoming and comforting place for children, with colorful, engaging spaces that reduce anxiety.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
            ),
            bgColor: "bg-yellow-500",
        },
        {
            id: 4,
            title: "Commitment to Excellence",
            description: "We strive for excellence in all aspects of care, continually seeking to improve our services and outcomes.",
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

    const stats = [
        { number: "222+", text: "Pediatric Specialists", color: "text-blue-900" },
        { number: "45+", text: "Specialty Services", color: "text-red-500" },
        { number: "100%", text: "Patients Satisfaction", color: "text-yellow-500" },
        { number: "160+", text: "Research Studies Underway", color: "text-cyan-500" }
    ];

    return (
        <div className="w-full bg-gray-50 lg:py-12 py-8 px-4 md:px-12  ">
            {/* Stats Section */}
            {/* <div className="container mx-auto mb-12 px-10">
                <div className="flex flex-wrap justify-center gap-8 md:gap-4 md:justify-between">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-4">
                            <h2 className={`text-5xl font-bold ${stat.color}`}>{stat.number}</h2>
                            <p className="text-gray-700 mt-2 font-medium">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="container mx-auto lg:px-10 ">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <button className="bg-[#E47F97] hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium mb-6 transition-all">
                            Why Choose Us
                        </button>

                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                            Our Commitment To Excellence In Pediatric Care
                        </h2>

                        <p className="text-gray-700 mb-8">
                            At Mavis – Child Care Hospital, we are dedicated to providing the highest quality
                            pediatric care in a compassionate and supportive environment.
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
                            <button className="bg-[#E47F97]  text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center">
                                Book An Appointment
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </button>

                            <div className="flex items-center">
                                <div className="mr-4">
                                    <p className="text-gray-600 text-sm">Need Urgent Care?</p>
                                    <p className="text-blue-950 font-bold text-xl">(629) 555-0129</p>
                                </div>
                                <div className="bg-[#E47F97] p-3 rounded-full text-white">
                                    <Phone className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    {/* Right Image */}
                    <div className="lg:w-1/2 ">
                        <div className="rounded-lg overflow-hidden h-full">
                            <img
                                src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/08/main.jpg"
                                alt="Doctor with patients"
                                className="w-full h-180 object-cover" // <-- changed from h-[50%] to h-80
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WhyWeChooseUs