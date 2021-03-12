/** @format */

import React from "react";
import firebase from "../../firebase/firebase";
import { closeRecipe } from "../../slices/recipe.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../slices/authenticate.slice";
import { Dropdown, ButtonGroup } from "react-bootstrap";

const DropdownButton = (props) => {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  var storage = firebase.storage();
  const itemRef = firebase
    .database()
    .ref("users")
    .child(userId)
    .child("items")
    .child(props.id);
  return (
    <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
      <Dropdown drop="down" as={ButtonGroup} style={{ width: "100%" }}>
        <Dropdown.Toggle
          style={{
            padding: ".25rem .65rem",
          }}
          variant="dark"
          size="sm"
        ></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              if (props.imageUrl.includes("firebase")) {
                storage.ref().child(props.imageUrl).delete();
              }
              itemRef.remove();
              dispatch(closeRecipe());
            }}
          >
            Delete Recipe
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;
