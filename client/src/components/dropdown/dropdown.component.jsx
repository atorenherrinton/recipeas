/** @format */

import React from "react";
import { closeRecipe } from "../../slices/recipe.slice";
import { useDispatch } from "react-redux";
import firebase from "../../firebase/firebase";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import { ButtonContainer } from "./dropdown.styles";

const DropdownButton = (props) => {
  const dispatch = useDispatch();
  const itemRef = firebase.database().ref(`/items/${props.id}`);
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
