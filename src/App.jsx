import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import BottomFooter from './component/BottomFooter'

const App = () => {
  return (
    <div >
      <Header/>
         <Routes>
          <Route  path='/'  element={<Home/>}/>
         </Routes>
         <Footer/>
         <BottomFooter/>
    </div>
  )
}

export default App