/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { selectRecipe } from "../../slices/form.slice";
import { useSelector } from "react-redux";

const SavedRecipeCard = () => {
  const recipe = useSelector(selectRecipe);
  return recipe.title ? (
    <Card>
      <Card.Img variant="top" src={recipe.imageUrl} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>{recipe.directions}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {recipe.ingredients.split(" ").map((ingredient) => (
          <ListGroupItem>{ingredient}</ListGroupItem>
        ))}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">See Full Recipe</Card.Link>
      </Card.Body>
    </Card>
  ) : null;
};

export default SavedRecipeCard;
