import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* About Column - 30% width */}
          <div className="w-full lg:w-[30%] mb-8 lg:mb-0 px-4">
            <h2 className="text-2xl font-bold mb-4 relative pb-2 inline-block">
            Dr. Monika Pandey
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-white"></span>
            </h2>
            <p className="mb-6">
              Providing exceptional dental care with a gentle touch. Our team of specialists is dedicated to ensuring your smile remains healthy and beautiful.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <FaFacebookF className="text-[#3F8BA1]" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <FaInstagram className="text-[#3F8BA1]" size={18} />
              </a>
              <a href="https://wa.me/918400485ccc555" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <FaWhatsapp className="text-[#3F8BA1]" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <FaLinkedinIn className="text-[#3F8BA1]" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links - 20% width */}
          <div className="w-full lg:w-[20%] mb-8 lg:mb-0 px-4">
            <h3 className="text-xl font-bold mb-4 relative pb-2 inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center hover:translate-x-1 transition-transform">
                  <span className="mr-1">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center hover:translate-x-1 transition-transform">
                  <span className="mr-1">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center hover:translate-x-1 transition-transform">
                  <span className="mr-1">›</span> Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="flex items-center hover:translate-x-1 transition-transform">
                  <span className="mr-1">›</span> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:translate-x-1 transition-transform">
                  <span className="mr-1">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us - 20% width */}
          <div className="w-full lg:w-[20%] mb-8 lg:mb-0 px-4">
            <h3 className="text-xl font-bold mb-4 relative pb-2 inline-block text-white">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white"></span>
            </h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-lg mr-1 mt-1" />
                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.301679096085!2d80.9950327!3d26.8860603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958077d93ca43%3A0x7a2d9fde1f0a53a2!2sShine%20dental%20clinic!5e1!3m2!1sen!2sin!4v1745225655134!5m2!1sen!2sin" target="_blank" rel="noopener noreferrer">
                Dr. Monika Pandey
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-lg mr-1" />
                <a href="tel:+918400485555">+91 84004 85555</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-lg mr-1" />
                <a href="mailto:contact@dentalcare.com">contact@dentalcare.com</a>
              </li>
              <li className="flex items-center">
                <FaClock className="text-lg mr-1" />
                <span>Mon-Fri: 9AM-6PM, Sat: 9AM-2PM</span>
              </li>
            </ul>
          </div>

          {/* Find Us - 30% width */}
          <div className="w-full lg:w-[30%] px-4">
            <h3 className="text-xl font-bold mb-4 relative pb-2 inline-block">
              Find Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white"></span>
            </h3>
            <div className="h-60 w-full bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.301679096085!2d80.9950327!3d26.8860603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958077d93ca43%3A0x7a2d9fde1f0a53a2!2sShine%20dental%20clinic!5e1!3m2!1sen!2sin!4v1745225655134!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Shine Dental Clinic Location"
              ></iframe>
            </div>
            <p className="text-sm mt-2">
              Visit us at our convenient location to experience top-quality dental care.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;