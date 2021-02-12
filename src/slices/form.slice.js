/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    isActive: false,
    recipes: [],
  },
  reducers: {
    activateForm: (state) => {
      state.isActive = true;
    },
    deactivateForm: (state) => {
      state.isActive = false;
    },
    loadRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const {
  activateForm,
  deactivateForm,
  loadRecipes,
} = formSlice.actions;

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
export const selectIsFormActive = (state) => state.form.isActive;
export const selectRecipes = (state) => state.form.recipes;

export default formSlice.reducer;
