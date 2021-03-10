/** @format */

import React from "react";

import { useSelector } from "react-redux";
import {
  selectIsSignIn,
  selectResetPassword,
} from "../../slices/authenticate.slice";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import ResetPassword from "../reset-password/reset-password.component";
import image from "../../assets/breakfast.svg";
import { TitleContainer } from "./authenticate.styles";

const Authenticate = () => {
  const isSignIn = useSelector(selectIsSignIn);
  const resetPassword = useSelector(selectResetPassword);

  return (
    <Container
      style={{
        marginTop: "150px",
      }}
    >
      <Row className="justify-content-center">
        <Col
          style={{
            marginBottom: "2rem",
            position: "relative",
            textAlign: "center",
          }}
          xs={8}
          sm={8}
          md={6}
          lg={5}
        >
          <Image src={image} />
        </Col>
        <Col class="mt-1" xs={12} sm={10} md={8} lg={{ span: 5, offset: 1 }}>
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
