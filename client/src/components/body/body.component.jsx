/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../slices/authenticate.slice";
import { selectIsFormActive } from "../../slices/form.slice";
import NewRecipe from "../new-recipe/new-recipe.component";
import RecipeList from "../recipe-list/recipe-list.component";
import Authenticate from "../authenticate/authenticate.component";
import { Spinner } from "react-bootstrap";
import { BodyContainer } from "./body.styles";

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isFormActive = useSelector(selectIsFormActive);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return (
    <BodyContainer>
      {isLoading ? (
        <Spinner
          style={{ position: "absolute", top: "45%", left: "50%" }}
          animation="border"
          variant="primary"
        />
      ) : !isAuthenticated ? (
        <Authenticate />
      ) : !isFormActive ? (
        <RecipeList />
      ) : (
        <NewRecipe />
      )}
    </BodyContainer>
  );
};

export default Body;
