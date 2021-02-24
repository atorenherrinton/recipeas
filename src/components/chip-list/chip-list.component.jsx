/** @format */

import React from "react";
import { useSelector } from "react-redux";
import Chip from "../chip/chip.component";
import { selectIngredients } from "../../slices/input.slice";
import { ChipListContainer } from "./chip-list.styles";

const ChipList = () => {
  const ingredients = useSelector(selectIngredients);
  return (
    <ChipListContainer>
      {ingredients.map((ingredient) => (
        <Chip key={ingredient} ingredient={ingredient} />
      ))}
    </ChipListContainer>
  );
};

export default ChipList;
