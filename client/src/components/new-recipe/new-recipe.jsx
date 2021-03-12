/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { selectIsUrl } from "../../slices/form.slice";
import RecipeForm from "../recipe-form/recipe-form.component";
import RecipeUrl from "../recipe-url/recipe-url";

const NewRecipe = () => {
  const isUrl = useSelector(selectIsUrl);
  return isUrl ? <RecipeUrl /> : <RecipeForm />;
};

export default NewRecipe;
