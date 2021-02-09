/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ButtonGroupContainer, ButtonContainer } from "./recipe-form.styles";

const RecipeForm = (props) => (
  <Container>
    <Row className="justify-content-center">
      <Col md={10}>
        <Card>
          <Card.Header as="h5">New Recipe</Card.Header>
          <Card.Body>
            <Form
              onSubmit={props.handleSubmit}
              onReset={props.handleCancelForm}
            >
              <Form.Group>
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control
                  name="title"
                  value={props.title}
                  onChange={props.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tools</Form.Label>
                <Form.Control
                  name="tools"
                  value={props.tools}
                  onChange={props.handleChange}
                  as="textarea"
                  rows={2}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  name="ingredients"
                  value={props.ingredients}
                  onChange={props.handleChange}
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Directions</Form.Label>
                <Form.Control
                  name="directions"
                  value={props.directions}
                  onChange={props.handleChange}
                  as="textarea"
                  rows={8}
                />
              </Form.Group>
              <ButtonGroupContainer>
                <ButtonContainer>
                  <Button variant="secondary" type="reset">
                    Cancel
                  </Button>
                </ButtonContainer>
                <Button variant="primary" type="submit">
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

export default RecipeForm;
