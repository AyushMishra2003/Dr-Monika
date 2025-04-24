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

const App = () => {
  return (
    <div >
      <Header/>
         <Routes>
          <Route  path='/'  element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/blogs' element={<BlogPage/>}/>
          <Route path='/blog/:slug' element={<BlogDetails/>} />
         </Routes>
         <Footer/>
         <BottomFooter/>
    </div>
  )
}

export default App