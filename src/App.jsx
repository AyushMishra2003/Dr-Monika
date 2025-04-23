import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Header from './component/Header'

const App = () => {
  return (
    <div >
      <Header/>
         <Routes>
          
          <Route  path='/'  element={<Home/>}/>

         </Routes>
    </div>
  )
}

export default App