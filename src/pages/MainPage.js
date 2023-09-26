import React from "react";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const MainPage = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
