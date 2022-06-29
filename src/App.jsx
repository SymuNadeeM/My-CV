import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contect/Contect";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
