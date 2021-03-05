/** @format */

import React, { useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCredentials,
  setCredentials,
  setResetPassword,
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

const ResetPassword = (props) => {
  const { resetEmail } = props;
  const credentials = useSelector(selectCredentials);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setEmailSent(true);
    }, 1000);
    setTimeout(() => {
      setEmailSent(false);
    }, 1000);

    dispatch(setResetPassword());
  };
  const dispatch = useDispatch();
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Header style={{ textAlign: "center" }} as="h5">
              Reset Password
            </Card.Header>
            <Card.Body>
              {emailSent ? (
                <Alert variant="success">
                  An email has been sent to reset your password
                </Alert>
              ) : (
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

                  <Button
                    className="mt-2"
                    block
                    variant="outline-primary"
                    type="submit"
                  >
                    Reset Password
                  </Button>
                </Form>
              )}
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
})(ResetPassword);
