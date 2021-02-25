/** @format */

import React from "react";
import { selectIngredients } from "../../slices/input.slice";
import { ListGroup } from "react-bootstrap";
import ListItem from "../list-item/list-item.component";
import { ListContainer } from "./list.styles";
import { useSelector } from "react-redux";

const List = () => {
  const ingredients = useSelector(selectIngredients);
  return (
    <ListContainer>
      <ListGroup variant="flush">
        {ingredients.map((ingredient, idx) => (
          <ListItem key={idx} ingredient={ingredient} />
        ))}
      </ListGroup>
    </ListContainer>
  );
};

export default List;
