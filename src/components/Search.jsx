import React from "react";

//* Icons *//
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="max-w-[1024px] mx-auto  px-2 py-5 flex flex-col bg-red-400">
      <div className="bg-slate-800 p-3 flex justify-center items-center rounded">
        <FiSearch color="white" size={30} className='cursor-pointer' />
        <input
          type="text"
          placeholder="Search here ..."
          className="block w-[100%] md:w-[50%] p-3 outline-none bg-transparent caret-white text-white"
        />
      </div>

      <ul></ul>
    </div>
  );
};

export default Search;
