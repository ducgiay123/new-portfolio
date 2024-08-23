import React from "react";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import SkillPage from "./skillpage/SkillPage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const MainPage = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <SkillPage />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
