/** @format */

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewRecipe from "../new-recipe/new-recipe.component";
import CardColumns from "react-bootstrap/CardColumns";
import SavedRecipeCard from "../saved-recipe-card/saved-recipe-card.component";
import FullRecipe from "../full-recipe/full-recipe.component";

import { selectRecipe, selectRecipes } from "../../slices/recipe.slice";
import { useSelector } from "react-redux";

const RecipeList = () => {
  const recipes = useSelector(selectRecipes);
  const recipe = useSelector(selectRecipe);
  return (
    <Row className="justify-content-center">
      <Col md={8}>
        {!recipes.length > 0 ? (
          <NewRecipe />
        ) : recipe.isOpen ? (
          <FullRecipe
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
