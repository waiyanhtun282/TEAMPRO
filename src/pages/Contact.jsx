import React from "react";
import Hero from "../components/Contact/Hero";
import ContactForm from "../components/Contact/ContactForm";
import Nav from "../components/Navbar/Nav";
import Foot from "../components/Footer/Foot";

const Contact = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <ContactForm/>
      <Foot/>
    </>
  );
};

export default Contact;
