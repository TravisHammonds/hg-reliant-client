import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/AboutUs.css"; // Custom CSS for About Us page

const AboutUs = () => {
  return (
    <Container>
      <h2 className="text-center my-4">About Us</h2>

      {/* Descriptive Text */}
      <p className="text-center mb-5">
        Our team brings together years of experience in both real estate
        investing and project management. We are passionate about transforming
        homes and solving problems for our clients. Meet the people who make it
        all happen:
      </p>

      {/* Travis Section (Image Left, Text Right) */}
      <Row className="align-items-center mb-5 profile-section-left">
        <Col md={3}>
          <Image
            src="/assets/images/addison.png"
            className="profile-image"
            alt="Addison Good"
          />
        </Col>
        <Col md={9}>
          <strong className="text-white">Addison Good</strong>
          <p className="text-white" style={{ maxWidth: "90%" }}>
            Addison is the Project Manager, responsible for overseeing the
            renovation process. With a lifetime of experience in project
            management, Addison handles everything from creating scopes of work
            to working with suppliers and subcontractors. He is also a co-owner
            of Hammer Down Industries, a family business where he developed his
            expertise.
          </p>
        </Col>
      </Row>

      {/* Addison Section (Image Right, Text Left) */}
      <Row className="align-items-center profile-section-right">
        <Col md={9}>
          <strong className="text-white d-flex justify-content-end">
            Travis Hammonds
          </strong>
          <p
            className="text-white d-flex justify-content-end"
            style={{ maxWidth: "100%", textAlign: "right" }}
          >
            Travis is a software engineer with a passion for real estate
            investing. Since high school, he has been learning and working in
            the field of real estate, specializing in client interaction and
            problem-solving. His role is to connect with potential clients and
            partners, ensuring the success of every deal.
          </p>
        </Col>
        <Col md={3}>
          <Image
            src="assets/images/hammonds-headshot.jpg"
            className="profile-image"
            alt="Travis Hammonds"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
