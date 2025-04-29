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
import { Helmet } from 'react-helmet'





const Home = () => {


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='text-red-500 overflow-x-hidden'>
        {/* <HeroSection/> */}
        <Helmet>
        <title>Dr. Monika Pandey - Experienced General Physician in India</title>
        <meta
          name="description"
          content="Dr. Monika Pandey is a compassionate and skilled general physician with 30 years of experience, specializing in preventive care, chronic disease management, and holistic healthcare solutions."
        />
        <meta
          name="keywords"
          content="Dr. Monika Pandey, General Physician, Preventive Care, Chronic Disease, Women's Health, Elderly Care, MBBS Agra, Holistic Healthcare, Primary Healthcare, India doctor"
        />
        <meta name="author" content="Dr. Monika Pandey" />
        <meta property="og:title" content="Dr. Monika Pandey - General Physician" />
        <meta
          property="og:description"
          content="Book an appointment with Dr. Monika Pandey, a trusted general physician with 30 years of experience in delivering personalized, holistic care."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/monika-pandey.jpg" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

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