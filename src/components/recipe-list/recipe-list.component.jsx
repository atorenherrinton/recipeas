/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { selectRecipe, selectRecipes } from "../../slices/recipe.slice";
import { CardColumns, Col, Row } from "react-bootstrap";
import GettingStarted from "../getting-started/getting-started.component";
import SavedRecipeCard from "../saved-recipe-card/saved-recipe-card.component";
import FullRecipe from "../full-recipe/full-recipe.component";

const RecipeList = () => {
  const recipes = useSelector(selectRecipes);
  const recipe = useSelector(selectRecipe);
  return (
    <Row className="justify-content-center">
      <Col xs={11} lg={10}>
        {!recipes.length > 0 ? (
          <GettingStarted />
        ) : recipe.isOpen ? (
          <FullRecipe
            id={recipe.fullRecipe.id}
            title={recipe.fullRecipe.title}
            imageUrl={recipe.fullRecipe.imageUrl}
            description={recipe.fullRecipe.description}
            ingredients={recipe.fullRecipe.ingredients}
            directions={recipe.fullRecipe.directions}
          />
        ) : (
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
        )}
      </Col>
    </Row>
  );
};

export default RecipeList;
