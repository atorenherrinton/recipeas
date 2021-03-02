/** @format */

import React from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import CreateButton from "../create-button/create-button.component";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      className="justify-content-between"
      bg="light"
      expand="lg"
    >
      <Navbar.Brand href="#home">Recipeas</Navbar.Brand>
      <CreateButton />
    </Navbar>
  );
};

export default Header;
