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
            <CardContainer>
              <h5>{props.title}</h5>
              <p>{props.description}</p>
              <ul>
                {props.ingredients.split("\n").map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
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
            </CardContainer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FullRecipe;
