/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { activateForm } from "../../slices/form.slice";
import CreateButton from "../create-button/create-button.component";
import {
  IntroContainer,
  NewRecipeContainer,
  ButtonContainer,
} from "./getting-started.styles";

const GettingStarted = () => {
  const dispatch = useDispatch();
  return (
    <NewRecipeContainer>
      <IntroContainer>
        <h6>Getting Started</h6>
      </IntroContainer>
      <h5>Add your first recipe</h5>
      <p>Include a photo, required tools, ingredients, and directions.</p>
      <ButtonContainer>
        <CreateButton />
      </ButtonContainer>
    </NewRecipeContainer>
  );
};

export default GettingStarted;
