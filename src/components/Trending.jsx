import React, { useEffect } from "react";

//* Redux *//
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipes } from "../store/recipes-slice";

//* Components *//
import HomeSlider from "./HomeSlider";

//* Images *//
import loadingGif from "../asset/image/Loading.gif";

const Trending = () => {
  const items = useSelector((state) => state.recipes.trend);
  const loading = useSelector((state) => state.recipes.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto mt-10 px-5">
      <h2 className="my-5 font-medium capitalize text-[22px]">Trending</h2>

      {loading ? (
        <div className="flex justify-center items-center h-[240px]">
          <img src={loadingGif} alt="loading gif" className="w-24 h-24" />
        </div>
      ) : (
        <HomeSlider data={items} link={"recipes"} />
      )}
    </div>
  );
};

export default Trending;
