/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { selectRecipe, selectRecipes } from "../../slices/recipe.slice";
import { CardColumns, CardGroup, Col, Row } from "react-bootstrap";
import GettingStarted from "../getting-started/getting-started";
import SavedRecipeCard from "../saved-recipe-card/saved-recipe-card.component";
import FullRecipe from "../full-recipe/full-recipe";

const RecipeList = () => {
  const recipes = useSelector(selectRecipes);
  const recipe = useSelector(selectRecipe);
  return (
    <Row className="justify-content-center">
      {!recipes.length > 0 ? (
        <Col xs={11} sm={10} md={10}>
          <GettingStarted />
        </Col>
      ) : recipe.isOpen ? (
        <Col xs={11} sm={10} md={8} lg={6} xl={5}>
          <CardGroup>
            <FullRecipe
              id={recipe.fullRecipe.id}
              title={recipe.fullRecipe.title}
              imageUrl={recipe.fullRecipe.imageUrl}
              description={recipe.fullRecipe.description}
              ingredients={recipe.fullRecipe.ingredients}
              directions={recipe.fullRecipe.directions}
            />
          </CardGroup>
        </Col>
      ) : (
        <Col xs={11} lg={10}>
          <CardColumns>
            {recipes.map((recipe, idx) => (
              <SavedRecipeCard
                key={idx}
                id={recipe.id}
                title={recipe.title}
                imageUrl={recipe.imageUrl}
                description={recipe.description}
                ingredients={recipe.ingredients}
                directions={recipe.directions}
              />
            ))}
          </CardColumns>
        </Col>
      )}
    </Row>
  );
};

export default RecipeList;
