/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: {
      isOpen: false,
      fullRecipe: {},
    },
    recipes: [],
  },
  reducers: {
    loadRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    openRecipe: (state, action) => {
      state.recipe.isOpen = true;
      state.recipe.fullRecipe = action.payload;
    },
    closeRecipe: (state) => {
      state.recipe.isOpen = false;
      state.recipe.fullRecipe = "";
    },
  },
});

export const { loadRecipes, openRecipe, closeRecipe } = recipeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRecipes = (state) => state.recipe.recipes;
export const selectRecipe = (state) => state.recipe.recipe;

export default recipeSlice.reducer;
