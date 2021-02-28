/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllRecipesUrl,
  selectAllRecipesUrl,
} from "../../slices/input.slice";
import firebase from "../../firebase/firebase";

import { deactivateUrl, deactivateForm } from "../../slices/form.slice";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { ButtonContainer, ButtonGroupContainer } from "./recipe-url.styles";

const RecipeUrl = () => {
  const dispatch = useDispatch();
  const url = useSelector(selectAllRecipesUrl);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ marginTop: "6rem" }}>
            <Card.Header as="h5">New recipe</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Recipe URL</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setAllRecipesUrl(event.target));
                    }}
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
                  <Button
                    onClick={() => {
                      fetch("/recipe", {
                        method: "POST",
                        cache: "no-cache",
                        headers: {
                          content_type: "application/json",
                        },
                        body: JSON.stringify(url),
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          console.log(data.result);
                        });
                        dispatch(deactivateForm());
                        dispatch(deactivateUrl());
                    }}
                    variant="outline-primary"
                  >
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
