/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { activateForm } from "../../slices/form.slice";
import {
  IntroContainer,
  NewRecipeContainer,
  ButtonContainer,
} from "./new-recipe.styles";

const NewRecipe = () => {
  const dispatch = useDispatch();
  return (
    <NewRecipeContainer>
      <IntroContainer>
        <h6>Getting Started</h6>
      </IntroContainer>
      <h5>Add your first recipe</h5>
      <p>Include a photo, required tools, ingredients, and directions.</p>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(activateForm())}
          variant="outline-primary"
          type="submit"
        >
          Create Recipe
        </Button>
      </ButtonContainer>
    </NewRecipeContainer>
  );
};

export default NewRecipe;
