/** @format */

import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/form.slice";
import recipeReducer from "../slices/recipe.slice"

export default configureStore({
  reducer: {
    form: formReducer,
    recipe: recipeReducer,
  },
});
