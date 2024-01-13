import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  console.log(repo);
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgba(83,155,53,0.2)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: "#000" }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: "#343434", }}>
            {repo?.description?.length > 250 ? repo.description?.substring(0,250) + "..." : repo?.description}
          </p>
          <div className="flexDiv" style={{position:'relative',top:"70px" }}>
            <div className="repo-details Leftitem">
              <ProjectLanguages logos={repo.languages} />
            </div>
           
          </div>
        </div>
      </Fade>
    </div>
  );
}
