/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { closeRecipe } from "../../slices/recipe.slice";
import { CardContainer, ImageContainer } from "./full-recipe.styles";
import ImageCarousel from "../image-carousel/image-carousel.component";
import { Card } from "react-bootstrap";

const FullRecipe = (props) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={8}>
          <Card>
            <ImageCarousel image={props.imageUrl} />
            <Card.Body>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
              <h5>Ingredients</h5>
              <ul>
                {props.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <h5>Directions</h5>
              {props.directions.split("\n").map((step) => (
                <p key={step}>{step}</p>
              ))}
              <Button
                onClick={() => {
                  dispatch(closeRecipe());
                }}
                variant="outline-secondary"
                block
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
