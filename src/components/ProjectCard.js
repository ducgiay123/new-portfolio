import React, { useState } from "react";
import "./projectCard.css";
import cardData from "../assert/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProjectCard = () => {
  const [isSlide, setIsSlide] = useState(false);
  var settings = {
    infinite: true,
    arrows: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    variableWidth: true,
    beforeChange: () => {
      setIsSlide(true);
    },
    afterChange: () => {
      setIsSlide(false);
    },
  };
  const handleClick = (link) => {
    if (!isSlide) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="projectCard">
      <Slider {...settings}>
        {cardData.map((item, index) =>
          item.webLink !== "" ? (
            <div
              className="card"
              key={index}
              onClick={() => {
                handleClick(item.webLink);
              }}
            >
              <img className="cardImg" src={item.imgLink} alt="" />
              <div className="hiddenCard">
                <h4>{item.performType}</h4>
                <h4>{item.workType}</h4>
                <h1>{item.name}</h1>
                <h5>{item.debcriptions}</h5>
              </div>
            </div>
          ) : null
        )}
        {cardData.map((item, index) =>
          item.webLink !== "" ? (
            <div
              className="card"
              key={index}
              onClick={() => {
                handleClick(item.webLink);
              }}
            >
              <img className="cardImg" src={item.imgLink} alt="" />
              <div className="hiddenCard">
                <h4>{item.workType}</h4>
                <h1>{item.name}</h1>
                <h4>{item.performType}</h4>
              </div>
            </div>
          ) : (
            <div />
          )
        )}
      </Slider>
    </div>
  );
};

export default ProjectCard;
