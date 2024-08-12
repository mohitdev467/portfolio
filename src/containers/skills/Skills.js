import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { themes } from "../../theme";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
          <h1 className="skills-header" style={{ color: "#000" }}>
          Here’s my area of expertise
          </h1>
      </div>
      <SkillSection  />
    </div>
  );
}
