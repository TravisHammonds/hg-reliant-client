import React from "react";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import "../styles/Home.css"; // Custom CSS for home page styling

const Home = () => {
  // Homes array (you can fetch this from an API in a real-world scenario)
  const homesForSale = [
    {
      name: "Beautiful 3-Bedroom House",
      description:
        "Located in a serene neighborhood, fully renovated with modern amenities.",
      image: "path-to-house-image.jpg",
    },
    {
      name: "Charming 2-Bedroom Cottage",
      description:
        "Cozy and newly updated, perfect for small families or couples.",
      image: "path-to-house-image-2.jpg",
    },
  ];

  // Carousel data for "Our Work"
  const workItems = [
    {
      beforeImg: "assets/images/IMG_3904.png",
      afterImg: "assets/images/IMG_3905.png",
      description: "Before and After - Front View",
    },
    {
      beforeImg: "assets/images/IMG_3908.png",
      afterImg: "assets/images/IMG_3913.png",
      description: "Before and After - Kitchen Renovation",
    },
    // Add more work items as needed
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="text-center text-white py-5">
          <h1 className="main-header">Welcome to HG Reliant</h1>
          <p>Bringing new life to homes, one renovation at a time.</p>
        </Container>
      </div>

      {/* What We Do Section */}
      <section className="what-we-do-section py-5">
        <Container>
          <h2 className="text-center section-header mb-4">What We Do</h2>
          <p className="text-center mb-4">
            We specialize in helping homeowners who need to sell their
            properties quickly and easily, whether due to financial hardship,
            relocation, inheritance, or other lifestyle changes. We understand
            that selling a home during difficult times can be stressful, so we
            focus on making the process as smooth and hassle-free as possible.
            We buy homes "as-is," meaning you don't need to worry about making
            repairs or updates.
          </p>
          <p className="text-center mb-4">
            With our creative solutions and flexible approach, we ensure that
            you can move forward on your terms, with a fair offer and a closing
            timeline that works for you. Learn more about how we can help by
            visiting our process page.
          </p>
          <div className="text-center">
            <Button href="/our-process" className="cta-button">
              Learn More About Our Process
            </Button>
          </div>
        </Container>
      </section>

      {/* Homes for Sale Section */}
      <section className="homes-for-sale-section py-5">
        <Container>
          <h2 className="section-header text-center mb-4">Homes for Sale</h2>

          {/* Display a message if there are no homes */}
          {homesForSale.length === 0 ? (
            <p className="text-center mb-4">
              There are currently no homes for sale. If you know anyone looking
              to sell, please contact us!
            </p>
          ) : (
            <Row className="justify-content-center">
              {homesForSale.map((home, index) => (
                <Col md={4} key={index} className="mb-4">
                  <div className="home-card">
                    <img
                      src={home.image}
                      alt={home.name}
                      className="img-fluid"
                    />
                    <h4 className="mt-2 text-center">{home.name}</h4>
                    <p className="text-center">{home.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          )}

          {/* Button to view more homes for sale */}
          <div className="text-center mt-4">
            <Button href="/for-sale" className="cta-button">
              View All Homes for Sale
            </Button>
          </div>
        </Container>
      </section>

      {/* Our Work Carousel */}
      {/* <Container className="my-5">
        <h2 className="section-header text-center mb-4">Our Work</h2>
        <Carousel className="our-work-carousel">
          {workItems.map((work, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col xs={6}>
                  <img
                    src={work.beforeImg}
                    className="img-fluid carousel-img"
                    alt="Before renovation"
                  />
                </Col>
                <Col xs={6}>
                  <img
                    src={work.afterImg}
                    className="img-fluid carousel-img"
                    alt="After renovation"
                  />
                </Col>
              </Row>
              <Carousel.Caption>
                <p>{work.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container> */}

      {/* Footer */}
      <footer className="footer-section">
        <Container className="text-white py-4">
          <Row className="justify-content-center text-center">
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                Email:{" "}
                <a
                  href="mailto:travishammonds2@gmail.com"
                  className="text-white"
                >
                  travishammonds2@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+17178254004" className="text-white">
                  (717) 825-4004
                </a>
              </p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <p>
                <a href="#" className="text-white">
                  Facebook
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Instagram
                </a>
              </p>
            </Col>
            <Col md={4}>
              <h5>Location</h5>
              <p>Elizabethtown, PA</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
