import React from "react";
import "./embedGame.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import frontImage from "../assert/background.png";
import Game from "../assert/embeddedGame.mp4";
const EmbedGame = () => {
  return (
    <div classname="videoContainer">
      <Nav menuOff={true} />
      <div className="mask">
        <img className="into-img" src={frontImage} alt="IntoImg" />
      </div>
      <video className="video" controls width="840" height="480">
        <source src={Game} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Footer />
    </div>
  );
};

export default EmbedGame;
