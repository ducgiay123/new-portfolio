import React from "react";
import "./skillInfo.css";

const SkillInfo = ({ heading, skills }) => {
  return (
    <div className="skillInfoCard">
      <h3>{heading}</h3>
      <div className="skillInfoContent">
        {skills.map((item, index) => (
          <React.Fragment key={`skill${index}`}>
            <div className="skillInfo">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skillProgressBg">
              <div
                className="skillProgress"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillInfo;
