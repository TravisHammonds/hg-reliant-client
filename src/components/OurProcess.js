import React from 'react';
import { Container } from 'react-bootstrap';

const OurProcess = () => {
  return (
    <Container>
      <h2 className="my-4">Our Process</h2>
      <ol>
        <li><strong>Purchase:</strong> We acquire homes with great potential.</li>
        <li><strong>Renovation:</strong> We renovate to add modern features while preserving character.</li>
        <li><strong>Sale:</strong> The homes are listed for sale, fully renovated and ready for new owners.</li>
      </ol>
    </Container>
  );
};

export default OurProcess;
