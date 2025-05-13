import React, { useEffect } from 'react';
import { Heart, Calendar, Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import BreadCrumbs from '../../component/Breadcums';
import image from '../../assets/monika.png'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function AboutDrMonika() {
  // Define our color scheme as constants
  const primaryColor = "#E47F9F";
  const secondaryColor = "#5B2E67";
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Helmet>
        <title>Dr. Monika Pandey - Specialist in Obstetrics, Gynaecology & Infertility | 30+ Years Experience</title>
        <meta
          name="description"
          content="Dr. Monika Pandey is a compassionate specialist in Obstetrics, Gynaecology & Infertility with 30+ years of experience in providing personalized and holistic healthcare. Book an appointment today."
        />
        <meta
          name="keywords"
          content="Dr. Monika Pandey, Obstetrician in Lucknow, Gynecologist, Infertility Specialist, High-Risk Pregnancy, IVF, PCOS Management, Women's Healthcare"
        />
        <meta name="author" content="Dr. Monika Pandey" />
        <link rel="canonical" href="https://yourdomain.com/about-dr-monika-pandey" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Dr. Monika Pandey - Specialist in Obstetrics, Gynaecology & Infertility" />
        <meta
          property="og:description"
          content="With 30+ years of experience, Dr. Monika Pandey offers comprehensive care in Obstetrics, Gynaecology & Infertility treatments."
        />
        <meta property="og:url" content="https://yourdomain.com/about-dr-monika-pandey" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://yourdomain.com/images/dr-monika-pandey.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Dr. Monika Pandey - Obstetrics, Gynaecology & Infertility Specialist" />
        <meta
          name="twitter:description"
          content="30+ years experience in women's healthcare. Expert in pregnancy care, infertility treatments, and Gynaecological services. Book now."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/dr-monika-pandey.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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

          <div className="container mx-auto px-4 md:px-8 relative ">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-48 h-48 bg-white p-1 rounded-full shadow-xl mb-6 md:mb-0 md:mr-8">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for doctor image */}
                  <img
                    src={image}
                    alt="Dr. Monika Pandey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:text-center text-justify md:max-w-1/2 ">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  Dr. Monika Pandey
                </h1>
                <p className="text-white text-xl opacity-90 mb-2">
                  Specialist in Obstetrics, Gynaecology & Infertility
                </p>
                <p className="text-white text-md opacity-90 mb-2">
                  MBBS (Agra University), Medical Registration(40837), DGO (Calcutta), CIMP(Credentialed Indian Menopause Practitioner)
                </p>
                <p className="text-white text-md opacity-80 mb-4">
                  Formerly at Hindu Rao Hospital New Delhi & CMO- SVK, Telco Lucknow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Card */}
        <div className="max-w-full px-2 mx-auto  -mt-16 relative z-20">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-10 ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: primaryColor }}>
              <strong>Specialized Women's Healthcare</strong>
              <strong></strong>
            </h2>
            <p className="text-gray-700 mb-6 lg:text-center text-justify md:max-w-4xl mx-auto">
              <strong>Dr. Monika Pandey</strong> is a highly skilled and compassionate <strong>Obstetrician</strong>, <strong>Gynecologist</strong>, and <strong>CIMP (Credentialed Indian Menopause Practitioner)</strong> committed to providing exceptional care for women at every stage of life. With over <strong>30+ years of experience</strong>, she believes in a personalized approach to women’s health, ensuring each patient feels <strong>Heard</strong>, <strong>Understood</strong>, and <strong>Supported</strong>.
            </p>
            <p className="text-gray-700 mb-6 lg:text-center text-justify md:max-w-4xl mx-auto">
              Her areas of expertise include <strong>Regular Health Check-ups of Pregnant Women, High-Risk Pregnancies, Normal and Cesarean Deliveries, PCOS & Endometriosis, Infertility Treatment, Irregular Periods, Menstrual Disorders, Menopause-Related Issues, Hormonal Imbalance, Safe Termination of Pregnancy, Family Planning, and Cervical Cancer Screening and Vaccination.</strong> Dr. Monika Pandey combines advanced medical knowledge with a compassionate touch to deliver comprehensive, patient-centered care.
            </p>


            <div className="flex justify-center">
              <button
                onClick={() => navigate("/appoitment")}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: secondaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: secondaryColor }}>
                  30+ Years of Expertise
                </h3>
                <p className="text-gray-700">
                  Trusted experience in Obstetrics, Gynaecology & Infertility care.

                </p>
              </div> */}

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: primaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                  Compassionate Approach
                </h3>
                <p className="text-gray-700">
                  Known for her kind, empathetic, and patient-centered care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: secondaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: secondaryColor }}>
                  High-Risk Pregnancy Care
                </h3>
                <p className="text-gray-700">
                  Specialized in managing complex and high-risk pregnancy cases.

                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: primaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                  Advanced Infertility Solutions
                </h3>
                <p className="text-gray-700">
                  Expert in fertility treatments and hormonal therapy.
                </p>
              </div>


              <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: secondaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: secondaryColor }}>
                  Personalized Treatment Plans
                </h3>
                <p className="text-gray-700">
                  Tailored care based on each patient’s unique health needs and goals.
                </p>
              </div>


              <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: primaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                  Safe Deliveries
                </h3>
                <p className="text-gray-700">
                  Extensive experience in both normal and cesarean section deliveries.
                </p>
              </div>



              {/* <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: secondaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: secondaryColor }}>
                  Supportive Environment

                </h3>
                <p className="text-gray-700">
                  Prioritizes patient privacy, comfort, and emotional well-being.
                </p>
              </div> */}


              <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: primaryColor }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                  Ethical & Transparent Care

                </h3>
                <p className="text-gray-700">
                  Respected for honest guidance and consistently positive outcomes.
                </p>
              </div>





            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div
          className="w-full py-8"
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
                  { title: "High-Risk Pregnancy", desc: "Early detection ensures better management and optimal outcomes for both mother and baby." },
                  { title: "PCOS Management", desc: "Comprehensive lifetime management, including medications and psychological support." },
                  { title: "Infertility", desc: "Comprehensive management of both female and male-related issues." },
                  { title: "Family Planning", desc: "Family planning services to prevent unplanned pregnancies and promote reproductive health." },
                  { title: "Safe Abortion Practices", desc: "Safe abortion services, offering both medical and surgical options under expert care." },
                  { title: "Adolescent Health Problems", desc: "Comprehensive care for adolescent girls to address physical, mental, and sexual health concerns." },
                  { title: "Menopausal Women", desc: "Ensuring a dignified and healthy life for menopausal women through expert support." },
                  { title: "Preventive Healthcare & Lifestyle", desc: "Early detection of breast and cervical cancer for better health outcomes." }
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
        l

        {/* Education Section - Keeping the same structure but with false condition as in original code */}
        {false &&
          <div className="container mx-auto px-4 md:px-8 lg:py-16 py-8 md:py-12">
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
                    year: "1995",
                    degree: "MBBS",
                    institution: "Agra University",
                    side: "left"
                  },
                  {
                    year: "1996",
                    degree: "Medical Registration",
                    institution: "Uttar Pradesh Medical Council (Reg. No. 40837)",
                    side: "right"
                  },
                  {
                    year: "Current",
                    degree: "Practicing at",
                    institution: "Sadbhawana Clinic, Indira Nagar, Lucknow",
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
        }

        {/* Contact Section - commented out as in original code */}
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
                <p className="text-gray-300">10/2, Jama Masjid Road, Indira Nagar, Lucknow</p>
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

        {/* Footer - commented out as in original code */}
        {/* <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Monika Pandey Gynecologist. All rights reserved.</p>
        </div>
      </footer> */}
      </div>
    </section>
  );
}