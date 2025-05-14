import React, { useEffect } from "react";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

import image from "../assets/appointment.jpeg"

const AppointmentCTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate()

  return (
    <section
      className="relative py-16 md:py-14 flex flex-col items-start bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative container px-4 z-10 text-left">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          data-aos="fade-up"
        >
          Schedule Your Appointment Today
        </h2>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our medical experts are ready to provide you with the highest quality care. Book your appointment now.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] cursor-pointer hover:bg-pink-600 text-white py-3 px-8 rounded-full transition duration-300 text-lg font-medium"
            onClick={() => navigate("/appoitment")}
          >
            <FaCalendarAlt className="text-white" />
            Book Appointment
          </button>

          <a href="tel:919838346118"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-pink-500 transition duration-300 text-lg font-medium group"
            onClick={() => console.log("Call us clicked")}
          >
            <FaPhoneAlt className="text-white group-hover:text-black transition duration-300" />
            Call Us
          </a>

        </div>

        {/* Additional Info */}
        <p
          className="mt-8 text-white text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Same-day appointments available • No wait time • Personalized care
        </p>
      </div>
    </section>
  );
};

export default AppointmentCTA;