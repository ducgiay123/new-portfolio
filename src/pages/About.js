import React from "react";
import Ava from "../assert/avar.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <img src={Ava} alt="" className="ava" />
      <div className="content">
        <div className="aboutContainerRight">
          <h1 class="aboutTitle">Duc Trung (Adam)</h1>
          <h2 class="aboutTitle">
            Front-end Developer & Embedded System Develope
          </h2>
          {/* <h2 class="aboutTitle">r</h2> */}
          <br />
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
              enjoy chatting about stuffs so don't hesitate to contact me here
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
