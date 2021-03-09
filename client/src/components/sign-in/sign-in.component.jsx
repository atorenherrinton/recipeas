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
  setIsEmailSent,
  selectIsEmailSent,
  resetErrorMessage,
  selectErrorMessage,
  setErrorMessage,
  setResetPassword,
  setSignIn,
} from "../../slices/authenticate.slice";
import {
  Alert,
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";

const SignUp = (props) => {
  const {
    error,
    setError,
    signInWithEmailAndPassword,
    signInWithGoogle,
    user,
  } = props;
  const credentials = useSelector(selectCredentials);
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  const isEmailSent = useSelector(selectIsEmailSent);

  if (isEmailSent) {
    setTimeout(() => {
      dispatch(setIsEmailSent(false));
    }, 2000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(credentials.email, credentials.password);
    dispatch(resetCredentials());
  };

  if (error) {
    dispatch(setErrorMessage(error));
  }
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
                {isEmailSent ? (
                  <Alert variant="success">
                    An email has been sent to reset your password
                  </Alert>
                ) : null}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setCredentials(event.target));
                      setError("reset");
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
                      setError("reset");
                    }}
                    name="password"
                    type="password"
                    value={credentials.password}
                    placeholder="Password"
                  />
                </Form.Group>
                {errorMessage && errorMessage !== "reset" ? (
                  <Alert className="mt-3" variant="warning">
                    {errorMessage}
                  </Alert>
                ) : null}
                <Button
                  className="mt-2"
                  onClick={() => {
                    dispatch(setResetPassword());
                  }}
                  block
                  variant="link"
                >
                  Forgot password?
                </Button>
                <Button
                  className="mt-2"
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
                    dispatch(resetErrorMessage());
                    dispatch(resetCredentials());
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
