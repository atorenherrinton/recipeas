/** @format */

import React from "react";
import { closeRecipe } from "../../slices/recipe.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../slices/authenticate.slice";
import firebase from "../../firebase/firebase";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import { ButtonContainer } from "./dropdown.styles";

const DropdownButton = (props) => {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const itemRef = firebase
    .database()
    .ref("users")
    .child(userId)
    .child("items")
    .child(props.id);
  return (
    <ButtonContainer>
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
              itemRef.remove();
              dispatch(closeRecipe());
            }}
          >
            Delete Recipe
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonContainer>
  );
};

export default DropdownButton;
