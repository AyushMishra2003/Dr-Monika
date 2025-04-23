import React from 'react';

import { FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomFooter = () => {
  // Copyright 2024 Dr. Mamta || All Rights Reserved || Designed By
  return (
    <div className="bg-[#000] py-1">
      <div className="flex flex-col md:flex-row items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg text-white w-full gap-1">
        <div className='flex items-center justify-center gap-1'>
          <p>Copyright</p>
          <FaRegCopyright className='text-[0.9rem]' />
          <p>2025 Dr. Monika Pandey clinic</p>
          <span>||</span>
          <p>All Rights Reserved</p>
          <span>||</span>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <span className="text-white">Designed by</span>  
          <Link to="https://www.codecrafter.co.in/" target="_blank" rel="noopener noreferrer" className="ml-2">
            <img src={"https://drmanasaggarwal.com/assets/cclogo-l-lAMUu5.png"} alt="Designed by Company" className="h-auto w-[4rem] sm:w-[6rem] md:w-[8rem] lg:w-[8rem] inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter; 
