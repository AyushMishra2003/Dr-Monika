import React, { useState } from 'react'
import ChildParent from './ChildParent'

const Pratice = () => {
  
    const [message,setMessage] =useState("")


    const handleChange=(childdata)=>{
         setMessage(childdata)
    }


  return (
    <section className='py-20 border border-red-500 mx-auto flex flex-col items-center justify-center'>
         <p>Parent Component.......</p>
         <p>{message}</p>
         <ChildParent onSendMessage={handleChange}/>


    </section>
  )
}

export default Pratice