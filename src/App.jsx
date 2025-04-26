import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import BottomFooter from './component/BottomFooter'
import Contact from './page/Contact/Contact'
import Gallery from './page/Gallery/Gallery'
import BlogPage from './page/Blog/BlogPage'
import BlogDetails from './page/Blog/BlogDetail'
import AboutDrMonika from './page/About/PriyankaAbout'
import AboutClinic from './page/About/AboutClinic'
import PsychiatricServicesDetails from './page/service/ServiceDetail1'
import GynecologyObstetricsServices from './page/service/ServiceDetail2'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import NotFound from './component/NotFound'




const App = () => {
  return (
    <div >
      <Header/>
         <Routes>
          <Route  path='/'  element={<Home/>}/>
          <Route  path='/about/dr-monika'  element={<AboutDrMonika/>}/>
          <Route  path='/about/clinic'  element={<AboutClinic/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/blogs' element={<BlogPage/>}/>
          <Route path='/blog/:detail' element={<BlogDetails/>} />
          <Route path='/services/physiotherapy' element={<PsychiatricServicesDetails/>} />
          <Route path='/services/gynecology' element={<GynecologyObstetricsServices/>} />
          <Route path="*" element={<NotFound/>} />
         </Routes>
         <Footer/>
         <BottomFooter/>
    </div>
  )
}

export default App