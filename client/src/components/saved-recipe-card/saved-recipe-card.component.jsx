/** @format */

import React, { useState } from "react";
import firebase from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { openRecipe } from "../../slices/recipe.slice";
import { Card, Button } from "react-bootstrap";
import DropdownButton from "../dropdown/dropdown";

const SavedRecipeCard = (props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  var storage = firebase.storage();

  if (props.imageUrl.includes("firebase")) {
    storage
      .ref()
      .child(props.imageUrl)
      .getDownloadURL()
      .then((url) => {
        setImage(url);
      });
  }

  return (
    <Card>
      <DropdownButton imageUrl={props.imageUrl} id={props.id} />
      <Card.Img
        style={{ height: "20rem", objectFit: "cover" }}
        variant="top"
        src={image ? image : props.imageUrl}
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
