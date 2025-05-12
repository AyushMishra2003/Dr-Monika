import React, { useEffect } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import doctorimg from '../../assets/doctorsingh.png'; // Doctor's image
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../component/Breadcums";

const AboutDoctor = () => {
  const location = useLocation();
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About  Dr. S. Singh" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="text-gray-800 overflow-hidden relative">
      <BreadCrumbs headText={"About Dr. S. Singh"} items={breadcrumbItems} />
      <Helmet>
        <title>Meet  Dr. S. Singh - Your Trusted Gynecologist</title>
        <meta
          name="description"
          content="Discover the story of Dr. S.Singh, a compassionate obstetrician and gynecologist who places patient care and wellbeing at the heart of her practice."
        />
        <meta
          name="keywords"
          content="Dr. S.Singh, obstetrician, gynecologist, healthcare, women's health, patient care"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:py-10 mb-20 rounded-lg relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 mt-12 items-center">
          <div className="relative flex justify-center" data-aos="fade-up">
            <img
              src={doctorimg}
              alt="Dr.S.Singh"
              className="rounded-full w-64 h-64 shadow-xl transition-transform transform hover:scale-110"
              loading="lazy"
            />
          </div>

          <div
            className="space-y-6 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-5xl font-bold text-[#2C3E50] shadow-md">
              Meet Dr. S. Singh
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              A skilled and compassionate obstetrician and gynecologist,  Dr. S. Singh is committed to not just treating her patients, but
              understanding them. With a unique focus on holistic healthcare and
              personalized treatment plans, Dr. S. Singh’s practice reflects her
              belief that women’s health is deeply personal and needs an
              individualized approach.
            </p>
          </div>
        </div>

        {/* About the Doctor Section */}
        <div className="mt-12 border-b-2 border-gray-300 pb-4">
          <h2 className="text-4xl font-bold text-[#2C3E50] shadow-md" data-aos="fade-right">
            Why Patients Choose   Dr. S. Singh
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed" data-aos="fade-left">
            With over a decade of experience in women’s health, Dr. S. Singh
            combines clinical expertise with genuine empathy for her patients.
            She specializes in managing complex obstetric and gynecological
            cases, focusing on minimally invasive procedures and preventive
            care. Her philosophy of care is simple: to empower women to make
            informed choices about their health while providing unwavering
            support.
          </p>
        </div>

        {/* Unique Practice Approach */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-[#2C3E50]" data-aos="zoom-in">
            A Unique Approach to Women’s Healthcare
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed" data-aos="fade-up">
            Dr. S. Singh believes that no two patients are the same. From the first
            consultation, she takes the time to listen, understand, and create a
            plan that’s tailored to each individual’s needs. She’s known for her
            expertise in using holistic methods, advocating for lifestyle
            changes, and taking a conservative approach to surgery—always opting
            for the least invasive options first.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-[#2C3E50]" data-aos="fade-right">
            Areas of Expertise
          </h2>
          <ul className="list-disc ml-6 mt-4 text-gray-700 text-lg space-y-2" data-aos="fade-left" data-aos-delay="300">
            {[
              "Complex obstetric care and high-risk pregnancies",
              "Minimally invasive gynecological surgery",
              "Advanced laparoscopic and hysteroscopic procedures",
              "Comprehensive reproductive health management",
              "Infertility consultation and treatment",
              "Menopause management",
              "Adolescent Gynaecology",
              "Pelvic floor disorders",
            ].map((skill, index) => (
              <li key={index} className="flex items-center">
                <FaStar className="text-yellow-400 mr-2" /> {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Experience Section */}
      
        <div className="mt-12">
          <div className="flex items-center space-x-2" data-aos="fade-up">
            <FaBriefcase className="text-[#2C3E50] text-3xl" />
            <h2 className="text-4xl font-bold text-gray-800">Education</h2>
          </div>
          <div className="space-y-6 mt-6">
            {[
                  {
                    title: "Senior Resident, Hind Institute of Medical Sciences (Jun 2016 - Jun 2017)",
                    description: "MBBS (GSVMC Medical College Kanpur)",
                  },
                  {
                    title: "Assistant Professor ( Mayo Institute of Medical Sciences (Jun 2017 - Dec 2021))",
                    description: "MD (Obstetrics and Gyenecology, KGMU, Command Hospital, Lucknow)",
                  },
                  {
                    title: "Associate Profe",
                    description: "MRCOG (Royal College of Obstertrics and Gyenecology, London)",
                  },
                  {
                    title: "Associate Profe",
                    description: "FMAS (Fellowship in Minimal Access Surgery) & FICMCH",
                  },
               
                 {
                  title: "Associate Profe",
                  description: "Fellowship in Diagnostic and Operative Hysteroscopy",
                },
      
        
         
          
            ].map((experience, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:shadow-xl hover:scale-105"
                data-aos="flip-left"
                data-aos-delay={index * 300}
              >
                {/* <h3 className="text-xl font-semibold">{experience.title}</h3> */}
                <h3 className="text-xl font-semibold">{experience.description}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            What Patients Say
          </h2>
          <div className="flex overflow-x-auto mt-6 space-x-4 pb-4" data-aos="zoom-in">
            {[
              {
                patientName: "Alice",
                review: "Dr. S.Singh is a wonderful doctor who truly listens. I felt reassured at every step of my pregnancy. I couldn’t have asked for better care!",
              },
              {
                patientName: "John",
                review: "My wife and I were nervous when we found out we needed a specialist, but Dr. Singh’s calm demeanor and expertise put us at ease.",
              },
              {
                patientName: "Emily",
                review: "After years of searching for answers, I finally found Dr. S.Singh. She made me feel heard and provided solutions that truly worked.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
                <h4 className="mt-4 font-bold text-gray-800">{testimonial.patientName}</h4>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            Contact Information
          </h2>
      
        </div>

        <section className="max-w-7xl mx-auto py-12 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 text-center">
                        {/* Phone Card */}
                        <a
                            href="tel:917379127000"
                            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-3"
                        >
                            <div className="flex flex-col items-center">
                                <FaPhoneAlt className="text-6xl text-[#4A6F8F] mb-4 transition-transform group-hover:scale-125" />
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4A6F8F] transition-colors">Call Us</h2>
                                <p className="mt-2 text-lg text-gray-600 font-medium group-hover:text-gray-800">+91-7379127000</p>
                            </div>
                        </a>
                        {/* Email Card */}
                        <a
                            href="mailto:aggarwal.manas@gmail.com"
                            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-3"
                        >
                            <div className="flex flex-col items-center">
                                <FaEnvelope className="text-6xl text-[#4A6F8F] mb-4 transition-transform group-hover:scale-125" />
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4A6F8F] transition-colors">Email Us</h2>
                                <p className="mt-2 text-lg text-gray-600 font-medium group-hover:text-gray-800">saumya.751983@gmail.com</p>
                            </div>
                        </a>
                        {/* Location Card */}
                        <a
                            href="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-3"
                        >
                            <div className="flex flex-col items-center">
                                <FaMapMarkerAlt className="text-6xl text-[#4A6F8F] mb-4 transition-transform group-hover:scale-125" />
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4A6F8F] transition-colors">Visit Us</h2>
                                <p className="mt-2 text-lg text-gray-600 font-medium group-hover:text-gray-800">
                                14/25, Indira Nagar, Near Mahi Medical Store, Lucknow
                                </p>
                            </div>
                        </a>
                    </div>
                </section>


        

        {/* Social Media Icons Section */}
        {/* <div className="mt-12 flex justify-center space-x-6" data-aos="fade-up">
          <a href="https://www.facebook.com/drS.Singhsingh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#3b5998] transition duration-300">
            <FaFacebookF className="text-3xl" />
          </a>
          <a href="https://www.instagram.com/drS.Singhsingh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#C13584] transition duration-300">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://www.youtube.com/c/drS.Singhsingh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF0000] transition duration-300">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#25D366] transition duration-300">
            <FaWhatsapp className="text-3xl" />
          </a>
        </div> */}
      </main>

      
    </div>
  );
};

export default AboutDoctor;
