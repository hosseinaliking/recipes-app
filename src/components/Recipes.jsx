import React, { useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


//* Redux *//
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipes } from "../store/recipes-slice";

//* Componrnts *//
import Header from "./Header";
import Search from "./Search";

//* Router *//
import { Link } from "react-router-dom";

const Recipes = () => {
  const items = useSelector((state) => state.recipes.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto">
      <Header />
      <Search />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-2 gap-y-5">
        {items.map((item, index) => {
          return (
            <Link to={`${item.name}`} key={index} className="flex justify-center px-2">
              <div className="relative w-full  h-[240px] lg:w-[310px] rounded-lg overflow-hidden">
                <LazyLoadImage
                  effect="blur"
                  src={item.image}
                  alt="recipes image"
                  className="w-[1000px] lg:w-[310px] h-[240px]  object-cover"
                />

                <div className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-slate-500 opacity-30" />

                <p className="w-full text-center absolute z-20 bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-[20px]" >{item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
