import React from "react";
import Ava from "../assert/avar.jpg";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
import "./about.css";
import Resume from "../assert/TrungCV.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const About = () => {
  const buttonStyle = {
    backgroundColor: "#1f374d",
    width: "48%",
    fontSize: "100%",
    color: "#f7ffe9",
  };

  const gitHub = "https://github.com/ducgiay123";
  const fb = "https://www.facebook.com/duc.giay1999";
  const linkedin = "https://www.linkedin.com/in/trung-vu-80b830221/";

  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="aboutContainer" id="about">
      <img src={Ava} alt="" className="ava" />
      <div className="content">
        <div className="aboutContainerRight">
          <h1 class="aboutTitle">Duc Trung (Adam)</h1>
          <h2 class="aboutTitle">
            Software Developer & Embedded System Developer
          </h2>
          {/* <h2 class="aboutTitle">r</h2> */}
          {/* <br /> */}
          <div className="selfIntroduction">
            <h4>
              I gratuated recently from VAMK(Vaasa of Applied Science). I am
              majoring in Embedded Systems. I am driven student leveraging
              studies in Embedded System who seeks real-world experience as
              Embedded System Developer.
            </h4>
            <h4>
              I am currently working at University of Vaasa as Researcher
              Assistant in severals projects.I developed VR construction
              training simulation for the projects. Moreover, I am still
              improving myself by widing my area to full-stack developer to be
              my second career.
            </h4>
            <h4>
              I am interested in many fields and my passion is to be the guy who
              loves to sovle problems. Ahhh! One more thing ... I do really
              enjoy chatting about stuffs so don't hesitate to contact me here.
            </h4>
          </div>
          <br />
          <div className="iconContainer">
            <GitHubIcon
              // style={{ color: "white" }}
              className="iconItem"
              fontSize="large"
              onClick={() => handleClick(gitHub)}
            />
            <LinkedInIcon
              // style={{ color: "white" }}
              className="iconItem"
              fontSize="large"
              onClick={() => handleClick(linkedin)}
            />
            <FacebookIcon
              className="iconItem"
              fontSize="large"
              // style={{ color: "white" }}
              onClick={() => handleClick(fb)}
            />
          </div>
          <br />
          <div className="buttonContainer">
            <Button
              style={buttonStyle}
              variant="contained"
              className="gridItem"
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={2500}
                Hire
                Me
              >
                Hire Me
              </ScrollLink>
            </Button>
            <Button
              href={Resume}
              download="Resume"
              variant="contained"
              className="gridItem"
              style={buttonStyle}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
