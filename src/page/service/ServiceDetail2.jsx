import { useEffect, useState } from 'react';
import {
    Calendar,
    Users,
    Trophy,
    Star,
    CheckIcon,
    ClipboardCheck,
    Clock,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';
import BreadCrumbs from '../../component/Breadcums';

// Placeholder BreadCrumbs component


export default function GynecologyObstetricsServices() {
    const [activeTab, setActiveTab] = useState('obstetrics');

    const obstetricServices = [
        {
            title: "Regular Health Check-ups of Pregnant Women",
            longDescription: "Comprehensive prenatal care including regular monitoring, ultrasounds, and necessary vaccinations to ensure healthy pregnancy progression and early detection of potential complications.",
            symptoms: [
                "Routine prenatal checkups",
                "Pregnancy ultrasounds",
                "Blood and urine tests",
                "Fetal health monitoring",
                "Pregnancy vaccinations"
            ],
            icon: <Calendar className="w-6 h-6 text-white" />
        },
        {
            title: "High Risk Pregnancy Consultation",
            longDescription: "Specialized care and monitoring for pregnancies with potential complications, including pre-existing medical conditions, advanced maternal age, multiple pregnancies, or history of pregnancy complications.",
            symptoms: [
                "Advanced maternal age (35+)",
                "Pre-existing conditions like diabetes or hypertension",
                "Multiple pregnancies (twins, triplets)",
                "Previous pregnancy complications",
                "Genetic or fetal development concerns"
            ],
            icon: <ClipboardCheck className="w-6 h-6 text-white" />
        },
        {
            title: "Normal Delivery and Caesarean Section",
            longDescription: "Expert care for both vaginal deliveries and C-sections when medically necessary, with comprehensive pre and post-delivery support to ensure the health and safety of both mother and baby.",
            symptoms: [
                "Labor and delivery management",
                "Pain management during delivery",
                "Planned and emergency C-sections",
                "Postpartum care",
                "Breastfeeding support"
            ],
            icon: <Users className="w-6 h-6 text-white" />
        },
        {
            title: "Safe Termination of Pregnancy",
            longDescription: "Medical and surgical options for pregnancy termination with complete pre and post-procedure care and counseling in a supportive, confidential environment with focus on emotional wellbeing.",
            symptoms: [
                "Medical termination options",
                "Surgical termination procedures",
                "Pre-procedure counseling",
                "Post-procedure follow-up care",
                "Mental health support"
            ],
            icon: <CheckIcon className="w-6 h-6 text-white" />
        }
    ];

    const gynecologyServices = [
        {
            title: "Irregular Periods Management",
            longDescription: "Diagnosis and treatment of menstrual irregularities, including amenorrhea, oligomenorrhea, and polymenorrhea, addressing underlying hormonal imbalances and other causes.",
            benefits: [
                "Hormonal balance restoration",
                "Regular menstrual cycle establishment",
                "Reduced menstrual pain and discomfort",
                "Improved fertility potential",
                "Enhanced overall reproductive health"
            ],
            duration: "30-45 minutes",
            icon: <Calendar className="w-6 h-6 text-white" />
        },
        {
            title: "Family Planning Services",
            longDescription: "Comprehensive contraceptive counseling and options including injections, pills, IUDs, and long-term methods, tailored to individual needs, lifestyle and future family planning goals.",
            benefits: [
                "Personalized contraceptive solutions",
                "Effective pregnancy prevention",
                "Decreased menstrual symptoms with certain methods",
                "Reversible options for future pregnancy planning",
                "Management of hormonal conditions"
            ],
            duration: "30-45 minutes",
            icon: <Users className="w-6 h-6 text-white" />
        },
        {
            title: "Cervical Cancer Screening and Vaccination",
            longDescription: "Regular Pap smears, HPV testing, and HPV vaccination to prevent cervical cancer, with early detection services for pre-cancerous conditions and comprehensive follow-up care.",
            benefits: [
                "Early detection of cervical abnormalities",
                "Reduced risk of cervical cancer",
                "HPV protection through vaccination",
                "Regular monitoring of cervical health",
                "Peace of mind through preventive care"
            ],
            duration: "20-30 minutes",
            icon: <ClipboardCheck className="w-6 h-6 text-white" />
        },
        {
            title: "PCOS & Endometriosis Treatment",
            longDescription: "Diagnosis and management of polycystic ovary syndrome, endometriosis, uterine fibroids, and other gynecological conditions with customized treatment plans addressing symptoms and long-term health.",
            benefits: [
                "Reduced pain and discomfort",
                "Hormonal balance restoration",
                "Improved fertility outcomes",
                "Management of unwanted symptoms",
                "Comprehensive care for chronic conditions"
            ],
            duration: "45-60 minutes",
            icon: <Star className="w-6 h-6 text-white" />
        },
        {
            title: "Menopause Management",
            longDescription: "Comprehensive care for symptoms associated with perimenopause and menopause, including hot flashes, mood changes, sleep disturbances, and hormone replacement therapy when appropriate.",
            benefits: [
                "Reduced menopausal symptoms",
                "Improved quality of life",
                "Prevention of bone density loss",
                "Emotional and psychological support",
                "Long-term health maintenance"
            ],
            duration: "45-60 minutes",
            icon: <CheckIcon className="w-6 h-6 text-white" />
        },
        {
            title: "Infertility Assessment & Treatment",
            longDescription: "Comprehensive evaluation and treatment for couples experiencing difficulty conceiving, including diagnosis and management of anovulation, blocked fallopian tubes, hormonal problems, and male factor infertility.",
            benefits: [
                "Thorough fertility evaluation",
                "Personalized treatment plans",
                "Advanced reproductive technologies",
                "Emotional support throughout process",
                "Collaborative care with specialists"
            ],
            duration: "60-90 minutes",
            icon: <Trophy className="w-6 h-6 text-white" />
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen">
            <BreadCrumbs
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: 'Gynecology & Obstetrics' } // last item without a path
                ]}
                headText="Gynecology & Obstetrics"
            />
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section with Image */}
                <div className="mb-16 text-center relative overflow-hidden rounded-3xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7e3f8f]/90 to-[#e47f9f]/90 z-10"></div>
                    <img src="https://assets-global.website-files.com/5ede763fa68713434223e0bc/5f584e20dc51eb99d0b7c1fe_During-Pregnancy-003.jpg" alt="Women's healthcare" className="w-full object-cover h-64 md:h-96" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="px-4 py-6 text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Complete <span className="text-white/90">Women's Healthcare</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Specialized gynecology and obstetrics care for every stage of a woman's life
                            </p>
                            <button className="mt-6 bg-white text-[#7e3f8f] font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-colors">
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center mb-10">
                    <button
                        onClick={() => setActiveTab('obstetrics')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'obstetrics'
                            ? 'bg-[#7e3f8f] text-white shadow-lg'
                            : 'bg-white text-[#7e3f8f] shadow hover:shadow-md'}`}
                    >
                        Obstetrics (O)
                    </button>
                    <button
                        onClick={() => setActiveTab('gynecology')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'gynecology'
                            ? 'bg-[#e47f9f] text-white shadow-lg'
                            : 'bg-white text-[#7e3f8f] shadow hover:shadow-md'}`}
                    >
                        Gynecology (G)
                    </button>
                    <button
                        onClick={() => setActiveTab('approach')}
                        className={`px-6 py-3 m-1 rounded-full font-medium ${activeTab === 'approach'
                            ? 'bg-gradient-to-r from-[#7e3f8f] to-[#e47f9f] text-white shadow-lg'
                            : 'bg-white text-[#7e3f8f] shadow hover:shadow-md'}`}
                    >
                        Our Approach
                    </button>
                </div>

                {/* Obstetrics Tab Content */}
                {activeTab === 'obstetrics' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#7e3f8f] mb-4">Obstetric Care Services</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                                Our experienced team provides complete care throughout pregnancy, from
                                pre-conception counseling to delivery and postnatal support, ensuring the health
                                and wellbeing of both mother and baby.
                            </p>
                        </div>

                        {/* Featured Obstetrics Service */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#7e3f8f] to-[#e47f9f] p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Comprehensive Pregnancy Care</h3>
                                    <p className="mb-4">
                                        Pregnancy is a remarkable journey that requires specialized medical attention. Our complete pregnancy care ensures that you and your baby receive the highest standard of healthcare throughout all stages of pregnancy.
                                    </p>
                                    <p className="mb-4">
                                        From early pregnancy checks to delivery planning, our team of experienced obstetricians provides personalized care tailored to your unique needs. We monitor fetal development, manage pregnancy-related conditions, and prepare you for a safe delivery.
                                    </p>
                                    <p>
                                        Our approach combines modern medical technology with compassionate care to give you peace of mind during this important life event.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src="https://assets-global.website-files.com/5ede763fa68713434223e0bc/5f584e20dc51eb99d0b7c1fe_During-Pregnancy-003.jpg" alt="Pregnancy care" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {obstetricServices.map((service, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="bg-gradient-to-r from-[#7e3f8f] to-[#e47f9f] p-4 flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4">{service.longDescription}</p>
                                        <div>
                                            <h4 className="font-semibold text-[#7e3f8f] mb-2">Service Includes:</h4>
                                            <ul className="space-y-1">
                                                {service.symptoms.map((symptom, i) => (
                                                    <li key={i} className="flex items-center text-gray-600">
                                                        <span className="text-[#e47f9f] mr-2">•</span>
                                                        {symptom}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gynecology Tab Content */}
                {activeTab === 'gynecology' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#7e3f8f] mb-4">Gynecological Services</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                                We offer comprehensive gynecological care for women of all ages, addressing
                                reproductive health concerns, preventive care, and specialized treatments for
                                various conditions.
                            </p>
                        </div>

                        {/* Featured Gynecology Section */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#e47f9f] to-[#7e3f8f] p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Complete Women's Healthcare</h3>
                                    <p className="mb-4">
                                        Our gynecological services cover all aspects of women's reproductive health, from routine check-ups to specialized treatments for complex conditions. We believe that every woman deserves personalized care that addresses her unique needs.
                                    </p>
                                    <p className="mb-4">
                                        Our team specializes in diagnosing and treating a wide range of gynecological conditions, providing preventive care, and offering guidance on reproductive health throughout all stages of a woman's life.
                                    </p>
                                    <p>
                                        With a compassionate approach and evidence-based treatments, we help women maintain optimal reproductive health and address any concerns promptly and effectively.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src="https://assets-global.website-files.com/5ede763fa68713434223e0bc/5f584e20dc51eb99d0b7c1fe_During-Pregnancy-003.jpg" alt="Gynecological care" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {gynecologyServices.map((service, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="bg-gradient-to-r from-[#e47f9f] to-[#7e3f8f] p-4 flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4">{service.longDescription}</p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-[#7e3f8f] mb-2">Key Benefits:</h4>
                                            <ul className="space-y-1">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-center text-gray-600">
                                                        <span className="text-[#e47f9f] mr-2">✓</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm">
                                            <strong>Average Consultation:</strong> {service.duration}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Approach Tab Content */}
                {activeTab === 'approach' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#7e3f8f] mb-4">Our Care Approach</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                                Our approach to women's healthcare combines medical expertise with compassionate support,
                                focusing on personalized care plans that address individual needs and concerns.
                            </p>
                        </div>

                        {/* Philosophy Section */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#7e3f8f] to-[#e47f9f] p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Our Philosophy of Care</h3>
                                    <p className="mb-4">
                                        We believe that women deserve healthcare that recognizes their unique needs throughout all stages of life. Our practice is built on the understanding that optimal health requires a personalized approach that considers physical, emotional, and social wellbeing.
                                    </p>
                                    <p className="mb-4">
                                        We strive to create a supportive environment where women feel comfortable discussing sensitive health issues and actively participating in decisions about their care. Our team is committed to providing evidence-based treatments while respecting individual preferences and cultural backgrounds.
                                    </p>
                                    <p>
                                        From adolescence through menopause and beyond, we are dedicated to helping women maintain reproductive health and overall wellness through comprehensive and compassionate care.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src="https://assets-global.website-files.com/5ede763fa68713434223e0bc/5f584e20dc51eb99d0b7c1fe_During-Pregnancy-003.jpg" alt="Women's healthcare philosophy" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-xl font-bold text-[#7e3f8f] mb-6 flex items-center">
                                        <ClipboardCheck className="w-6 h-6 mr-2 text-[#e47f9f]" />
                                        Treatment Process
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#7e3f8f] text-white flex items-center justify-center font-bold">1</div>
                                                <div className="h-full w-0.5 bg-[#e47f9f] mx-auto mt-2 mb-2"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#7e3f8f]">Initial Consultation</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Comprehensive assessment of your health history, concerns, and goals to understand your unique needs.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#7e3f8f] text-white flex items-center justify-center font-bold">2</div>
                                                <div className="h-full w-0.5 bg-[#e47f9f] mx-auto mt-2 mb-2"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#7e3f8f]">Diagnostic Evaluation</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Thorough examination and necessary testing to accurately diagnose conditions and identify appropriate treatment options.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#7e3f8f] text-white flex items-center justify-center font-bold">3</div>
                                                <div className="h-full w-0.5 bg-[#e47f9f] mx-auto mt-2 mb-2"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#7e3f8f]">Personalized Treatment Plan</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Development of a tailored care plan that addresses your specific condition and aligns with your preferences and goals.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 rounded-full bg-[#7e3f8f] text-white flex items-center justify-center font-bold">4</div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#7e3f8f]">Ongoing Care & Follow-up</h4>
                                                <p className="text-gray-600 mt-1">
                                                    Regular follow-up appointments to monitor progress, make necessary adjustments to your treatment plan, and address any new concerns.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#7e3f8f] mb-6 flex items-center">
                                        <Star className="w-6 h-6 mr-2 text-[#e47f9f]" />
                                        Our Core Principles
                                    </h3>

                                    <div className="bg-purple-50 p-6 rounded-xl">
                                        <ul className="space-y-4">
                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#7e3f8f]">Compassionate Care</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Treating each woman with empathy, dignity, and respect throughout her healthcare journey.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#7e3f8f]">Evidence-Based Medicine</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Providing treatments and recommendations based on the latest research and clinical guidelines.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#7e3f8f]">Patient Education</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Empowering women with knowledge about their bodies and health conditions to make informed decisions.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#7e3f8f]">Preventive Focus</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Emphasizing preventive care and early intervention to maintain optimal health and prevent complications.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex">
                                                <div className="w-8 h-8 rounded-full bg-[#e47f9f] text-white flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#7e3f8f]">Collaborative Approach</h4>
                                                    <p className="text-gray-600 mt-1">
                                                        Working together with patients and other healthcare providers to ensure comprehensive and coordinated care.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Patient Experience Section */}
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h3 className="text-xl font-bold text-[#7e3f8f] mb-6 text-center">Your Patient Experience</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7e3f8f] text-white flex items-center justify-center">
                                        <Calendar className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-semibold text-[#7e3f8f] mb-2">Comfortable Environment</h4>
                                    <p className="text-gray-600">
                                        Our clinic provides a welcoming, private, and comfortable setting where you can discuss sensitive health concerns without judgment or discomfort.
                                    </p>
                                </div>

                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e47f9f] text-white flex items-center justify-center">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-semibold text-[#7e3f8f] mb-2">Attentive Providers</h4>
                                    <p className="text-gray-600">
                                        Our healthcare providers take time to listen to your concerns, answer your questions, and involve you in decisions about your care, ensuring you feel heard and respected.
                                    </p>
                                </div>

                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#7e3f8f] to-[#e47f9f] text-white flex items-center justify-center">
                                        <Trophy className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-semibold text-[#7e3f8f] mb-2">Comprehensive Support</h4>
                                    <p className="text-gray-600">
                                        Beyond medical treatment, we provide resources, education, and emotional support to help you navigate your health journey with confidence and peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Information */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-[#7e3f8f] mb-6 text-center">Contact & Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center">
                            <Phone className="text-[#e47f9f] mr-3 flex-shrink-0" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium">9838346118 / 9277163686</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Mail className="text-[#e47f9f] mr-3 flex-shrink-0" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">monikapandey185@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Clock className="text-[#e47f9f] mr-3 flex-shrink-0" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Morning Hours</p>
                                <p className="font-medium">10:00 AM - 1:30 PM (Mon-Sun)</p>
                            </div>
                        </div>


                    </div>
                </div>


            </div>

        </div>

    )
}




