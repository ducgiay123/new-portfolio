import React from "react";
import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import frontImage from "../assert/background.png";
import Typewriter from "typewriter-effect";
import "./home.css";
const Home = () => {
  return (
    <div className="frontImage" id="home">
      <div className="mask">
        <img className="into-img" src={frontImage} alt="IntoImg" />
      </div>
      <div className="homeContent">
        <Typewriter
          options={{
            strings: ["Hello, Adam here!", "Welcomes to my universe!"],
            autoStart: true,
            pauseFor: 5000,
            cursor: "_",
            loop: true,
          }}
        />
        <h1 className="flipInY">Full-Stack developer</h1>
        <Button
          className="transparentButton"
          variant="contained"
          color="secondary"
        >
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
          >
            View my work
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
