import React from "react";

//* Pages *//
import Home from "./Pages/Home";

//* Components *//
import Recipes from "./components/Recipes";
import NotFound from "./components/NotFound";
import RecipesDetails from "./components/RecipesDetails";
import Country from "./components/Country";

//* Router *//
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:name" element={<RecipesDetails />} />
        <Route path="/country" element={<Country />}>
          <Route path="/country/:countryName" element={<Country />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
