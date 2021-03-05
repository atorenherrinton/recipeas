/** @format */

import React from "react";

import { useSelector } from "react-redux";
import {
  selectIsSignIn,
  selectResetPassword,
} from "../../slices/authenticate.slice";
import { Container, Row, Col, Image } from "react-bootstrap";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import ResetPassword from "../reset-password/reset-password.component";
import image from "../../assets/signin.jpg";

const Authenticate = () => {
  const isSignIn = useSelector(selectIsSignIn);
  const resetPassword = useSelector(selectResetPassword);

  return (
    <Container
      style={{
        marginTop: "175px",
      }}
    >
      <Row className="justify-content-center">
        <Col xs={11} sm={10} md={8} style={{ marginBottom: "3rem" }}>
          <Image fluid src={image} rounded />
        </Col>
        <Col xs={12} sm={10} md={8} lg={4}>
          {!isSignIn ? (
            <SignUp />
          ) : !resetPassword ? (
            <SignIn />
          ) : (
            <ResetPassword />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Authenticate;
