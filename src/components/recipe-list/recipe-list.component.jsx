/** @format */

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewRecipe from "../new-recipe/new-recipe.component";
import CardColumns from "react-bootstrap/CardColumns";
import SavedRecipeCard from "../saved-recipe-card/saved-recipe-card.component";

import { selectRecipes } from "../../slices/form.slice";
import { useSelector } from "react-redux";

const RecipeList = () => {
  const recipes = useSelector(selectRecipes);
  console.log(recipes)

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        {!recipes.length > 0 ? (
          <NewRecipe />
        ) : (
          <CardColumns>
            {recipes.map((recipe) => (
              <SavedRecipeCard
                key={recipe['id']}
                title={recipe['title']}
                imageUrl={recipe['imageUrl']}
                tools={recipe['tools']}
                ingredients={recipe['ingredients']}
                directions={recipe['directions']}
              />
            ))}
          </CardColumns>
        )}
      </Col>
    </Row>
  );
};

export default RecipeList;
