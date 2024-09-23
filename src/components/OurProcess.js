import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/OurProcess.css";
const OurProcess = () => {
  return (
    <Container>
      <h2 className="text-center my-4">Our Home Buying Process</h2>

      {/* Descriptive Text */}
      <p className="text-center mb-5">
        We understand that selling a home can be a stressful process, especially
        when you're going through a difficult time. Whether you're facing
        financial hardship, a lifestyle change, or just need to sell quickly,
        we’re here to help. Our process is simple, transparent, and designed to
        meet your needs.
      </p>

      {/* Process Timeline */}
      <div className="timeline">
        {/* Step 1 */}
        <div className="timeline-item left">
          <h4>1. Initial Consultation</h4>
          <p>
            The first step is an open, no-obligation conversation. We’ll listen
            to your unique situation and discuss your goals for selling your
            home. Whether you’re facing foreclosure, dealing with divorce,
            relocating, or managing an inherited property, we’ll find a solution
            that works for you.
          </p>
        </div>

        {/* Arrow */}
        <div className="timeline-arrow" />

        {/* Step 2 */}
        <div className="timeline-item right">
          <h4>2. Property Evaluation</h4>
          <p>
            After our initial conversation, we’ll take a closer look at your
            property. You don’t need to worry about making repairs or updates.
            We buy homes "as-is," so there’s no need for costly improvements.
            Our focus is on finding the true value of your property, considering
            its condition, location, and market potential.
          </p>
        </div>

        {/* Arrow */}
        <div className="timeline-arrow" />

        {/* Step 3 */}
        <div className="timeline-item left">
          <h4>3. Offer Presentation</h4>
          <p>
            Once we've evaluated your home, we’ll present you with a fair,
            no-obligation cash offer. Our offers are based on market data,
            comparable sales, and the condition of your home. We pride ourselves
            on providing honest, transparent offers that are designed to help
            you move forward quickly and stress-free.
          </p>
        </div>

        {/* Arrow */}
        <div className="timeline-arrow" />

        {/* Step 4 */}
        <div className="timeline-item right">
          <h4>4. Creative Solutions</h4>
          <p>
            We understand that every situation is different, so we offer
            creative solutions that meet your specific needs. Whether you need
            time to find a new place, require assistance with moving, or want
            flexibility in closing dates, we’ll work with you to make the
            transition as smooth as possible.
          </p>
        </div>

        {/* Arrow */}
        <div className="timeline-arrow" />

        {/* Step 5 */}
        <div className="timeline-item left">
          <h4>5. Fast and Hassle-Free Closing</h4>
          <p>
            Once you accept our offer, we can move quickly. We handle all the
            paperwork and legal requirements, ensuring that the sale is
            completed as smoothly and efficiently as possible. Our goal is to
            close in as little as two weeks, but we can adjust the timeline
            based on your needs.
          </p>
        </div>

        {/* Arrow */}
        <div className="timeline-arrow" />

        {/* Step 6 */}
        <div className="timeline-item right">
          <h4>6. Move On, Stress-Free</h4>
          <p>
            After closing, you're free to move on with peace of mind. Whether
            you’re looking for a fresh start or simply need to reduce the burden
            of homeownership, we’re here to help. We’re not just buyers, we’re
            partners in making sure you get the best outcome for your situation.
          </p>
        </div>
      </div>

      <div className="why-work-with-us">
        <h4>Why Work with Us?</h4>
        <p>
          At our core, we’re problem solvers. We offer more than just a quick
          sale—we offer peace of mind during a difficult time. Our experience in
          real estate investing allows us to provide flexible options, fair cash
          offers, and a process tailored to your unique needs. When you work
          with us, you’re working with a team that values transparency,
          compassion, and results.
        </p>
      </div>
    </Container>
  );
};

export default OurProcess;
