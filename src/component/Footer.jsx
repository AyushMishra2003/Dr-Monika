import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 rounded-full opacity-10"></div>
      
      {/* Newsletter Section */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl -mt-20 mb-16 transform hover:scale-[1.01] transition-transform">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-100 mb-4">Get the latest updates, news and special offers directly to your inbox.</p>
            </div>
            <div className="w-full md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-4 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 font-medium px-6 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-2 mr-3">
                <span className="text-blue-600 font-bold text-xl">B</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Baidya</h2>
            </div>
            <p className="text-gray-300 mb-6">We're dedicated to providing exceptional service and creating meaningful experiences for our customers worldwide.</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="bg-gray-700 hover:bg-blue-400 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="#" className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-red-600 p-2 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-8 h-1 bg-blue-500 mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Products', 'Blog', 'Contact Us', 'Careers', 'Support', 'Privacy Policy'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                    <div className="w-0 h-0.5 bg-blue-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-8 h-1 bg-purple-500 mr-3"></div>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-lg mr-4 mt-1">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <span className="text-gray-300">
                  1234 Baidya Tower, Silicon Valley,<br /> California, USA
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-800 p-2 rounded-lg mr-4">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-800 p-2 rounded-lg mr-4">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <span className="text-gray-300">info@baidya.com</span>
              </li>
            </ul>
          </div>
          
          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-8 h-1 bg-pink-500 mr-3"></div>
              Photo Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <a key={item} href="#" className="block overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
                  <img src={`/api/placeholder/100/100?text=${item}`} alt={`Gallery ${item}`} className="w-full h-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Baidya. All rights reserved. Designed with passion.
            </p>
            <div className="flex items-center">
              <a href="#" className="text-gray-400 hover:text-white mx-3 text-sm">Terms</a>
              <div className="w-1 h-1 bg-gray-600 rounded-full mx-1"></div>
              <a href="#" className="text-gray-400 hover:text-white mx-3 text-sm">Privacy</a>
              <div className="w-1 h-1 bg-gray-600 rounded-full mx-1"></div>
              <a href="#" className="text-gray-400 hover:text-white mx-3 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a 
        href="#top" 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg absolute bottom-6 right-6 transform hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </a>
    </footer>
  );
}