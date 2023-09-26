import React from "react";
import "./projectCard.css";
import cardData from "../assert/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProjectCard = () => {
  var settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 0,
    initialSlide: 0,
    variableWidth: true,
  };
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="projectCard">
      <Slider {...settings}>
        {cardData.map((item, index) => (
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
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCard;
