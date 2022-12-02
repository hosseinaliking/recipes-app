import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//* Components *//
import Header from "./Header";
import Search from "./Search";

//* Redux *//
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../store/search-slice";

//* Rouer *//
import { useParams, Link } from "react-router-dom";

//* Images *//
import loadingGif from "../asset/image/Loading.gif";

const SearchDetails = () => {
  const { searchParam } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.search.items);
  const loading = useSelector((state) => state.search.isLoading);

  useEffect(() => {
    dispatch(fetchSearch(searchParam));
  }, [searchParam]);

  return (
    <div className="max-w-[1024px] mx-auto">
      <Header />
      <Search />

      {!searchParam && (
        <p className="h-24 flex items-center justify-center font-bold mt-5">
          Please enter the search a recipe name
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-2 gap-y-5">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center h-[240px] ">
            <img
              src={loadingGif}
              alt="Loading spinner gif"
              className="h-24 w-24"
            />
          </div>
        ) : (
          items.map((item, index) => {
            return (
              <Link
                to={`/recipes/${item.name}`}
                key={index}
                className="flex justify-center px-2"
              >
                <div className="relative w-full  h-[240px] lg:w-[310px] rounded-lg overflow-hidden">
                  <LazyLoadImage
                    effect="blur"
                    src={item.image}
                    alt="recipes image"
                    className="w-[1000px] lg:w-[310px] h-[240px]  object-cover"
                  />

                  <div className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-slate-500 opacity-30" />

                  <p className="w-full text-center absolute z-20 bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-[20px]">
                    {item.name}
                  </p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchDetails;
