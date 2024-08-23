import React, { useState } from "react";
import SkillData from "../../assert/skillData";
import SkillCard from "./SkillCard";
import SkillInfo from "./SkillInfo";
import "./skillPage.css";

const SkillPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(SkillData[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skillPageContainer">
      <h2>Technical Proficiency</h2>
      <div className="skillsContent">
        <div className="skills">
          {SkillData.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skillsInfo">
          <SkillInfo
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
