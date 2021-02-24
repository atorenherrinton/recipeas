/** @format */

import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { ChipContainer } from "./chip.styles";

const Chip = (props) => {
  return (
    <ChipContainer>
      <Badge pill variant="light">
        {props.ingredient}
      </Badge>
    </ChipContainer>
  );
};

export default Chip;
