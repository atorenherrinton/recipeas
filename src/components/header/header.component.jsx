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
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>

      <CreateButton />

      {/* <DropdownButton
        menuAlign="right"
        title="Sign Up"
        id="dropdown-menu-align-right"
      >
        <Dropdown.Item eventKey="1">Sign Up</Dropdown.Item>
        <Dropdown.Item eventKey="2">Log In</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="3">Log Out</Dropdown.Item>
      </DropdownButton> */}
    </Navbar>
  );
};

export default Header;
