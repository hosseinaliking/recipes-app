import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: true, error: null, items: [], vegetarian: [], trend: [] };

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchRecipes(state, action) {
      state.items = action.payload;
    },

    vegetarian(state, action) {
      state.vegetarian = action.payload;
    },

    trend(state, action) {
      state.trend = action.payload;
    },

    errorState(state, action) {
      state.error = action.payload;
    },

    loadingState(state, action) {
      state.isLoading = action.payload;
    }
  },
});

export default recipesSlice.reducer;
export const { fetchRecipes, vegetarian, trend, loadingState, errorState } = recipesSlice.actions;

//* Action Creator *//

export const fetchAllRecipes = () => {
  return async (dispatch) => {
    // Change laoding state 
    dispatch(loadingState(true));
    
    // create fetch function
    const fetchRec = async () => {
      // Send request 
      const req = await fetch(
        'https://recipes-app-8086d-default-rtdb.firebaseio.com/recipes.json'
      );

      // Check for error
      if (!req.ok) dispatch(errorState('Request if failed, try again!'))

      // Send data to the reducer 
      const data = await req.json();

      // -- Transform data 
      const items = [];

      for (const key in data) {
        items.push(data[key])
      }

      // -- Send data
      dispatch(fetchRecipes(items));

      // -- Send vegetarina data to the reducer 
      const vegetarianItems = items.filter(item => item.category === 'vegetarian')
      dispatch(vegetarian(vegetarianItems))

      // -- Send trend data to the reducer 
      const trendItems = items.filter(item => item.category === 'trend')
      dispatch(trend(trendItems))

      // Change loading state
      dispatch(loadingState(false))
    };

    // Call function for fetching data
    fetchRec();
  };
};

