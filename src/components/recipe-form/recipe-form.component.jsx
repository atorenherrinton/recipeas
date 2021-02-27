/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../firebase/firebase";
import {
  addIngredient,
  setIngredient,
  setFullRecipe,
  setUrl,
  resetIngredient,
  resetIngredientExists,
  selectFullRecipe,
  selectIngredient,
  selectIngredientExists,
  clearForm,
} from "../../slices/input.slice";
import {
  deactivateForm,
  validateForm,
  invalidateForm,
  selectIsValidated,
} from "../../slices/form.slice";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import List from "../list/list.component";

import {
  ButtonGroupContainer,
  ButtonContainer,
  AlertContainer,
  ListContainer,
} from "./recipe-form.styles";

import { Add } from "@material-ui/icons";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const isFormValidated = useSelector(selectIsValidated);
  const ingredient = useSelector(selectIngredient);
  console.log(ingredient);
  const ingredientExists = useSelector(selectIngredientExists);
  if (ingredientExists) {
    setTimeout(() => {
      dispatch(resetIngredient());
      dispatch(resetIngredientExists());
    }, 1750);
  }

  const fullRecipe = useSelector(selectFullRecipe);
  const itemsRef = firebase.database().ref("items");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      dispatch(invalidateForm());
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(validateForm());
      itemsRef.push(fullRecipe);
      dispatch(clearForm());
      dispatch(deactivateForm());
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
                noValidate
                // validated={!isFormValidated}
                onSubmit={handleSubmit}
              >
                <Form.Group>
                  <Form.Label>Recipe Name</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setFullRecipe(event.target));
                    }}
                    type="text"
                    placeholder="Add the name of your recipe here"
                    name="title"
                    required
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
                      dispatch(setUrl(event.target));
                    }}
                    type="text"
                    name="imageUrl"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter an image URL.
                  </Form.Control.Feedback>
                </InputGroup>

                <Form.Group controlid="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setFullRecipe(event.target));
                    }}
                    type="text"
                    placeholder="Add your description here"
                    name="description"
                    as="textarea"
                    rows={2}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a recipe description.
                  </Form.Control.Feedback>
                </Form.Group>
                <label>Ingredients</label>
                <InputGroup className="mb-1">
                  <FormControl
                    onChange={(event) => {
                      dispatch(setIngredient(event.target));
                    }}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        dispatch(addIngredient());
                      }
                    }}
                    id="ingredients"
                    type="text"
                    placeholder="Add ingredients here"
                    name="ingredients"
                    aria-label="Ingredients list"
                    aria-describedby="basic-addon2"
                    value={ingredient}
                    // required
                  />

                  <InputGroup.Append>
                    <Button
                      style={{ borderRadius: "0 0.25rem 0.25rem 0" }}
                      onClick={() => {
                        dispatch(addIngredient());
                      }}
                      variant="outline-secondary"
                    >
                      <Add fontSize="small" />
                    </Button>
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    Please add at least one ingredient.
                  </Form.Control.Feedback>
                </InputGroup>
                {ingredientExists ? (
                  <AlertContainer>
                    <Alert variant="warning">
                      You've already entered <strong>{ingredient}</strong>
                    </Alert>
                  </AlertContainer>
                ) : null}
                <ListContainer>
                  <List />
                </ListContainer>
                <Form.Group controlid="exampleForm.ControlTextarea3">
                  <Form.Label>Directions</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      dispatch(setFullRecipe(event.target));
                    }}
                    type="text"
                    name="directions"
                    as="textarea"
                    rows={8}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please add the directions
                  </Form.Control.Feedback>
                </Form.Group>
                <ButtonGroupContainer>
                  <ButtonContainer>
                    <Button
                      onClick={() => {
                        dispatch(validateForm());
                        dispatch(deactivateForm());
                        dispatch(clearForm());
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
