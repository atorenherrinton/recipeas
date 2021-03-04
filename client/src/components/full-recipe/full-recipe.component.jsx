/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeRecipe } from "../../slices/recipe.slice";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import DropdownButton from "../dropdown/dropdown.component";
import Ingredient from "../ingredient/ingredient.component";

const FullRecipe = (props) => {
  const dispatch = useDispatch();

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
                <Table hover size="sm">
                  <thead>
                    <th>Ingredients</th>
                  </thead>
                  <tbody>
                    {props.ingredients.map((ingredient, idx) => (
                      <Ingredient key={idx} ingredient={ingredient} />
                    ))}
                  </tbody>
                </Table>
              ) : null}
              <Table striped size="sm">
                <thead>
                  <th>Directions</th>
                </thead>
                <tbody>
                  {props.directions.split("\n").map((step, idx) => (
                    <tr>
                      <td key={idx}>{step}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

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
