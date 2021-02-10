/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    isActive: false,
    imageUrl: "",
    title: "",
    tools: "",
    ingredients: "",
    directions: "",
  },
  reducers: {
    activateForm: (state) => {
      state.isActive = true;
    },
    deactivateForm: (state) => {
      state.isActive = false;
    },
    setRecipe: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const {
        imageUrl,
        title,
        tools,
        ingredients,
        directions,
      } = action.payload;

      state.imageUrl = imageUrl;
      state.title = title;
      state.tools = tools;
      state.ingredients = ingredients;
      state.directions = directions;
    },
  },
});

export const { activateForm, deactivateForm, setRecipe } = formSlice.actions;

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
export const selectRecipe = (state) => ({
  imageUrl: state.form.imageUrl,
  title: state.form.title,
  tools: state.form.tools,
  ingredients: state.form.ingredients,
  directions: state.form.directions,
});

export default formSlice.reducer;
