import React, { createRef } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import "../educationCard/EducationCard.scss";

export default function SoftwareSkill() {
  const imgRef = createRef();

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                {skills.fontAwesomeClassname && (
                  <div className="fontAwesomeContainer">
                    <img
                      crossOrigin={"anonymous"}
                      ref={imgRef}
                      className="fontAwesomeImage"
                      src={skills.fontAwesomeClassname}
                      alt={skills.fontAwesomeClassname}
                    />
                  </div>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}