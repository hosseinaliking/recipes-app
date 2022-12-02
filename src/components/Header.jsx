import React from "react";

//* Images *//
import Logo from "../asset/image/Logo.png";

//* Router *//
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='w-[1024px] mx-auto px-2 py-5 flex items-center gap-x-3 font-bold'>
      <Link to={'/'} >
        <img src={Logo} alt="logo of website" className='h-12 w-12' /> 
      </Link>

      <Link to={'/recipes'} >Recipes</Link>
    </header>
  );
};

export default Header;
