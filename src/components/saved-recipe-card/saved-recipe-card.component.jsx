/** @format */

import React from "react";
import { Card, Button } from "react-bootstrap";
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

        <Button
          variant="outline-secondary"
          block
          onClick={() => {
            dispatch(openRecipe(props));
          }}
        >
          See Full Recipe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SavedRecipeCard;
