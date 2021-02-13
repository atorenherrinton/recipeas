/** @format */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { activateForm } from "../../slices/form.slice";

const Header = () => {
  const dispatch = useDispatch();
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

        <Button
          onClick={() => dispatch(activateForm())}
          variant="outline-primary"
          type="submit"
        >
          Create Recipe
        </Button>

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
