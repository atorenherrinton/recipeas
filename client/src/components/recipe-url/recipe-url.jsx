/** @format */

import React, { useState } from "react";
import firebase from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../slices/authenticate.slice";
import { deactivateUrl, deactivateForm } from "../../slices/form.slice";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const RecipeUrl = () => {
  const [url, setUrl] = useState("");
  const userId = useSelector(selectUserId);
  const itemsRef = firebase
    .database()
    .ref("users")
    .child(userId)
    .child("items");
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = () => {
    const url_req_string =
      "https://recipeas1.herokuapp.com/api/" + "?url=" + url;
    fetch(url_req_string)
      .then((res) => res.json())
      .then((data) => {
        itemsRef.push(data.result);
      });
    dispatch(deactivateForm());
    dispatch(deactivateUrl());
  };

  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ marginTop: "4rem" }}>
            <Card.Header style={{ textAlign: "center" }} as="h5">
              New recipe
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Recipe URL</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    placeholder="Enter the URL of the allrecipes.com recipe"
                  />
                </Form.Group>

                <div style={{ float: "right", display: "flex" }}>
                  <Button
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => {
                      dispatch(deactivateForm());
                      dispatch(deactivateUrl());
                    }}
                    variant="outline-secondary"
                  >
                    Cancel
                  </Button>

                  <Button type="submit" variant="outline-primary">
                    Save
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeUrl;
