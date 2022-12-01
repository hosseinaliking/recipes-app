import React from 'react'

//* Images *//
import Image from '../asset/image/Monster 404 Error-pana.svg'

const NotFound = () => {
  return (
    <div className='w-screen h-screen' >
      <img src={Image} alt="Not found image" className='w-full h-full' />
    </div>
  )
}

export default NotFound