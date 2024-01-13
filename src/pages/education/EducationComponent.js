import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { themes } from "../../theme";

function Education() {
  const theme = themes;
  return (
    <div className="education-main">
      <Header  />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" >
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                My Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in hackathons and other tech-related
                activities. Below are some of my major certifications.
              </p>
            </div>
          </div>
        </Fade>
        <Educations  />
        <Certifications  />
      </div>
      <Footer  />
    </div>
  );
}

export default Education;
