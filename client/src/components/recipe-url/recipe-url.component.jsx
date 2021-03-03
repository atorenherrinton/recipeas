/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import firebase from "../../firebase/firebase";

import { deactivateUrl, deactivateForm } from "../../slices/form.slice";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { ButtonContainer, ButtonGroupContainer } from "./recipe-url.styles";

const RecipeUrl = () => {
  const [url, setUrl] = useState("");
  const itemsRef = firebase.database().ref("items");
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = () => {
    fetch("https://recipeaz.heroku.com/api", {
      method: "POST",
      cache: "no-cache",
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify(url),
    })
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
          <Card style={{ marginTop: "6rem" }}>
            <Card.Header as="h5">New recipe</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Recipe URL</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    placeholder="Enter the URL of the allrecipes.com recipe"
                  />
                </Form.Group>

                <ButtonGroupContainer>
                  <ButtonContainer>
                    <Button
                      onClick={() => {
                        dispatch(deactivateForm());
                        dispatch(deactivateUrl());
                      }}
                      variant="outline-secondary"
                    >
                      Cancel
                    </Button>
                  </ButtonContainer>
                  <Button type="submit" variant="outline-primary">
                    Save
                  </Button>
                </ButtonGroupContainer>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeUrl;
