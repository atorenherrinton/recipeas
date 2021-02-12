/** @format */

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firebase from "../../firebase/firebase";

import {
  deactivateForm,
  selectRecipes,
} from "../../slices/form.slice";
import { useDispatch } from "react-redux";

import { ButtonGroupContainer, ButtonContainer } from "./recipe-form.styles";

const RecipeForm = () => {
  const dispatch = useDispatch(selectRecipes);
  const [inputValue, setInputValue] = useState({
    imageUrl: "",
    title: "",
    tools: "",
    ingredients: "",
    directions: "",
  });
  const itemsRef = firebase.database().ref("items");

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h5">New Recipe</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Recipe Name</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    name="title"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    name="imageUrl"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Tools</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    name="tools"
                    as="textarea"
                    rows={2}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea2">
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    name="ingredients"
                    as="textarea"
                    rows={4}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea3">
                  <Form.Label>Directions</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    name="directions"
                    as="textarea"
                    rows={8}
                  />
                </Form.Group>
                <ButtonGroupContainer>
                  <ButtonContainer>
                    <Button
                      onClick={() => dispatch(deactivateForm())}
                      variant="secondary"
                      type="reset"
                    >
                      Cancel
                    </Button>
                  </ButtonContainer>
                  <Button
                    onClick={() => {
                      itemsRef.push(inputValue);
                      dispatch(deactivateForm());
                    }}
                    variant="primary"
                  >
                    Save changes
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
