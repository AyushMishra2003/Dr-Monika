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
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import img1 from '../../assets/Gynae.jpg';
import img2 from '../../assets/infetility.jpg';

// Placeholder BreadCrumbs component


export default function GynaecologyObstetricsServices() {
    const [activeTab, setActiveTab] = useState('obstetrics');
    const navigate = useNavigate()

    const obstetricServices = [
        {
            title: "Regular Health Check-ups of Pregnant Women and Vaccination",
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
            title: "Normal Delivery and Caesarean  Section",
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

    const GynaecologyServices = [
        {
            title: "Irregular Periods",
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
            title: "Family Planning Services-Injection,Pills,IUCD",
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
            title: "PCOS, Endometriosis & Early Cessation of Periods",
            longDescription:
                "Comprehensive diagnosis and treatment of PCOS, endometriosis, and early cessation of periods. Personalized care plans to manage hormonal imbalances, relieve symptoms, and support reproductive health.",
            benefits: [
                "Relief from pelvic pain and irregular periods",
                "Hormonal balance restoration",
                "Improved reproductive outcomes",
                "Customized long-term management plans",
                "Support for menstrual health"
            ],
            duration: "45-60 minutes",
            icon: <Star className="w-6 h-6 text-white" />
        },
        {
            title: "Fibroids & Ovarian Tumor Treatment",
            longDescription:
                "Effective management of uterine fibroids and ovarian tumors through early diagnosis and tailored treatment options, ensuring symptom relief and better quality of life.",
            benefits: [
                "Reduced pelvic discomfort and bloating",
                "Minimally invasive treatment options",
                "Preservation of reproductive organs",
                "Prevention of tumor progression",
                "Regular follow-up and care"
            ],
            duration: "45-60 minutes",
            icon: <Star className="w-6 h-6 text-white" />
        },
        {
            title: "Menopause Related Problems",
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
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen">
            <Helmet>
                <title>Women's Healthcare & Gynaecology Services | Dr. Monika Pandey</title>
                <meta
                    name="description"
                    content="Expert Gynaecology and obstetrics care by Dr. Monika Pandey. Comprehensive pregnancy support, high-risk consultations, delivery options, and women’s wellness services in Lucknow."
                />
                <meta
                    name="keywords"
                    content="Gynaecology Lucknow, women healthcare, pregnancy care, obstetrician Lucknow, normal delivery, C-section, prenatal checkups, high-risk pregnancy, Dr Monika Pandey"
                />
                <meta name="author" content="Dr. Monika Pandey" />
                <link rel="canonical" href="https://yourdomain.com/services/Gynaecology" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Women's Healthcare & Pregnancy Support in Lucknow" />
                <meta
                    property="og:description"
                    content="Comprehensive Gynaecology and obstetrics care with Dr. Monika Pandey. From prenatal care to safe delivery and postpartum support, get expert help at every stage."
                />
                <meta property="og:url" content="https://yourdomain.com/services/Gynaecology" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://yourdomain.com/images/Gynaecology-cover.jpg" />

                {/* Twitter */}
                <meta name="twitter:title" content="Gynaecology & Women's Healthcare | Dr. Monika Pandey" />
                <meta
                    name="twitter:description"
                    content="Personalized gynecological and obstetric care for every woman. Book an appointment with Dr. Monika Pandey for safe and compassionate healthcare."
                />
                <meta name="twitter:image" content="https://yourdomain.com/images/Gynaecology-cover.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <BreadCrumbs
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: 'Gynaecology & Obstetrics' } // last item without a path
                ]}
                headText="Gynaecology & Obstetrics"
            />
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section with Image */}
                <div className="mb-16 text-center relative overflow-hidden rounded-3xl shadow-xl py-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7e3f8f]/90 to-[#e47f9f]/90 z-10"></div>
                    <img src="https://assets-global.website-files.com/5ede763fa68713434223e0bc/5f584e20dc51eb99d0b7c1fe_During-Pregnancy-003.jpg" alt="Women's healthcare" className="w-full object-cover h-64 md:h-96" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="px-4 py-6 text-white">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                Complete <span className="text-white/90">Women's Healthcare</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Specialized Gynaecology and obstetrics care for every stage of a woman's life
                            </p>
                            <button onClick={() => navigate("/appoitment")} className="mt-6 bg-white cursor-pointer text-[#7e3f8f] font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-colors">
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center mb-10">

                    <button
                        onClick={() => setActiveTab('Gynaecology')}
                        className={`px-6 py-3 m-1 rounded-full font-medium cursor-pointer ${activeTab === 'Gynaecology'
                            ? 'bg-[#e47f9f] text-white shadow-lg'
                            : 'bg-white text-[#7e3f8f] shadow hover:shadow-md'}`}
                    >
                        Gynaecology
                    </button>
                    <button
                        onClick={() => setActiveTab('obstetrics')}
                        className={`px-6 py-3 m-1 rounded-full font-medium cursor-pointer ${activeTab === 'obstetrics'
                            ? 'bg-[#7e3f8f] text-white shadow-lg'
                            : 'bg-white text-[#7e3f8f] shadow hover:shadow-md'}`}
                    >
                        Obstetrics
                    </button>
                    <button
                        onClick={() => setActiveTab('infertility')}
                        className={`px-6 py-3 m-1 rounded-full font-medium cursor-pointer ${activeTab === 'infertility'
                            ? 'bg-gradient-to-r from-[#7e3f8f] to-[#e47f9f] text-white shadow-lg'
                            : 'bg-white text-[#7e3f8f] shadow hover:shadow-md'}`}
                    >
                        Infertility Treatment
                    </button>
                </div>

                {/* Obstetrics Tab Content */}
                {activeTab === 'obstetrics' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#7e3f8f] mb-4">Obstetric Care Services</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg text-justify md:text-center">
                                Our experienced team provides complete care throughout pregnancy, from
                                pre-conception counseling to delivery and postnatal support, ensuring the health
                                and wellbeing of both mother and baby.
                            </p>
                        </div>

                        {/* Featured Obstetrics Service */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#7e3f8f] to-[#e47f9f] lg:p-8 p-4 text-white">
                                    <h3 className="lg:text-2xl text-xl font-bold mb-4">Comprehensive Pregnancy Care</h3>
                                    <p className="mb-4">
                                        Pregnancy is a remarkable journey that requires specialized medical attention. Our complete pregnancy care ensures that you and your baby receive the highest standard of healthcare throughout all stages of pregnancy.
                                    </p>
                                    <p className="mb-4">
                                     From early pregnancy checks to delivery planning, Dr. Monika Pandey experienced Obstetricians provides personalized care tailored to your unique needs. We monitor fetal development, manage pregnancy-related conditions, and prepare you for a safe delivery.
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
                                    <div className="lg:p-6 p-2">
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

                {/* Gynaecology Tab Content */}
                {activeTab === 'Gynaecology' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#7e3f8f] mb-4">Gynecological Services</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg text-justify md:text-center">
                                We offer comprehensive gynecological care for women of all ages, addressing
                                reproductive health concerns, preventive care, and specialized treatments for
                                various conditions.
                            </p>
                        </div>

                        {/* Featured Gynaecology Section */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#e47f9f] to-[#7e3f8f] lg:p-8 p-4 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Complete Women's Healthcare</h3>
                                    <p className="mb-4">
                                        Our gynecological services cover all aspects of women's reproductive health, from routine check-ups to specialized treatments for complex conditions. We believe that every woman deserves personalized care that addresses her unique needs.
                                    </p>
                                    <p className="mb-4">
                                        Dr. Monika Pandey specializes in diagnosing and treating a wide range of gynecological conditions, providing preventive care, and offering guidance on reproductive health throughout all stages of a woman's life.
                                    </p>
                                    <p>
                                        With a compassionate approach and evidence-based treatments, we help women maintain optimal reproductive health and address any concerns promptly and effectively.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={img1} alt="Gynecological care" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {GynaecologyServices.map((service, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="bg-gradient-to-r from-[#e47f9f] to-[#7e3f8f] p-4 flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">
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
                                        {/* <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm">
                                            <strong>Average Consultation:</strong> {service.duration}
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}


                {activeTab === 'infertility' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#7e3f8f] mb-4">Infertility Treatment</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg text-justify md:text-center">
                                We provide comprehensive infertility evaluation and treatment options for couples
                                struggling to conceive, addressing both female and male fertility factors with
                                compassion and advanced medical care.
                            </p>
                        </div>

                        {/* Featured Infertility Section */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#e47f9f] to-[#7e3f8f] lg:p-8 p-4 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Infertility Treatment</h3>
                                    <p className="mb-4">
                                        Our fertility specialists understand the emotional and physical challenges of infertility. We offer personalized treatment plans tailored to address the unique factors affecting each couple's fertility journey.
                                    </p>
                                    <p className="mb-4">
                                        Using advanced diagnostic techniques and evidence-based treatments, we help identify the underlying causes and develop effective strategies to overcome fertility obstacles.
                                    </p>
                                    <p>
                                       Dr. Monika Pandey provides support throughout the entire process, combining medical expertise with emotional guidance to help you achieve your dream of parenthood.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={img2} alt="Infertility treatment" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {/* Anovulation */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#e47f9f] to-[#7e3f8f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Anovulation </h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Anovulation occurs when eggs are not released from the ovaries, which is a common cause of infertility. We provide comprehensive diagnosis and treatment for various conditions that can cause anovulation, including PCOS, thyroid disorders, and stress-related factors.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-[#7e3f8f] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Thorough hormonal assessment
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Ovulation induction medications
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Lifestyle and dietary guidance
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Monitoring of follicular development
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm">
                                        <strong>Average Treatment Duration:</strong> 3-6 months
                                    </div> */}
                                </div>
                            </div>

                            {/* Blocked Fallopian Tubes */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#e47f9f] to-[#7e3f8f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Blocked Fallopian Tubes</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Blocked or damaged fallopian tubes prevent eggs from traveling from the ovaries to the uterus and block sperm from reaching the egg. We offer advanced diagnostic testing and treatment options to address tubal blockages and improve fertility potential.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-[#7e3f8f] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Hysterosalpingogram (HSG) diagnostics
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Laparoscopic tubal surgery
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Minimally invasive procedures
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Alternative IVF options when needed
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm">
                                        <strong>Average Treatment Duration:</strong> Varies by procedure
                                    </div> */}
                                </div>
                            </div>

                            {/* Hormonal Problems */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#e47f9f] to-[#7e3f8f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Hormonal   Problem</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Hormonal imbalances can significantly impact fertility in both men and women. Our specialists conduct thorough hormonal assessments and develop personalized treatment plans to restore balance and optimize fertility potential.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-[#7e3f8f] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Comprehensive hormone testing
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Tailored hormone replacement therapy
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Treatment for PCOS and thyroid disorders
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Regular monitoring and adjustment
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm">
                                        <strong>Average Treatment Duration:</strong> 3-12 months
                                    </div> */}
                                </div>
                            </div>

                            {/* Male Factor Infertility */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-gradient-to-r from-[#e47f9f] to-[#7e3f8f] p-4 flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Male Factor Infertility</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    <p className="text-gray-600 mb-4">
                                        Male factor infertility contributes to approximately 40% of infertility cases. We offer comprehensive evaluation of sperm quality, quantity, and function, along with effective treatments to address male fertility challenges.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-[#7e3f8f] mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Detailed semen analysis
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Treatment for low sperm count and motility
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Surgical sperm retrieval when needed
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <span className="text-[#e47f9f] mr-2">✓</span>
                                                Lifestyle modifications to improve fertility
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm">
                                        <strong>Average Treatment Duration:</strong> 2-6 months
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Approach Tab Content */}
                {activeTab === 'approach' && (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-[#7e3f8f] mb-4">Our Care Approach</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg text-justify md:text-center">
                                Our approach to women's healthcare combines medical expertise with compassionate support,
                                focusing on personalized care plans that address individual needs and concerns.
                            </p>
                        </div>

                        {/* Philosophy Section */}
                        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-[#7e3f8f] to-[#e47f9f] lg:p-8 p-4 text-white">
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

                        <div className="bg-white rounded-xl shadow-lg p-2 md:p-8 mb-12">
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
                        <div className="p-4 max-w-7xl mx-auto">
                            <h3 className="text-2xl font-bold text-[#5b2e67] mb-8 text-center">
                                What to Expect as a Patient
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Card 1 */}
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                                    <div className="bg-[#5b2e67] p-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white text-[#5b2e67] flex items-center justify-center">
                                            <Calendar className="w-8 h-8" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-bold text-lg text-[#5b2e67] mb-3 text-center">
                                            Initial Consultation
                                        </h4>
                                        <p className="text-gray-700 text-center">
                                            Your first appointment will focus on understanding your concerns, history, and treatment goals. We'll begin to develop a personalized care plan together.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                                    <div className="bg-[#e47f9f] p-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white text-[#e47f9f] flex items-center justify-center">
                                            <Users className="w-8 h-8" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-bold text-lg text-[#5b2e67] mb-3 text-center">
                                            Ongoing Care
                                        </h4>
                                        <p className="text-gray-700 text-center">
                                            Regular sessions with your treatment team will help monitor progress, adjust treatment as needed, and provide ongoing support through your recovery journey.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                                    <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white text-[#5b2e67] flex items-center justify-center">
                                            <Trophy className="w-8 h-8" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-bold text-lg text-[#5b2e67] mb-3 text-center">
                                            Long-Term Support
                                        </h4>
                                        <p className="text-gray-700 text-center">
                                            As you progress, we'll help you transition to maintenance care, develop relapse prevention strategies, and provide resources for continued wellbeing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Information */}
                <div className="max-w-7xl mx-auto mt-12 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-white to-purple-50">
                    <div className="relative">
                        {/* Decorative header bar */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5B2E67] via-[#E47F9F] to-[#5B2E67]"></div>

                        {/* Decorative circles */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#E47F9F] opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#5B2E67] opacity-20"></div>

                        <div className="p-8">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5B2E67] to-[#E47F9F]">
                                    Get in Touch With Us
                                </h3>
                                <div className="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-[#5B2E67] to-[#E47F9F] rounded-full"></div>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Phone Card */}
                                <div className="bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1 border-l-4 border-[#E47F9F]">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-pink-50 rounded-lg">
                                            <Phone className="text-[#E47F9F]" size={24} />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                                            <a href="tel:9838346118" className="text-gray-600 mb-1 block hover:text-[#E47F9F] transition-colors">
                                                +91 9838346118
                                            </a>
                                            <a href="tel:9277163686" className="text-gray-600 block hover:text-[#E47F9F] transition-colors">
                                                +91 9277163686
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1 border-l-4 border-[#5B2E67]">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-purple-50 rounded-lg">
                                            <Mail className="text-[#5B2E67]" size={24} />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                                            <a href="mailto:monikapandey185@gmail.com" className="text-gray-600 break-all block hover:text-[#5B2E67] transition-colors">
                                                Sadbhawanaclinic98@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours Card */}
                                <div className="bg-white p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1 border-l-4 border-[#E47F9F]">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-pink-50 rounded-lg">
                                            <Clock className="text-[#E47F9F]" size={24} />
                                        </div>
                                        {/* Opening Hours
                                        Monday-Sunday
                                        Mor :- 10AM-1:30PM
                                        Eve :- 6PM - 8:30PM */}
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                                            <p className="text-gray-500 text-sm">(Monday - Sunday)</p>
                                            <p className="text-gray-600 mb-1">Morning: 10:00 AM - 1:30 AM</p>
                                            <p className="text-gray-600 mb-1">Evening: 06:00 PM - 08:30 PM</p>
                                  
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Appointment Button */}
                            <div className="mt-8 text-center">
                                <button onClick={() => navigate("/appoitment")} className="px-6 py-3 bg-gradient-to-r from-[#5B2E67] to-[#E47F9F] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}




