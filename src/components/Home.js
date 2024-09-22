import React from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap';

const Home = () => {
  return (
    <Jumbotron fluid className="bg-dark text-white text-center">
      <Container>
        <h1>Welcome to Our House Flipping Business</h1>
        <p>Bringing new life to homes, one renovation at a time.</p>
        <Button variant="primary" href="/properties-for-sale">View Homes for Sale</Button>
      </Container>
    </Jumbotron>
  );
};

export default Home;
