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

            <div className="relative bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] lg:py-12 py-6 md:py-8 px-4 ">
                <div className="mx-auto container flex flex-col lg:flex-row justify-between  px-4 gap-6">



                    <div className="w-full lg:w-[18%] md:mb-8 mb-1  ">

                        <h2 className="text-xl font-semibold mb-4 text-white">Support</h2>
                        <ul className="text-md">
                            {/* <Link to={"/"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> Home
                                </li>
                            </Link> */}
                            {/* <Link to={"/about/dr-monika"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> About Our Expert
                                </li>
                            </Link> */}
                            {/* <Link to={"/about/clinic"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" />Sadbhawana Clinic
                                </li>
                            </Link> */}
                            {/* <Link to={"/gallery"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> Cases
                                </li>
                            </Link> */}
                            <Link to={"/term-condition"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> Term & Conditions
                                </li>
                            </Link>
                            <Link to={"/privacy-policy"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> Privacy Policy
                                </li>
                            </Link>
                            <Link to={"/refund-policy"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> Refund Policy
                                </li>
                            </Link>
                            <Link to={"/blogs"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> Blogs
                                </li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" /> Contact Us
                                </li>
                            </Link>

                        </ul>
                    </div>




                    {/* Services Section */}
                    <div className="w-full lg:w-1/4 md:mb-8 mb-1 ">
                        <h2 className="text-xl font-semibold mb-4 text-white">Our Services</h2>




                        <ul className="text-md">
                            <Link to={`/services/obstetrics`}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" />  Obstetrics
                                </li>
                            </Link>
                            <Link to={`/services/gynaecology`}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" />
                                    Gynaecology
                                </li>
                            </Link>
                            <Link to={`/services/infertility`}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" />
                                    Infertility Treatment
                                </li>
                            </Link>
                            <Link to={`/service/treatments`}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" />Psychiatry Treatment
                                </li>
                            </Link>
                            <Link to={`/service/counselling`}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" />
                                    Counseling Services
                                </li>
                            </Link>
                            <Link to={`/service/therapies`}>
                                <li className="mb-1 . flex items-center">
                                    <MdKeyboardArrowRight className="mr-1" />Therapies
                                </li>
                            </Link>

                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="w-full lg:w-[30%] md:mb-8 mb-1 ">
                        <h2 className="text-xl font-semibold mb-4 text-white">Get In Touch With Us</h2>

                              <li className="flex items-start text-lg lg:text-sm">
                            <MdLocationOn className="mr-1 text-xl lg:text-6xl" />
                            <a href="https://www.google.co.in/maps/place/Dr+Monika+Pandey+Best+Gynaecologist+in+Indira+Nagar/@26.8854118,80.9986954,17z/data=!3m1!4b1!4m6!3m5!1s0x3999592fb08ce83b:0x969f7467a24cfb3b!8m2!3d26.885407!4d81.0012703!16s%2Fg%2F11vpf7nlyn?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank" rel="noopener noreferrer"
                                className=" transition-all duration-300 text-[16px]">
                        H-No 2, Sadbhavna Clinic, Sector-10, Indira Nagar, Near Arbindo Park, Lucknow, Uttar Pradesh 226016
                            </a>
                        </li>

                             <li className="mb-2 flex items-center text-lg lg:text-lg">
                            <MdCall className=" text-xl" />
                            {/* <a href="tel:919838346118" className="]">+91 9838346118</a> */}
                            <a href="tel:919277163686 " className="">+91 9277163686 </a> , 
                                   <a href="tel:919838346118 " className="">+91 9838346118 </a>
                        </li>
                        <li className="mb-2 flex items-center text-md">
                            <IoMdMail className="mr-1 text-2xl lg:text-2xl" />
                            <a href="mailto:sadbhawanaclinic98@gmail.com" className="">sadbhawanaclinic98@gmail.com</a>
                        </li>

                    </div>

                    {/* Quick Links Section */}


                    {/* Map Section */}
                    <div className="w-full lg:w-[20%]">
                        <h2 className="text-xl font-semibold mb-4 text-white" >Find Us</h2>
                        <div className="h-48 lg:h-48 w-full bg-gray-300 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.569616102303!2d80.99869537489408!3d26.885411761264237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999592fb08ce83b%3A0x969f7467a24cfb3b!2sDr%20Monika%20Pandey%20Best%20Gynaecologist%20in%20Indira%20Nagar!5e0!3m2!1sen!2sin!4v1745921970061!5m2!1sen!2sin"
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