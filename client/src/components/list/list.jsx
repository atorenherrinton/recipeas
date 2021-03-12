/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { selectIngredients } from "../../slices/input.slice";
import { ListGroup } from "react-bootstrap";
import ListItem from "../list-item/list-item";

const List = () => {
  const ingredients = useSelector(selectIngredients);
  return (
    <div style={{ marginBottom: "1rem" }}>
      <ListGroup variant="flush">
        {ingredients.map((ingredient, idx) => (
          <ListItem key={idx} ingredient={ingredient} />
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
