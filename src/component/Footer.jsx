import React from 'react';
import { MdCall, MdMail, MdLocationOn, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-black text-white">
            {/* Footer Background Design */}
            <div className="relative w-full overflow-hidden bg-[#E47F97]">
                <svg
                    className="absolute w-full h-32 text-white"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 320"
                >
                    <path fill="#5B2E67" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,202.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="relative bg-[#E47F97] py-12">
                <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between max-w-8xl px-4 gap-6">
                    {/* Contact Section */}
                    <div className="w-full lg:w-1/4 mb-8 ">
                        <h2 className="text-xl font-semibold mb-4 text-white">Get In Touch With Us</h2>
                        <li className="mb-4 flex items-center text-md">
                            <IoMdMail className="mr-3 text-2xl lg:text-2xl" />
                            <a href="mailto:monikapandey185@gmail.com" className="hover:text-[#5B2E67]">monikapandey185@gmail.com</a>
                        </li>
                        <li className="mb-4 flex items-center text-lg lg:text-lg">
                            <MdCall className="mr-1 text-2xl" />
                            <a href="tel:919838346118" className="hover:text-[#5B2E67]">+91 9838346118</a>
                            {/* <a href="tel:8115544102" className="hover:text-[#5B2E67] ml-1">+91 8115544102</a> */}
                        </li>


                        <li className="flex items-start text-lg lg:text-lg">
                            <MdLocationOn className="mr-1 text-xl lg:text-6xl" />
                            <a href="https://www.google.com/maps"
                                target="_blank" rel="noopener noreferrer"
                                className="hover:text-[#5B2E67] transition-all duration-300 text-[16px]">
                                Indira Nagar, Lucknow, Uttar Pradesh 226016
                            </a>
                        </li>
                    </div>

                    {/* Services Section */}
                    <div className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]">
                        <h2 className="text-xl font-semibold mb-4 text-white">Our Services</h2>
                        <ul className="text-md">
                            <Link to={`/services/gynecology`}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />Gynecology & Obstetrics
                                </li>
                            </Link>
                            <Link to={`/services/physiotherapy`}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />
                                    Physiotherapy
                                </li>
                            </Link>
                            <Link to={`/services/gynecology`}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Pregnancy Care
                                </li>
                            </Link>
                            <Link to={`/services/gynecology`}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />
                                    Women's Health
                                </li>
                            </Link>
                            <Link to={`/services/physiotherapy`}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />Mental Health
                                </li>
                            </Link>

                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]">
                        <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
                        <ul className="text-md">
                            <Link to={"/"}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Home
                                </li>
                            </Link>
                            <Link to={"/about/dr-monika"}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> About Dr. Monika
                                </li>
                            </Link>
                            <Link to={"/about/clinic"}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> About Clinic
                                </li>
                            </Link>
                            <Link to={"/gallery"}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Gallery
                                </li>
                            </Link>
                            <Link to={"/blogs"}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Blogs
                                </li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className="mb-2 hover:text-[#5B2E67] flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Contact Us
                                </li>
                            </Link>

                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="w-full lg:w-1/4">
                        <h2 className="text-xl font-semibold mb-4 text-white" >Find Us</h2>
                        <div className="h-48 lg:h-64 w-full bg-gray-300 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9729506889243!2d-73.985308!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab0802!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1736494854741!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;