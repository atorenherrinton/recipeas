/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "../slices/authenticate.slice";
import inputReducer from "../slices/input.slice";
import formReducer from "../slices/form.slice";
import recipeReducer from "../slices/recipe.slice";

export default configureStore({
  reducer: {
    input: inputReducer,
    form: formReducer,
    recipe: recipeReducer,
    authenticate: authenticateReducer,
  },
});
