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
  const { createUserWithEmailAndPassword, signInWithGoogle, user } = props;
  const credentials = useSelector(selectCredentials);
  const [doesNotMatch, setDoesNotMatch] = useState(false);
  if (doesNotMatch) {
    setTimeout(() => {
      setDoesNotMatch(false);
    }, 1750);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      setDoesNotMatch(true);
    } else {
      createUserWithEmailAndPassword(credentials.email, credentials.password);
      setTimeout(() => {
        dispatch(resetCredentials());
      }, 1000);
    }
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
              Sign Up
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

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setCredentials(event.target));
                    }}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setCredentials(event.target));
                    }}
                    name="confirmPassword"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                {doesNotMatch ? (
                  <Alert variant="warning">The passwords do not match</Alert>
                ) : null}

                <Button
                  className="mt-3"
                  block
                  variant="outline-primary"
                  type="submit"
                >
                  Sign Up
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
                  Already have an account? Sign in
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
