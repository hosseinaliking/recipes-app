import React from "react";

//* Images *//
import Logo from "../asset/image/Logo.png";

//* Router *//
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-[1024px] mx-auto flex items-center gap-x-3 font-bold p-3">
      <div>
        <Link to={`/`}>
          <img src={Logo} alt="logo of website" className="h-12 w-12" />
        </Link>
      </div>

      <Link to={'/recipes'} >Recipes</Link>
    </header>
  );
};

export default Header;
