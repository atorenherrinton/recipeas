/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHovered, selectIsHovered } from "../../slices/input.slice";


const Chip = (props) => {
  const dispatch = useDispatch();
  const isHovered = useSelector(selectIsHovered);
  return (
    <div
      onMouseEnter={() => dispatch(setHovered(true))}
      onMouseLeave={() => dispatch(setHovered(false))}
      style={{ cursor: "pointer" }}
    >
        {!isHovered ? props.ingredient : "delete"}   
    </div>
  );
};

export default Chip;
