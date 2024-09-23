import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/ContactForm.css"; // Custom CSS for the Contact Form page

function ContactForm() {
  const [state, handleSubmit] = useForm("xqazvdrv");

  if (state.succeeded) {
    return (
      <p className="text-center mt-4">Thank you! Your message has been sent.</p>
    );
  }

  return (
    <Container className="contact-form-container">
      <h2 className="text-center my-4">Contact Us</h2>

      {/* Descriptive Text */}
      <p className="text-center mb-5">
        We strongly encourage you to reach out to us with any questions or
        opportunities. Our team is known for providing creative solutions to
        complex problems, and we’re here to help. Whether you have a property to
        sell, need advice on renovation projects, or simply want to discuss
        potential collaborations, we’d love to hear from you. You can contact us
        via email, fill out the contact form below, or give us a call. We’re
        ready to assist you in any way we can.
      </p>

      {/* Formspree form */}
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            id="address"
            type="text"
            name="address"
            placeholder="Enter your address"
          />
          <ValidationError
            prefix="Address"
            field="address"
            errors={state.errors}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={state.submitting}
          className="submit-button mt-3"
        >
          Submit
        </Button>
      </Form>

      <div className="text-center mt-4 contact-info">
        <p>
          Email:{" "}
          <a href="mailto:travishammonds2@gmail.com">
            travishammonds2@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">(123) 456-7890</a>
        </p>
      </div>
    </Container>
  );
}

export default ContactForm;
