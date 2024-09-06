import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { themes } from "../../theme.js";

function Experience(props) {
  const theme = themes;
  return (
    <div className="experience-main">
      <Header />
      <div className="basic-experience">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: "#343434" }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: "#343434", paddingBottom:'30px' }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: "#000" }}
              >
                I am a <span className="position-experience">Frontend Developer</span> and having{" "}
                <span className="position-experience">3 Year</span> of experience in Web Development, In
                these period of three years. I got the opportunity to strengthen
                my knowledge in web development, In
                addition, I am well-schooled in manual testing and debugging
                processes needed to enhance user experience and provide client
                satisfaction.{" "}
              </p>
            </div>
          </div>
      </div>
      <ExperienceAccordion sections={experience["sections"]} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
