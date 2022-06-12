import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import HireMe from "../HireMe/HireMe";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Header />
      <HireMe />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
