import React from 'react'

const ChildParent = ({onSendMessage}) => {
  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={() => onSendMessage('Hello from Child!')} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Send Message to Parent
      </button>


      

    </div>
  )
}

export default ChildParent