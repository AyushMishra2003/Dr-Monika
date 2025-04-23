import React from 'react'
import HeroSection from './HeroSection'
import HomeSlider from './HomeSlider'
import HomeAbout from './HomeAbout'
import Services from './HomeServices'

const Home = () => {
  return (
    <div className='text-red-500'>
        <HeroSection/>
        {/* <HomeSlider/> */}
        <HomeAbout/>
        <Services/>
    </div>
  )
}

export default Home