/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { openRecipe } from "../../slices/recipe.slice";
import { LinkContainer } from "./saved-recipe-card.styles";

const SavedRecipeCard = (props) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <LinkContainer>
          <Card.Link
            onClick={() => {
              dispatch(openRecipe(props));
            }}
          >
            See Full Recipe
          </Card.Link>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default SavedRecipeCard;
