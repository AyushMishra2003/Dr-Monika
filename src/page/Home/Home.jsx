import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import HomeSlider from './HomeSlider'
import HomeAbout from './HomeAbout'
import Services from './HomeServices'
import WhyWeChooseUs from './WhyChooseUs'
import AnotherService from './AnotherService'
import CTA from '../../component/CTA'
import ClinicStats from '../../component/Stats'
import Testinomial from '../../component/Testinomial'

import MonikaAbout from './PriyankaAbout'
import HowWeWorkPremium from '../../component/HowWeWork'
import HomeBlogSlider from './HomeBlogSlider'





const Home = () => {


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='text-red-500'>
        {/* <HeroSection/> */}

        <HomeSlider/>
        {/* <HomeSlider/> */}
        <HomeAbout/>
        <Services/>
        <ClinicStats/>
        <WhyWeChooseUs/>
        <AnotherService/>
        <MonikaAbout/>
        <HowWeWorkPremium/>
        <Testinomial/>
        <HomeBlogSlider/>
        {/* <CTA/> */}
    </div>
  )
}

export default Home