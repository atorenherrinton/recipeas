/** @format */

import React from "react";
import { Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openRecipe } from "../../slices/recipe.slice";
import firebase from "../../firebase/firebase";

const SavedRecipeCard = (props) => {
  const dispatch = useDispatch();
  const itemRef = firebase.database().ref(`/items/${props.id}`);
  return (
    <Card>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>

        <Dropdown as={ButtonGroup} style={{ width: "100%" }}>
          <Button
            style={{ width: "95%" }}
            variant="outline-primary"
            onClick={() => {
              dispatch(openRecipe(props));
            }}
          >
            Open Recipe
          </Button>

          <Dropdown.Toggle
            split
            variant="outline-primary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                itemRef.remove();
              }}
            >
              Delete Recipe
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
};

export default SavedRecipeCard;
