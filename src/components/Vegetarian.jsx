import React, { useEffect } from "react";

//* Redux *//
import { useSelector, useDispatch } from "react-redux";
import { fetchAllRecipes } from "../store/recipes-slice";

//* Components *//
import HomeSlider from "./HomeSlider";

//* Images *//
import loadingGif from "../asset/image/Loading.gif";

const Vegetarian = () => {
  const dispatch = useDispatch();
  const vegetarian = useSelector((state) => state.recipes.vegetarian);
  const loading = useSelector((state) => state.recipes.isLoading);
  // const error = useSelector((state) => state.recipes.error);

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto mt-10 px-5 select-none">
      <h2 className="my-5 font-medium capitalize text-[22px]">Vegetarian</h2>

      {loading ? (
        <div className="flex justify-center items-center h-[240px]" >
          <img src={loadingGif} alt="loading gif" className="w-24 h-24" />
        </div>
      ) : (
        <HomeSlider data={vegetarian} link={"recipes"} />
      )}
    </div>
  );
};

export default Vegetarian;
