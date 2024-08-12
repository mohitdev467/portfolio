import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import { themes } from "../../theme.js";

function Educations(props) {
  const theme = themes;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degree Received
          </h1>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
