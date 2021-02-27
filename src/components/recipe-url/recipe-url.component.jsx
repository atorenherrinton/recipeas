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
        <Col md={8}>
          <Card>
            <Card.Header as="h5">Add from allrecipes</Card.Header>
            <Card.Body>
              <Form onSubmit={handleClick}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>URL</Form.Label>
                  <Form.Control placeholder="Enter URL" />
                </Form.Group>

                <ButtonGroupContainer>
                  <ButtonContainer>
                    <Button
                      onClick={() => {
                        dispatch(deactivateForm());
                        dispatch(deactivateUrl());
                      }}
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                  </ButtonContainer>
                  <Button variant="primary" type="submit">
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
