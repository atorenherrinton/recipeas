/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { selectIsFormActive } from "../../slices/form.slice";
import NewRecipe from "../new-recipe/new-recipe.component";
import RecipeList from "../recipe-list/recipe-list.component";
import { BodyContainer } from "./body.styles";

const Body = () => {
  const isFormActive = useSelector(selectIsFormActive);

  return (
    <BodyContainer>
      {!isFormActive ? <RecipeList /> : <NewRecipe />}
    </BodyContainer>
  );
};

export default Body;
