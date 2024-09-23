import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navbar.css"; // Custom CSS for the navbar styling

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-section navbar-dark">
      <Container>
        <Navbar.Brand href="/" className="brand-name">
          <span className="hg-name">HG</span>{" "}
          <span className="reliant-name">Reliant</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/our-process">Our Process</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/properties-for-sale">For Sale</Nav.Link>
            <Nav.Link href="/flipped-homes">Gallery</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
