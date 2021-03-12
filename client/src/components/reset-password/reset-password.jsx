/** @format */

import React from "react";
import firebase from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCredentials,
  setCredentials,
  setIsEmailSent,
  setResetPassword,
} from "../../slices/authenticate.slice";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const credentials = useSelector(selectCredentials);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().sendPasswordResetEmail(credentials.email);
    dispatch(setIsEmailSent(true));
    dispatch(setResetPassword());
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Header style={{ textAlign: "center" }} as="h5">
              Reset Password
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

                <Button
                  className="mt-2"
                  block
                  variant="outline-primary"
                  type="submit"
                >
                  Reset Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
