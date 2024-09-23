import React from "react";
import { Container, Image } from "react-bootstrap";
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

      {/* Travis Section (Left Aligned) */}
      <div className="d-flex text-white flex-column align-items-start mb-5 profile-section-left">
        <Image
          src="travis-hammonds.jpg"
          roundedCircle
          width="150"
          height="150"
          className="mb-3"
          alt="Travis Hammonds"
        />
        <strong>Travis Hammonds</strong>
        <p className="text-white" style={{ maxWidth: "75%" }}>
          Travis is a software engineer with a passion for real estate
          investing. Since high school, he has been learning and working in the
          field of real estate, specializing in client interaction and
          problem-solving. His role is to connect with potential clients and
          partners, ensuring the success of every deal.
        </p>
      </div>

      {/* Addison Section (Right Aligned) */}
      <div className="d-flex text-white flex-column align-items-end profile-section-right">
        <Image
          src="addison-good.jpg"
          roundedCircle
          width="150"
          height="150"
          className="mb-3"
          alt="Addison Good"
        />
        <strong>Addison Good</strong>
        <p className="text-white" style={{ maxWidth: "75%", textAlign: "right" }}>
          Addison is the Project Manager, responsible for overseeing the
          renovation process. With a lifetime of experience in project
          management, Addison handles everything from creating scopes of work to
          working with suppliers and subcontractors. He is also a co-owner of
          Hammer Down Industries, a family business where he developed his
          expertise.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
