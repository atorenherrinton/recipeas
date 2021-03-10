/** @format */

import React from "react";
import firebase from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { openRecipe } from "../../slices/recipe.slice";
import { Card, Button } from "react-bootstrap";

import { MoreHoriz } from "@material-ui/icons";
import DropdownButton from "../dropdown/dropdown.component";

const SavedRecipeCard = (props) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <DropdownButton id={props.id} />
      <Card.Img
        style={{ height: "20rem", objectFit: "cover" }}
        variant="top"
        src={props.imageUrl}
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>{props.description}</Card.Text>

        <Button
          style={{ width: "100%" }}
          variant="outline-primary"
          onClick={() => {
            dispatch(openRecipe(props));
          }}
        >
          Open Recipe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SavedRecipeCard;
