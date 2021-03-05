/** @format */

import React, { useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticate,
  selectCredentials,
  resetCredentials,
  setCredentials,
  setSignIn,
} from "../../slices/authenticate.slice";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const SignUp = (props) => {
  const { signInWithEmailAndPassword, signInWithGoogle, user } = props;
  const credentials = useSelector(selectCredentials);
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(credentials.email, credentials.password);
    setTimeout(() => {
      dispatch(resetCredentials());
    }, 1000);
  };
  const dispatch = useDispatch();
  if (user) {
    dispatch(authenticate());
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Header style={{ textAlign: "center" }} as="h5">
              Sign In
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setCredentials(event.target));
                    }}
                    name="email"
                    type="email"
                    value={credentials.email}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "0.25rem" }}
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setCredentials(event.target));
                    }}
                    name="password"
                    type="password"
                    value={credentials.password}
                    placeholder="Password"
                  />
                </Form.Group>
                {/* <Button
                  style={{ fontSize: "1rem" }}
                  onClick={() => {
                    dispatch(setResetPassword());
                  }}
                  block
                  variant="link"
                >
                  Forgot password?
                </Button> */}
                <Button
                  className="mt-3"
                  block
                  variant="outline-primary"
                  type="submit"
                >
                  Sign In
                </Button>

                <Button
                  onClick={signInWithGoogle}
                  className="mt-3"
                  block
                  variant="outline-secondary"
                >
                  Continue with Google
                </Button>

                <Button
                  onClick={() => {
                    dispatch(setSignIn());
                  }}
                  className="mt-3"
                  block
                  variant="light"
                >
                  Don't have an account? Sign up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignUp);
