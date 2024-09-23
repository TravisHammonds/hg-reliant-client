import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PropertiesForSale from "./components/PropertiesForSale";
import FlippedHomes from "./components/FlippedHomes";
import OurProcess from "./components/OurProcess";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties-for-sale" element={<PropertiesForSale />} />
        <Route path="/flipped-homes" element={<FlippedHomes />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
