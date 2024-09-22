import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const properties = [
  {
    id: 1,
    title: "Charming 3-Bedroom House",
    price: "$250,000",
    image: "house1.jpg",
    description: "Beautiful renovated home with a spacious backyard."
  },
  // Add more properties as needed
];

const PropertiesForSale = () => {
  return (
    <Container>
      <h2 className="my-4">Homes for Sale</h2>
      <Row>
        {properties.map((property) => (
          <Col key={property.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.price}</Card.Text>
                <Card.Text>{property.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertiesForSale;
