import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: true, error: null, item: null };

const singleRecipe = createSlice({
  name: "single recipes",
  initialState,
  reducers: {
    fetchSingle(state, action) {
      state.item = action.payload;
    },

    loadingState(state, action) {
      state.isLoading = action.payload;
    },

    errorState(state, action) {
      state.error = action.payload;
    },
  },
});

export default singleRecipe.reducer;
export const { errorState, loadingState, fetchSingle } = singleRecipe.actions;

//* Action Creators *//

export const fetchSingleRecipe = (name) => {
  return async (dispatch) => {
    // Change laoding state
    dispatch(loadingState(true));

    // Fetch function
    const fetchRec = async () => {
      const req = await fetch(
        "https://recipes-app-8086d-default-rtdb.firebaseio.com/recipes.json"
      );

      if (!req.ok) dispatch(errorState("Something went wrong!"));

      const data = await req.json();

      // -- Transform data
      const items = [];
      let item = [];

      for (const key in data) {
        items.push(data[key]);
      }

      item = items.find((data) => data.name.toLowerCase() === name.toLowerCase());

      // Send data and change loading state
      dispatch(fetchSingle(item));
      dispatch(loadingState(false));
    };

    fetchRec();
  };
};
