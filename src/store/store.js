import { configureStore } from "@reduxjs/toolkit";

//* Reducers *//
import recipesSlice from "./recipes-slice";
import singleRecipeSlice from "./singleRecipe-slice";
import countrySlice from "./country-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: { recipes: recipesSlice, singleRecipe: singleRecipeSlice, country: countrySlice, search: searchSlice}
})

export default store;