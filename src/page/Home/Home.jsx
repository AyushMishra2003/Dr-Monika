import React from 'react'
import HeroSection from './HeroSection'
import HomeSlider from './HomeSlider'
import HomeAbout from './HomeAbout'
import Services from './HomeServices'
import WhyWeChooseUs from './WhyChooseUs'
import AnotherService from './AnotherService'
import PriyankaAbout from './PriyankaAbout'
import CTA from '../../component/CTA'

const Home = () => {
  return (
    <div className='text-red-500'>
        <HeroSection/>
        {/* <HomeSlider/> */}
        <HomeAbout/>
        <Services/>
        <WhyWeChooseUs/>
        <AnotherService/>
        <PriyankaAbout/>
        <CTA/>
    </div>
  )
}

export default Home