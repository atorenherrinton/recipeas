/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Row } from "react-bootstrap";
import {
  activateForm,
  activateUrl,
  deactivateUrl,
} from "../../slices/form.slice";

const GettingStarted = () => {
  const dispatch = useDispatch();
  return (
    <Row className="justify-content-center">
      <Col md={6}lg={4}>
        <Card style={{ marginTop: "6rem" }} className="text-center">
          <Card.Header>Getting Started</Card.Header>
          <Card.Body>
            <Card.Title style={{ marginBottom: "0.5rem" }}>
              Create New Recipe
            </Card.Title>
            <Card.Text style={{ marginBottom: "1.5rem" }}>
              Get started by creating a recipe
            </Card.Text>
            <Button
              variant="outline-primary"
              onClick={() => {
                dispatch(activateForm());
                dispatch(activateUrl());
              }}
              style={{ marginRight: "0.25rem", marginBottom: "1rem" }}
            >
              allrecipes.com
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => {
                dispatch(activateForm());
                dispatch(deactivateUrl());
              }}
              style={{ marginLeft: "0.25rem", marginBottom: "1rem" }}
            >
              from scratch
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default GettingStarted;
