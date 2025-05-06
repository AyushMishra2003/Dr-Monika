import React, { useEffect } from 'react';
import BreadCrumbs from '../../component/Breadcums';
import image from '../../assets/monika.png'
import image1 from '../../assets/clinic.webp'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
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
  MapPin,
  Check
} from 'lucide-react';


export default function AboutClinic() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate()

  return (
    <div >

      <BreadCrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'About Clinic' },

        ]}
        headText="About Clinic"
      />

      {/* Main Content */}
      <main>
        <Helmet>
          <title>Sambhawna Clinic - Women's Health Care in Lucknow | Dr. Monika Pandey</title>
          <meta
            name="description"
            content="Sambhawna Clinic in Lucknow, led by Dr. Monika Pandey, offers expert gynecological and obstetric care with over 15 years of experience. Personalized, compassionate care for every woman."
          />
          <meta
            name="keywords"
            content="Sambhawna Clinic, Women's Health Care, Gynecologist in Lucknow, Obstetrician, Dr. Monika Pandey, High-Risk Pregnancy, Laparoscopic Surgery, Women's Wellness, Fertility Care, Women's Health Clinic"
          />
          <meta name="author" content="Dr. Monika Pandey" />
          <link rel="canonical" href="https://yourdomain.com/about-clinic" />
          <meta property="og:title" content="Sambhawna Clinic - Women's Health Care in Lucknow" />
          <meta
            property="og:description"
            content="Dr. Monika Pandey offers compassionate and expert care in gynecology and obstetrics at Sambhawna Clinic, Lucknow. Book your appointment today."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourdomain.com/about-clinic" />
          <meta property="og:image" content="https://yourdomain.com/images/sambhawna-clinic.jpg" />
        </Helmet>
        {/* Hero Section */}
        <section className="py-8 px-4">
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
                  <span>ABOUT SADBHAWNA CLINIC</span>
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Expert Mental & Women's Healthcare Under One Roof
                </h1>

                <p className="text-gray-600 mb-4 text-justify">
                  <strong>Sadbhawna Clinic</strong> is a trusted healthcare center specializing in Psychiatry and Gynecology,
                  offering compassionate care for Mental Wellness and Women's Health. From Stress, Anxiety, and Mood Disorders
                  to Menstrual Issues, Fertility, and Pregnancy Care — we provide personalized, confidential, and holistic
                  treatment for every stage of life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">Expert treatment for anxiety, depression & mood disorders</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">Comprehensive women’s health services</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">Personalized fertility & pregnancy care</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#E47F97] rounded-full p-1 mr-3">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">Safe and supportive environment for all ages</span>
                  </div>
                </div>
              </div>


            </div>
          </main>
        </section>

        {/* Statistics Section */}
        <section className="py-8" style={{ background: `linear-gradient(to right, ${hexToRgba('#E47F97', 0.8)}, ${hexToRgba('#5B2E67', 0.9)})` }}>
          <div className="container mx-auto lg:px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2">10000+</div>
                <div className="text-white font-semibold">HAPPY PATIENTS</div>
              </div>
              <div className="p-4">
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2">30+</div>
                <div className="text-white font-semibold">YEARS EXPERIENCE</div>
              </div>
              <div className="p-4">
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2">10000+</div>
                <div className="text-white font-semibold">TOTAL CASES SOLVED</div>
              </div>
              <div className="p-4">
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2">5000+</div>
                <div className="text-white font-semibold">SUCCESSFUL SURGERIES</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}

        <div className="container mx-auto px-4 py-12">
          {/* Hero Section with Image */}


          {/* Navigation Tabs */}







          {/* Approach Tab Content */}
          {true && (
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
          <div className="max-w-6xl mx-auto mt-12 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-white to-purple-50">
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
                          9838346118
                        </a>
                        <a href="tel:9277163686" className="text-gray-600 block hover:text-[#E47F9F] transition-colors">
                          9277163686
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
                          monikapandey185@gmail.com
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
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                        <p className="text-gray-600 mb-1">Morning: 10:00 AM - 1:30 PM</p>
                        <p className="text-gray-600 mb-1">Evening: 00:06 PM - 06:30 PM</p>
                        <p className="text-gray-500 text-sm">(Monday - Sunday)</p>
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


        {/* Doctor Profile */}
        {/* <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={image} alt="Dr. Monika Pandey" className="w-full h-[65vh] object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#E47F97' }}>Meet Our Specialist</h3>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#5B2E67' }}>Dr. Monika Pandey</h2>
                <p className="text-gray-700 mb-4">MBBS, MS(OBG/GYN) Gold Medalist</p>
                <p className="text-gray-700 mb-6">
                  Dr. Monika Pandey is a highly skilled gynecologist and obstetrician with over 15 years of experience in women's healthcare. She completed her MBBS and MS in Obstetrics and Gynecology with a gold medal, demonstrating her excellence in academic and clinical practice.
                </p>
                <p className="text-gray-700 mb-6">
                  She specializes in high-risk pregnancies, minimally invasive gynecological surgeries, and comprehensive women's health care. Her approach combines medical expertise with compassionate care, ensuring that each patient receives personalized attention.
                </p>
                <div className="flex space-x-4">
                  <button onClick={()=>navigate("/appoitment")} className="px-6 py-3 text-white rounded-md hover:opacity-90 transition" style={{ backgroundColor: '#E47F97' }}>Book Appointment</button>
                  <button className="px-6 py-3 border rounded-md hover:bg-purple-50 transition" style={{ borderColor: '#5B2E67', color: '#5B2E67' }}>View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact */}
        {/* <section className="py-12 px-4" style={{ backgroundColor: '#5B2E67' }}>
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Schedule Your Appointment?</h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              We are committed to providing you with the highest quality care. Contact us today to schedule your appointment.
            </p>
            <button className="px-8 py-3 bg-white rounded-md hover:bg-gray-100 transition font-semibold" style={{ color: '#5B2E67' }}>
              Contact Us Now
            </button>
          </div>
        </section> */}




      </main>

    </div>

  )
}


// Helper function to convert hex to rgba for gradient backgrounds
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}