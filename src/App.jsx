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
import GynaecologyObstetricsServices from './page/service/ServiceDetail2'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from './component/NotFound'
import Pratice from './page/pratice/Pratice'
import AppointmentBooking from './page/Checkout/Appoitment'
import BookHomeCollection from './page/Checkout/BookHomeCollection'
import TopHeader from './component/TopHeader'
import Pathology from './page/pathology/Pathology'
import PrivacyPolicy from './page/razorpay/PrivacyPolicy'
import RefundPolicy from './page/razorpay/RefundPolicy'
import TermsAndConditions from './page/razorpay/TermCondition'




const App = () => {
  return (
    <div >
      <TopHeader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/dr-monika' element={<AboutDrMonika />} />
        <Route path='/about/clinic' element={<AboutClinic />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appoitment' element={<AppointmentBooking />} />
        <Route path='/pathology' element={<Pathology />} />
        <Route path='/home-collection' element={<BookHomeCollection />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy/>} />
            <Route path='/term-condition' element={<TermsAndConditions/>} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/pratice' element={<Pratice />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blog/:detail' element={<BlogDetails />} />
        <Route path='/service/:name' element={<PsychiatricServicesDetails />} />
        <Route path='/services/:name' element={<GynaecologyObstetricsServices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default App