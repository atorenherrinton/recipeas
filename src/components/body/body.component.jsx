/** @format */

import React, { useState } from "react";
import RecipeForm from "../recipe-form/recipe-form.component";
import RecipeList from "../recipe-list/recipe-list.component";
import { BodyContainer } from "./body.styles";

const Body = () => {
  const [isFormActive, setFormActive] = useState(false);

  const [recipe, setRecipe] = useState({
    title: "",
    tools: "",
    ingredients: "",
    directions: "",
  });

  const [finalRecipe, submitRecipe] = useState("");

  const { title, tools, ingredients, directions } = recipe;

  const handleNewForm = (event) => {
    setFormActive(true);
    event.preventDefault();
  };

  const handleCancelForm = (event) => {
    setFormActive(false);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (event) => {
    setFormActive(false);
    submitRecipe(title + tools + ingredients + directions);
    console.log(finalRecipe);
    event.preventDefault();
  };

  return (
    <BodyContainer>
      {!isFormActive ? (
        <RecipeList handleNewForm={handleNewForm} />
      ) : (
        <RecipeForm
          title={title}
          tools={tools}
          ingredients={ingredients}
          directions={directions}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancelForm={handleCancelForm}
        />
      )}
    </BodyContainer>
  );
};

export default Body;
