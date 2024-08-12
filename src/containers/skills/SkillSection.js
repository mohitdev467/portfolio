import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import ReactNativeImg from "./ReactNativeImg";
import { themes } from "../../theme";
// import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg  />;
  else if (props.fileName === "ReactNative")
    return <ReactNativeImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

function SkillSection() {
  const theme = themes;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>

              <div className="skills-text-div">
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                  <SoftwareSkill logos={skill.softwareSkills} />
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <ul>
                        <li
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </li>
                        </ul>
                      );
                    })}
                  </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                  <SoftwareSkill logos={skill.softwareSkills} />
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <ul>
                        <li
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </li>
                        </ul>
                      );
                    })}
                  </div>
              </div>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
