import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/banner1.png'
import img2 from '../../assets/banner2.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { arrows: false } },
      { breakpoint: 600, settings: { arrows: false } },
      { breakpoint: 480, settings: { dots: false, arrows: false } },
    ],
  };

  return (
    <div className="relative w-full mx-auto h-fit">

     
      {/* Slider */}
      <Slider {...settings} className="relative h-fit">
        <div className="relative">
          <img
            src={img1}
            alt="Gastroenterology Specialist - Book Your Appointment"
            className="w-full  object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative">
          <img
            src={img2}
            alt="Advanced Medical Treatments - Consult Our Experts"
            className="w-full  object-cover"
            loading="lazy"
          />
        </div>
      </Slider>

    </div>
  );
};

const SampleNextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-[#1f708e] text-white rounded-full p-3 cursor-pointer hover:bg-[#1f708e] z-10" onClick={onClick}>
    <FaArrowRight size={20} />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-[#1f708e] text-white rounded-full p-3 cursor-pointer hover:bg-[#1f708e] z-10" onClick={onClick}>
    <FaArrowLeft size={20} />
  </div>
);

export default HomeSlider;
