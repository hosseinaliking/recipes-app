import React from "react";

//* Icons *//
import { FiSearch } from "react-icons/fi";
import { FaPizzaSlice } from 'react-icons/fa'
import { FaBirthdayCake } from 'react-icons/fa'
import { SiElasticsearch } from 'react-icons/si'
import {SiNewjapanprowrestling} from 'react-icons/si'

//* Router *// 
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="max-w-[560px] mx-auto flex flex-col gap-4 px-3">
      <div className="bg-slate-800 p-3 flex items-center rounded">
        <FiSearch color="white" size={30} className='cursor-pointer' />
        <input
          type="text"
          placeholder="Search here ..."
          className="block w-[100%] p-1 pl-2 outline-none bg-transparent caret-white text-white"
        />
      </div>

      <ul className="flex justify-between md:justify-center md:gap-10 items-center md:px-3" >
        <Link to={`/country/italian`} className="flex flex-col gap-1 items-center justify-center bg-slate-700 rounded-full w-16 h-16 p-1 cursor-pointer" >
          <FaPizzaSlice size={20} />
          <span className="text-white text-sm" >Italian</span>
        </Link>
        <Link to={`/country/american`} className="flex flex-col gap-1 items-center justify-center bg-slate-700 rounded-full w-16 h-16 p-1 cursor-pointer" >
          <FaBirthdayCake size={20} />
          <span className="text-white text-sm" >American</span>
        </Link>
        <Link to={`/country/thailand`} className="flex flex-col gap-1 items-center justify-center bg-slate-700 rounded-full w-16 h-16 p-1 cursor-pointer" >
          <SiElasticsearch size={20} />
          <span className="text-white text-sm" >Thai</span>
        </Link>
        <Link to={`/country/japanness`} className="flex flex-col gap-1 items-center justify-center bg-slate-700 rounded-full w-16 h-16 p-1 cursor-pointer" >
          <SiNewjapanprowrestling size={20} />
          <span className="text-white text-sm" >Japanness</span>
        </Link>
      </ul>
    </div>
  );
};

export default Search;
