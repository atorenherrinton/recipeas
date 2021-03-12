/** @format */

import React from "react";

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../slices/authenticate.slice";
import { Navbar } from "react-bootstrap";
import CreateButton from "../create-button/create-button";
import SignoutButton from "../signout-button/signout-button";

const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <Navbar
      fixed="top"
      className="justify-content-between"
      bg="light"
      expand="lg"
    >
      <Navbar.Brand>Recipeas</Navbar.Brand>
      {isAuthenticated ? <CreateButton /> : <span>Make it your own</span>}
      {isAuthenticated ? <SignoutButton /> : null}
    </Navbar>
  );
};

export default Header;
