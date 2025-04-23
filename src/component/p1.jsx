import { useState } from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full">
      {/* Main header */}
      <div className="bg-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <svg viewBox="0 0 50 50" className="h-10 w-10 text-white fill-current">
                    <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 4c10.5 0 19 8.5 19 19s-8.5 19-19 19S6 35.5 6 25 14.5 6 25 6z" />
                    <path d="M25 14c-3.9 0-7 3.1-7 7 0 2.4 1.2 4.5 3 5.7V35c0 2.2 1.8 4 4 4s4-1.8 4-4v-8.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" className="text-pink-300 fill-current" />
                  </svg>
                  <div className="ml-2 text-xl font-bold">
                    <span className="text-white">Health</span>
                    <span className="text-pink-200">Care</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-pink-200 px-3 py-2 font-medium">Home</a>
              <a href="/about" className="text-white hover:text-pink-200 px-3 py-2 font-medium">About Us</a>
              
              <div className="relative group">
                <button className="text-white hover:text-pink-200 px-3 py-2 font-medium flex items-center">
                  Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
                  <div className="py-1">
                    <a href="/services/physiotherapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">Physiotherapy</a>
                    <a href="/services/gynecology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">Gynecology</a>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-white hover:text-pink-200 px-3 py-2 font-medium flex items-center">
                  About
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
                  <div className="py-1">
                    <a href="/about/dr-monika" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">Dr. Monika</a>
                    <a href="/about/clinic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">Clinic</a>
                  </div>
                </div>
              </div>
              
              <a href="/blogs" className="text-white hover:text-pink-200 px-3 py-2 font-medium">Blogs</a>
              <a href="/cases" className="text-white hover:text-pink-200 px-3 py-2 font-medium">Cases</a>
              <a href="/contact" className="text-white hover:text-pink-200 px-3 py-2 font-medium">Contact Us</a>
            </nav>
            
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-white hover:text-pink-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pink-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pink-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-pink-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-pink-200 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block text-white hover:text-pink-200 px-3 py-2 rounded-md font-medium">Home</a>
            <a href="/about" className="block text-white hover:text-pink-200 px-3 py-2 rounded-md font-medium">About Us</a>
            
            <div>
              <button 
                className="w-full text-left text-white hover:text-pink-200 px-3 py-2 rounded-md font-medium"
                onClick={() => {
                  const servicesDropdown = document.getElementById('services-dropdown');
                  if (servicesDropdown) {
                    servicesDropdown.classList.toggle('hidden');
                  }
                }}
              >
                Services
                <ChevronDown size={16} className="ml-1 inline" />
              </button>
              <div id="services-dropdown" className="hidden pl-4">
                <a href="/services/physiotherapy" className="block text-white hover:text-pink-200 px-3 py-2">Physiotherapy</a>
                <a href="/services/gynecology" className="block text-white hover:text-pink-200 px-3 py-2">Gynecology</a>
              </div>
            </div>
            
            <div>
              <button 
                className="w-full text-left text-white hover:text-pink-200 px-3 py-2 rounded-md font-medium"
                onClick={() => {
                  const aboutDropdown = document.getElementById('about-dropdown');
                  if (aboutDropdown) {
                    aboutDropdown.classList.toggle('hidden');
                  }
                }}
              >
                About
                <ChevronDown size={16} className="ml-1 inline" />
              </button>
              <div id="about-dropdown" className="hidden pl-4">
                <a href="/about/dr-monika" className="block text-white hover:text-pink-200 px-3 py-2">Dr. Monika</a>
                <a href="/about/clinic" className="block text-white hover:text-pink-200 px-3 py-2">Clinic</a>
              </div>
            </div>
            
            <a href="/blogs" className="block text-white hover:text-pink-200 px-3 py-2 rounded-md font-medium">Blogs</a>
            <a href="/cases" className="block text-white hover:text-pink-200 px-3 py-2 rounded-md font-medium">Cases</a>
            <a href="/contact" className="block text-white hover:text-pink-200 px-3 py-2 rounded-md font-medium">Contact Us</a>
          </div>
          
          <div className="px-5 pt-4 pb-3 border-t border-pink-600 flex justify-around">
            <a href="#" className="text-white hover:text-pink-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      )}
      
      {/* Contact info section - Shows below header on larger screens */}
      <div className="bg-pink-800 text-white py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Phone size={18} className="mr-2" />
              <span className="text-sm">+91 1234567890, +91 9876543210</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="mr-2" />
              <span className="text-sm">healthcare@example.com</span>
            </div>
            <div className="flex items-center">
              <a href="/appointment" className="bg-white text-pink-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-pink-100 transition-colors">
                Make Appointment
              </a>
              <a href="/home-collection" className="ml-4 bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-pink-500 transition-colors">
                Home Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}