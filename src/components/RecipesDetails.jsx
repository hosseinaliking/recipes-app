import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//* Components *//
import Header from "./Header";
import Search from "./Search";

//* Router *//
import { useParams } from "react-router-dom";

//* Redux *//
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleRecipe } from "../store/singleRecipe-slice";

//* Images *//
import Loading from "../asset/image/Loading.gif";
import SingleRecipeDetails from "./SingleRecipeDetails";

const RecipesDetails = () => {
  const item = useSelector((state) => state.singleRecipe.item);
  const loading = useSelector((state) => state.singleRecipe.isLoading);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchSingleRecipe(name));
  }, [name]);

  return (
    <div className="max-w-[1024px] mx-auto">
      <Header />
      <Search />

      <div className="max-w-[1024px] mx-auto mt-5 px-2">
        {loading ? (
          <div className="flex justify-center items-center h-[240px] ">
            <img
              src={Loading}
              alt="Loading spinner gif"
              className="h-24 w-24"
            />
          </div>
        ) : (
          <SingleRecipeDetails data={item} />
        )}
      </div>
    </div>
  );
};

export default RecipesDetails;
