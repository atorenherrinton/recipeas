/** @format */

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewRecipe from "../new-recipe/new-recipe.component";
import CardDeck from "react-bootstrap/CardDeck";
import SavedRecipeCard from "../saved-recipe-card/saved-recipe-card.component";

import { selectRecipe } from "../../slices/form.slice";
import { useSelector } from "react-redux";

const RecipeList = () => {
  const recipe = useSelector(selectRecipe);

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <CardDeck>
          <SavedRecipeCard />
          {!recipe.title ? <NewRecipe /> : null}
        </CardDeck>
      </Col>
    </Row>
  );
};

export default RecipeList;
