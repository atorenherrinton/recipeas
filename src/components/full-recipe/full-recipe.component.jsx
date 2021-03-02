/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { closeRecipe } from "../../slices/recipe.slice";
import firebase from "../../firebase/firebase";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DropdownButton from "../dropdown/dropdown.component"

const FullRecipe = (props) => {
  const dispatch = useDispatch();
  const itemRef = firebase.database().ref(`/items/${props.id}`);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={7}>
          <Card>
            <DropdownButton id={props.id} />
            <Card.Img
              style={{ height: "25rem", objectFit: "cover" }}
              variant="top"
              src={props.imageUrl}
            />
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

              <Button
                style={{ width: "100%" }}
                variant="outline-primary"
                onClick={() => {
                  dispatch(closeRecipe());
                }}
              >
                Close Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FullRecipe;
