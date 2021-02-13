/** @format */

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import firebase from "../../firebase/firebase";
import {
  deactivateForm,
  validateForm,
  invalidateForm,
  selectIsValidated,
} from "../../slices/form.slice";
import { useDispatch, useSelector } from "react-redux";

import { ButtonGroupContainer, ButtonContainer } from "./recipe-form.styles";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const isFormValidated = useSelector(selectIsValidated);
  const [inputValue, setInputValue] = useState({
    imageUrl: "",
    title: "",
    description: "",
    ingredients: "",
    directions: "",
  });
  const itemsRef = firebase.database().ref("items");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(validateForm());
      itemsRef.push(inputValue);
      dispatch(deactivateForm());
      dispatch(invalidateForm());
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h5">New Recipe</Card.Header>
            <Card.Body>
              <Form
                onSubmit={handleSubmit}
                validated={isFormValidated}
              >
                <Form.Group>
                  <Form.Label>Recipe Name</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    type="text"
                    placeholder="Add the name of your recipe here"
                    name="title"
                    required
                    controlId="validationCustom01"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a recipe name.
                  </Form.Control.Feedback>
                </Form.Group>

                <label htmlFor="basic-url">Image URL</label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                      https://
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    type="text"
                    name="imageUrl"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    controlId="validationCustom02"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a recipe description.
                  </Form.Control.Feedback>
                </InputGroup>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    type="text"
                    placeholder="Add your description here"
                    name="description"
                    as="textarea"
                    rows={2}
                    required
                    controlId="validationCustom03"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a recipe description.
                  </Form.Control.Feedback>
                </Form.Group>

                <label>Ingredients</label>
                <InputGroup className="mb-3">
                  <FormControl
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    type="text"
                    placeholder="Add ingredients here"
                    name="ingredients"
                    aria-label="Ingredients list"
                    aria-describedby="basic-addon2"
                    required
                    controlId="validationCustom04"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-success">+</Button>
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    Please add at least one ingredient.
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Group controlId="exampleForm.ControlTextarea3">
                  <Form.Label>Directions</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      const { value, name } = event.target;
                      setInputValue({ ...inputValue, [name]: value });
                    }}
                    type="text"
                    name="directions"
                    as="textarea"
                    rows={8}
                    required
                    controlId="validationCustom05"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please add the directions
                  </Form.Control.Feedback>
                </Form.Group>
                <ButtonGroupContainer>
                  <ButtonContainer>
                    <Button
                      onClick={() => dispatch(deactivateForm())}
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
