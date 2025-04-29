import React, { useEffect } from 'react';
import BreadCrumbs from '../../component/Breadcums';
import image from '../../assets/monika.png'
import image1 from '../../assets/clinic.webp'
import { Helmet } from 'react-helmet';


export default function AboutClinic() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="font-sans">
      
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
          <div className="container mx-auto">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4" style={{ color: '#E47F97' }}>About Sambhawna Clinic For Women's Health Care</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className=''>
                <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold lg:mb-6 mb-2 md:mb-4" style={{ color: '#5B2E67' }}>
                  Best Obstetrician and Gynecologist in Lucknow
                </h1>
                <p className="mb-6 text-gray-700">
                  Dr. Monika Pandey is a dedicated gynecologist with a passion for providing comprehensive care tailored to women's health. With years of experience, she believes in empowering women through knowledge and personalized treatment plans.
                </p>
                <p className="mb-6 text-gray-700">
                  At our clinic, we prioritize your comfort and health. We offer a range of services from routine check-ups to specialized treatments, ensuring every woman receives the highest standard of care.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" style={{ color: '#E47F97' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Personalized care plans</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" style={{ color: '#E47F97' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Experienced medical staff</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" style={{ color: '#E47F97' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">State-of-the-art equipment</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" style={{ color: '#E47F97' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700">Comfortable clinic environment</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="bg-gray-100 lg:p-4 rounded-lg">
                    <img src={image1} alt="Clinic Sign" className="w-full h-auto rounded" />
                  </div>
                </div>
               
              </div>


            </div>
          </div>
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
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2">15+</div>
                <div className="text-white font-semibold">YEARS EXPERIENCE</div>
              </div>
              <div className="p-4">
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2">10000+</div>
                <div className="text-white font-semibold">TOTAL CASES SOLVED</div>
              </div>
              <div className="p-4">
                <div className="text-white lg:text-5xl text-4xl font-bold mb-2">7000+</div>
                <div className="text-white font-semibold">SUCCESSFUL SURGERIES</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="lg:py-16 py-6 md:py-10 px-4">
          <div className="container mx-auto">
            <h2 className="lg:text-4xl text-2xl md:text-3xl font-bold lg:mb-10 mb-6 md:mb-8 text-center" style={{ color: '#5B2E67' }}>
              Our Vision and Mission for the Future: To Serve with Integrity and Compassion
            </h2>

            <div className="flex flex-wrap justify-center lg:mb-10 mb-6 md:mb-8">
              <button className="m-2 px-8 py-3 rounded-md transition" style={{ backgroundColor: hexToRgba('#E47F97', 0.2), color: '#5B2E67' }}>ABOUT</button>
              <button className="m-2 px-8 py-3 rounded-md transition" style={{ backgroundColor: '#E47F97', color: 'white' }}>Why Choose Us</button>
              <button className="m-2 px-8 py-3 rounded-md transition" style={{ backgroundColor: hexToRgba('#E47F97', 0.2), color: '#5B2E67' }}>MISSION</button>
              <button className="m-2 px-8 py-3 rounded-md transition" style={{ backgroundColor: hexToRgba('#E47F97', 0.2), color: '#5B2E67' }}>Approach</button>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white lg:p-8 p-4 rounded-lg shadow-sm border border-gray-100 mb-12">
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#E47F97' }}>Why Choose Us</h3>

              <p className="mb-8 text-gray-700">
                At Astitva Clinic, we combine medical excellence with a deeply compassionate approach to women's healthcare. Our commitment to your wellbeing sets us apart.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-gray-100" style={{ borderLeft: `4px solid #E47F97` }}>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#5B2E67' }}>Expert Medical Team</h4>
                  <p className="text-gray-700">Led by Dr. Monika Pandey, our team consists of highly qualified professionals dedicated to providing the best care possible for women.</p>
                </div>

                <div className="p-4 rounded-lg border border-gray-100" style={{ borderLeft: `4px solid #E47F97` }}>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#5B2E67' }}>Patient-Centered Approach</h4>
                  <p className="text-gray-700">We take time to listen to your concerns, answer questions, and develop personalized treatment plans tailored to your specific needs.</p>
                </div>

                <div className="p-4 rounded-lg border border-gray-100" style={{ borderLeft: `4px solid #E47F97` }}>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#5B2E67' }}>Advanced Technology</h4>
                  <p className="text-gray-700">Our clinic is equipped with state-of-the-art medical technology that ensures accurate diagnosis and effective treatments.</p>
                </div>

                <div className="p-4 rounded-lg border border-gray-100" style={{ borderLeft: `4px solid #E47F97` }}>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#5B2E67' }}>Comprehensive Care</h4>
                  <p className="text-gray-700">From routine check-ups to complex procedures, we offer a wide range of services to address all aspects of women's health.</p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-white lg:p-8 p-4 rounded-lg shadow-sm border border-gray-100 mb-12">
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#E47F97' }}>Our Mission</h3>

              <p className="mb-6 text-gray-700">
                Our mission is to empower women through comprehensive healthcare, education, and support. We strive to:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full mr-4" style={{ backgroundColor: '#E47F97' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#5B2E67' }}>Provide Excellence in Healthcare</h4>
                    <p className="text-gray-700">Deliver the highest quality medical care with integrity, expertise, and compassion.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full mr-4" style={{ backgroundColor: '#E47F97' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#5B2E67' }}>Educate and Empower</h4>
                    <p className="text-gray-700">Equip women with knowledge and resources to make informed decisions about their health.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full mr-4" style={{ backgroundColor: '#E47F97' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#5B2E67' }}>Create a Supportive Environment</h4>
                    <p className="text-gray-700">Ensure every woman feels respected, heard, and supported throughout her healthcare journey.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full mr-4" style={{ backgroundColor: '#E47F97' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#5B2E67' }}>Advance Women's Healthcare</h4>
                    <p className="text-gray-700">Stay at the forefront of medical advancements to provide innovative and effective treatments.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach Section */}
            <div className="bg-white lg:p-8 p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#E47F97' }}>Our Approach</h3>

              <p className="mb-8 text-gray-700">
                We prioritize a patient-centered approach in gynecological care, integrating cutting-edge medical advancements with compassionate service.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-md text-white" style={{ backgroundColor: '#E47F97' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-700">Comprehensive Gynecological Services for all stages of life.</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-md text-white" style={{ backgroundColor: '#5B2E67' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-700">Education and Empowerment to help women make informed health decisions.</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-md text-white" style={{ backgroundColor: '#E47F97' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-700">Seamless Care Coordination for a smooth healthcare experience.</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-md text-white" style={{ backgroundColor: '#5B2E67' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-700">Holistic approach addressing physical, emotional, and mental well-being.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Profile */}
        <section className="py-16 px-4 bg-gray-50">
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
                  <button className="px-6 py-3 text-white rounded-md hover:opacity-90 transition" style={{ backgroundColor: '#E47F97' }}>Book Appointment</button>
                  <button className="px-6 py-3 border rounded-md hover:bg-purple-50 transition" style={{ borderColor: '#5B2E67', color: '#5B2E67' }}>View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </section>

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