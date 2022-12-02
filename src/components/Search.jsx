import React, { useRef } from "react";

//* Icons *//
import { FiSearch } from "react-icons/fi";
import { FaPizzaSlice } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { SiElasticsearch } from "react-icons/si";
import { SiNewjapanprowrestling } from "react-icons/si";

//* Router *//
import { NavLink, useNavigate } from "react-router-dom";

const Search = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // navigate("/search", { state: value, replace: true })
    navigate(`/search/${searchRef.current.value}`);
    searchRef.current.value = "";
  };

  return (
    <div className="max-w-[560px] mx-auto flex flex-col gap-4 px-3">
      <form
        onSubmit={submitHandler}
        className="bg-slate-800 p-3 flex items-center rounded"
      >
        <FiSearch color="white" size={30} className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search here ..."
          className="block w-[100%] p-1 pl-2 outline-none bg-transparent caret-white text-white"
          ref={searchRef}
        />
      </form>

      <ul className="flex justify-between md:justify-center md:gap-10 items-center md:px-3">
        <NavLink
          to={`/country/italian`}
          className={({ isActive }) =>
            isActive
              ? ` flex flex-col gap-1 items-center justify-center active rounded-full w-16 h-16 p-1 cursor-pointer`
              : ` flex flex-col gap-1 items-center justify-center inActive rounded-full w-16 h-16 p-1 cursor-pointer`
          }
        >
          <FaPizzaSlice size={20} />
          <span className="text-white text-sm">Italian</span>
        </NavLink>
        <NavLink
          to={`/country/american`}
          className={({ isActive }) =>
            isActive
              ? ` flex flex-col gap-1 items-center justify-center active rounded-full w-16 h-16 p-1 cursor-pointer`
              : ` flex flex-col gap-1 items-center justify-center inActive rounded-full w-16 h-16 p-1 cursor-pointer`
          }
        >
          <FaBirthdayCake size={20} />
          <span className="text-white text-sm">American</span>
        </NavLink>
        <NavLink
          to={`/country/thailand`}
          className={({ isActive }) =>
            isActive
              ? ` flex flex-col gap-1 items-center justify-center active rounded-full w-16 h-16 p-1 cursor-pointer`
              : ` flex flex-col gap-1 items-center justify-center inActive rounded-full w-16 h-16 p-1 cursor-pointer`
          }
        >
          <SiElasticsearch size={20} />
          <span className="text-white text-sm">Thai</span>
        </NavLink>
        <NavLink
          to={`/country/japanness`}
          className={({ isActive }) =>
            isActive
              ? ` flex flex-col gap-1 items-center justify-center active rounded-full w-16 h-16 p-1 cursor-pointer`
              : ` flex flex-col gap-1 items-center justify-center inActive rounded-full w-16 h-16 p-1 cursor-pointer`
          }
        >
          <SiNewjapanprowrestling size={20} />
          <span className="text-white text-sm">Japanness</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Search;
