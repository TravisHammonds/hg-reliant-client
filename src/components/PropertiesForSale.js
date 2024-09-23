import React from 'react';
import { Card, Row, Col, Container, Alert } from 'react-bootstrap';

const properties = [];  // This is your empty array for now

const PropertiesForSale = () => {
  return (
    <Container>
      <h2 className="my-4">Homes for Sale</h2>
      {properties.length === 0 ? (
        <Alert variant="info">
          <h4>No Properties for Sale at the Moment</h4>
          <p>
            We currently do not have any homes for sale. However, if you know anyone interested in selling their home,
            please <a href="/contact-us">reach out to us</a> immediately. We would love to discuss potential opportunities!
          </p>
        </Alert>
      ) : (
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
      )}
    </Container>
  );
};

export default PropertiesForSale;
