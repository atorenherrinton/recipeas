/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { deleteIngredient } from "../../slices/input.slice";
import { ListGroup } from "react-bootstrap";
import { Close } from "@material-ui/icons";

const ListItem = (props) => {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      {props.ingredient}
      <Close
        onClick={() => {
          dispatch(deleteIngredient(props.ingredient));
          console.log(props.ingredient);
        }}
        style={{ float: "right", color: "#6c757d", cursor: "pointer" }}
        fontSize="small"
      />
    </ListGroup.Item>
  );
};

export default ListItem;
