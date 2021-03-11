/** @format */

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../firebase/firebase";
import { selectUserId } from "../../slices/authenticate.slice";
import {
  addIngredient,
  setIngredient,
  setFullRecipe,
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
  const ref = useRef(null);
  const userId = useSelector(selectUserId);
  const ingredient = useSelector(selectIngredient);
  const ingredientExists = useSelector(selectIngredientExists);
  if (ingredientExists) {
    setTimeout(() => {
      dispatch(resetIngredient());
      dispatch(resetIngredientExists());
    }, 1750);
  }

  const fullRecipe = useSelector(selectFullRecipe);
  const itemsRef = firebase
    .database()
    .ref("users")
    .child(userId)
    .child("items");

  const handleUpload = (event) => {
    event.preventDefault();
    const data = new FormData();
    console.log(ref.current.files[0]);
    data.append("file", ref.current.files[0]);
    data.append("filename", ref.current.value);

    fetch("https://recipeaz.herokuapp.com/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          setFullRecipe({
            ["name"]: "imageUrl",
            ["value"]: data.result.toString(),
          })
        );
        console.log(data.result);
      });
  };

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
        <Col md={7}>
          <Card>
            <Card.Header style={{ textAlign: "center" }} as="h5">
              New Recipe
            </Card.Header>
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
                <Form.Group>
                  <Form.File
                    label="Recipe Image"
                    type="file"
                    ref={ref}
                    onChange={handleUpload}
                  />
                </Form.Group>

                <Form.Group>
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
                    type="text"
                    placeholder="Add ingredients here"
                    name="ingredients"
                    aria-label="Ingredients list"
                    aria-describedby="Ingredients list"
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
                <Form.Group>
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
