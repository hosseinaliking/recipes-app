import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoading: true, error: null };

const searchSclie = createSlice({
  name: "search",
  initialState,
  reducers: {
    addItems(state, action) {
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

export default searchSclie.reducer;
export const { addItems, loadingState, errorState } = searchSclie.actions;

//* Action Creators *//

export const fetchSearch = (searchFilter) => {
  return async (dispatch) => {
    // Change loading state
    dispatch(loadingState(true));

    // Fetch function
    const fetchData = async () => {
      const req = await fetch(
        "https://recipes-app-8086d-default-rtdb.firebaseio.com/recipes.json"
      );

      // -- Check for error
      if (!req.ok) dispatch(errorState("Somethig went wrong!"));

      const data = await req.json();

      // Transform data
      const items = [];
      for (const key in data) {
        items.push(data[key]);
      }

      // Find data match search filter
      const searchedItems = items.filter(
        (item) => 
           item.name.includes(searchFilter) 
        
      );

      // Send data to the reducer
      dispatch(addItems(searchedItems));
      dispatch(loadingState(false))
    };

    fetchData();
  };
};
