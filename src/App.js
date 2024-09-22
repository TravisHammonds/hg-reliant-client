import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PropertiesForSale from './components/PropertiesForSale';
import FlippedHomes from './components/FlippedHomes';
import OurProcess from './components/OurProcess';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">House Flipping Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/properties-for-sale">Homes for Sale</Nav.Link>
            <Nav.Link href="/flipped-homes">Flipped Homes</Nav.Link>
            <Nav.Link href="/our-process">Our Process</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/properties-for-sale" component={PropertiesForSale} />
        <Route path="/flipped-homes" component={FlippedHomes} />
        <Route path="/our-process" component={OurProcess} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactForm} />
      </Switch>
    </Router>
  );
};

export default App;
