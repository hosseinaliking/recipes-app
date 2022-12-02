import React from "react";

//* Pages *//
import Home from "./Pages/Home";

//* Components *//
import Recipes from "./components/Recipes";
import NotFound from "./components/NotFound";
import RecipesDetails from "./components/RecipesDetails";
import Country from "./components/Country";
import SearchDetails from "./components/SearchDetails";

//* Router *//
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className='pb-5'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:name" element={<RecipesDetails />} />
        <Route path="/country" element={<Country />}>
          <Route path="/country/:countryName" element={<Country />} />
        </Route>
        <Route path={'/search'} element={<SearchDetails />}>
          <Route path={'/search/:searchParam'} element={<SearchDetails/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
