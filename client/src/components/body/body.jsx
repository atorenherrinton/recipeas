/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../slices/authenticate.slice";
import { selectIsFormActive } from "../../slices/form.slice";
import NewRecipe from "../new-recipe/new-recipe";
import RecipeList from "../recipe-list/recipe-list";
import Authenticate from "../authenticate/authenticate";
import { Spinner } from "react-bootstrap";

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isFormActive = useSelector(selectIsFormActive);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return (
    <div
      style={{
        marginTop: "9rem",
        marginBottom: "4rem",
      }}
    >
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
    </div>
  );
};

export default Body;
