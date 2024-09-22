import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const flippedHomes = [
  {
    id: 1,
    beforeImage: "before1.jpg",
    afterImage: "after1.jpg",
    description: "Complete renovation of a historic property."
  },
  // Add more flipped homes
];

const FlippedHomes = () => {
  return (
    <Container>
      <h2 className="my-4">Flipped Homes</h2>
      <Row>
        {flippedHomes.map((home) => (
          <Col key={home.id} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={home.beforeImage} />
              <Card.Body>
                <Card.Text>Before: {home.description}</Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={home.afterImage} />
              <Card.Body>
                <Card.Text>After: {home.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlippedHomes;
