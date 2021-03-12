/** @format */

import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Ingredient = (props) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <tr>
      <td
        style={
          checked
            ? {
                display: "flex",
                textDecoration: "line-through",
              }
            : { display: "flex" }
        }
      >
        <Form.Check onClick={handleClick} type="checkbox" />
        {props.ingredient}
      </td>
    </tr>
  );
};

export default Ingredient;
