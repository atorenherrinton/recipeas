/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { closeRecipe } from "../../slices/recipe.slice";
import firebase from "../../firebase/firebase";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  Row,
} from "react-bootstrap";

const FullRecipe = (props) => {
  const dispatch = useDispatch();
  const itemRef = firebase.database().ref(`/items/${props.id}`);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={8}>
          <Card>
            <Card.Img variant="top" src={props.imageUrl} />
            <Card.Body>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
              {props.ingredients ? (
                <div>
                  <h5>Ingredients</h5>
                  <ul>
                    {props.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <h5>Directions</h5>
              {props.directions.split("\n").map((step, idx) => (
                <p key={idx}>{step}</p>
              ))}

              <Dropdown as={ButtonGroup} style={{ width: "100%" }}>
                <Button
                  style={{ width: "95%" }}
                  variant="outline-primary"
                  onClick={() => {
                    dispatch(closeRecipe());
                  }}
                >
                  Close Recipe
                </Button>

                <Dropdown.Toggle
                  split
                  variant="outline-primary"
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      itemRef.remove();
                    }}
                  >
                    Delete Recipe
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FullRecipe;
