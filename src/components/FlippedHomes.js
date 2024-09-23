import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const flippedHomes = [
  {
    id: 1,
    images: [
      { src: "before1.jpg", caption: "Before renovation - Front view" },
      { src: "after1.jpg", caption: "After renovation - Front view" },
    ],
    caption: "Front view of the house before and after renovation.",
  },
  {
    id: 2,
    images: [
      { src: "before2.jpg", caption: "Before renovation - Kitchen" },
      { src: "after2.jpg", caption: "After renovation - Kitchen" },
    ],
    caption: "Kitchen view before and after renovation.",
  },
];

const FlippedHomes = () => {
  return (
    <Container>
      <h2 className="text-center my-4">Our Gallery</h2>

      {/* Descriptive Text */}
      <p className="text-center mb-5">
        At our company, we take great pride in transforming outdated properties
        into modern, livable homes. Each project reflects our passion for
        design, attention to detail, and commitment to quality. Below, you'll
        see a collection of some of the homes we've had the pleasure of
        renovating. These homes showcase the care we put into every flip, from
        preserving the character of each property to upgrading its features for
        modern living. We hope these examples inspire confidence in the work we
        do.
      </p>

      <Row>
        {flippedHomes.map((home) => (
          <Col key={home.id} md={6} className="mb-4">
            <Card>
              <Row noGutters>
                <Col xs={6}>
                  <Card.Img src={home.images[0].src} />
                </Col>
                <Col xs={6}>
                  <Card.Img src={home.images[1].src} />
                </Col>
              </Row>
              <Card.Body>
                <Card.Text className="text-center">{home.caption}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlippedHomes;
