/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { closeRecipe } from "../../slices/recipe.slice";
import { ImageContainer } from "./full-recipe.styles";
import ImageCarousel from "../image-carousel/image-carousel.component";

const FullRecipe = (props) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={8}>
          <ImageContainer>
            <ImageCarousel image={props.imageUrl} />
          </ImageContainer>
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
            variant="outline-primary"
            block
          >
            Close recipe
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FullRecipe;
