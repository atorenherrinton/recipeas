/** @format */

import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../slices/input.slice";
import formReducer from "../slices/form.slice";
import recipeReducer from "../slices/recipe.slice";

export default configureStore({
  reducer: {
    input: inputReducer,
    form: formReducer,
    recipe: recipeReducer,
  },
});
