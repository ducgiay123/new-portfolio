import React from "react";
import "./nav.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Nav = (props) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", handleColor);
  const menu = props.menuOff || false;
  return (
    <div className={color ? "header header-bg" : "header"}>
      <RouterLink className="portpolio" to="/">
        <h1>Portfolio</h1>
      </RouterLink>
      <div className={!menu ? "menu" : "menu hidden"}>
        <ul className={click ? "navMenu" : "navMenu open"}>
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-300}
              duration={700}
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
            >
              Project
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={2500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div className="menuIcon" onClick={handleClick}>
        {click ? (
          <ListIcon fontSize={"large"} style={{ color: "white" }} />
        ) : (
          <CloseIcon fontSize={"large"} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
