import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoading: true, error: null };

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = action.payload;
    },

    loadingState(state, action) {
      state.isLoading = action.payload;
    },

    errorState(state, action) {
      state.error = action.payload;
    },
  },
});

export default countrySlice.reducer;
export const { loadingState, errorState, addItem } = countrySlice.actions;

//* Action Creators *//

export const fetchCountry = (countryName) => {
  return async (dispatch) => {
    // Change loading state
    dispatch(loadingState(true));

    // Send request
    const fetchItem = async () => {
      // -- Request
      const req = await fetch(
        "https://recipes-app-8086d-default-rtdb.firebaseio.com/recipes.json"
      );

      // -- Check for error
      if (!req.ok) dispatch(errorState("Something went wrong!"));

      // -- Get data
      const data = await req.json();

      // -- Transform data
      const items = [];

      for (const key in data) {
        items.push(data[key]);
      }

      // -- Filter data by country name passed to function
      const item = items.filter((data) => data.country === countryName);

      // -- Send to the reducer
      dispatch(addItem(item));

      // Change loading satate
      dispatch(loadingState(false));
    };

    fetchItem();
  };
};
