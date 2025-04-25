import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const BreadCrumbs = ({ items, headText, image }) => {

  console.log(headText);



  return (
    <div
      className="relative flex flex-col items-center justify-center py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url("https://astitvagynaeclinic.com/assets/testbread-BXiSvD5u.jpg")` }} // ✅ Fixed background image syntax
      data-aos="fade-in" // Add AOS effect here
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */}

      {/* Heading */}
      <h1 className=" text-center relative z-20 sora-600 px-4 mb-4 text-3xl text-[#E47F9F] font-semibold" data-aos="fade-up">
        {headText}
      </h1>

      {/* Breadcrumb navigation */}
      <nav className="flex items-center relative z-20 space-x-1 px-4 text-[#E47F9F] text-sm lg:text-base">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-black">
                <MdKeyboardArrowRight className="text-lg lg:text-xl mt-[0.2rem]" />
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-white transition-colors"
                data-aos="fade-left" // Add AOS effect here
                data-aos-delay={index * 100} // Stagger effects
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-[#E47F9F]" data-aos="fade-right">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default BreadCrumbs;
