/** @format */

import React from "react";
import Chip from "../chip/chip.component"
import { ChipListContainer } from "./chip-list.styles";

const ChipList = (props) => {
  return (
    <ChipListContainer>
      {props.ingredients.map((ingredient) => (
        <Chip ingredient={ingredient} />
      ))}
    </ChipListContainer>
  );
};

export default ChipList;
