/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const SavedRecipeCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.directions}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.ingredients.split("\n").map((ingredient) => (
          <ListGroupItem>{ingredient}</ListGroupItem>
        ))}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">See Full Recipe</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SavedRecipeCard;
