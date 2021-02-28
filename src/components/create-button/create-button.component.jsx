/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  activateForm,
  activateUrl,
  deactivateUrl,
} from "../../slices/form.slice";
import { DropdownButton, Dropdown } from "react-bootstrap";

const CreateButton = () => {
  const dispatch = useDispatch();
  return (
    <DropdownButton
      menuAlign="right"
      variant="outline-primary"
      id="dropdown-basic-button"
      title="Create Recipe"
    >
      <Dropdown.Item
        onClick={() => {
          dispatch(activateForm());
          dispatch(activateUrl());
        }}
      >
        allrecipes.com
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          dispatch(activateForm());
          dispatch(deactivateUrl());
        }}
      >
        from scratch
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default CreateButton;
