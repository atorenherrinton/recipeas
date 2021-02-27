/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../firebase/firebase";

import { deactivateUrl, deactivateForm } from "../../slices/form.slice";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { ButtonContainer, ButtonGroupContainer } from "./recipe-url.styles";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState("");
  console.log(recipe);

  useEffect(() => {
    fetch("/recipe")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.recipe);
      });
  }, []);
  
  const handleClick = () => {
    dispatch(deactivateForm());
    dispatch(deactivateUrl());
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ marginTop: "6rem" }} >
            <Card.Header as="h5">New recipe</Card.Header>
            <Card.Body>
              <Form onSubmit={handleClick}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Recipe URL</Form.Label>
                  <Form.Control placeholder="Enter the URL of the allrecipes.com recipe" />
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
                  <Button variant="outline-primary" type="submit">
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

export default RecipeForm;
