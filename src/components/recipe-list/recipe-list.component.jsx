/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const RecipeList = (props) => (
    <Container>
      <Row className="justify-content-center">
      <Col md={10}>
        <Card>
          <Card.Header as="h5">Getting Starting</Card.Header>
          <Card.Body>
            <Card.Title>Add Your First Recipe</Card.Title>
            <Card.Text>
              Include a photo, required tools, ingredients, and directions.
            </Card.Text>
            <Form onSubmit={props.handleNewForm}>
              <Button variant="primary" type="submit">
                Create Recipe
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
);

export default RecipeList;
