import React from 'react'

//* Images *//
import Logo from '../asset/image/Logo.png'

const Header = () => {
  return (
    <header className='max-w-[1024px] mx-auto px-2 py-5 flex items-center gap-x-3 font-bold'>
      <div className="">
        <img src={Logo} alt="logo of website" className='h-12 w-12' /> 
      </div>

      <p>Recipes</p>
    </header>
  )
}

export default Header