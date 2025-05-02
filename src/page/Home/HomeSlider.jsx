import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/11.jpg'
import img4 from '../../assets/22.jpg'
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


  const b1="https://astitvagynaeclinic.com/assets/somyabanner2-q6QfdruC.jpg"
  const b2="https://astitvagynaeclinic.com/assets/somyabanner1-D-0Xsmb0.jpg"

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
        <div className="relative">
          <img
            src={img3}
            alt="Advanced Medical Treatments - Consult Our Experts"
            className="w-full  object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative">
          <img
            src={img4}
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
  <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-[#E47F97] text-white rounded-full p-3 cursor-pointer  z-10" onClick={onClick}>
    <FaArrowRight size={20} />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-[#E47F97] text-white rounded-full p-3 cursor-pointer  z-10" onClick={onClick}>
    <FaArrowLeft size={20} />
  </div>
);

export default HomeSlider;
