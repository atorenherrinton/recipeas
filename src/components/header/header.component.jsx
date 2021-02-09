/** @format */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = () => (
  <Navbar className="justify-content-between" bg="light" expand="lg">
    <Navbar.Brand href="#home">Recipeas</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <DropdownButton
      menuAlign="right"
      title="Sign up"
      id="dropdown-menu-align-right"
    >
      <Dropdown.Item eventKey="1">Sign Up</Dropdown.Item>
      <Dropdown.Item eventKey="2">Log in</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="3">Log out</Dropdown.Item>
    </DropdownButton>
  </Navbar>
  
);

export default Header;
