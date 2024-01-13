import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";
import { themes } from "../../theme";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = themes;

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: " 50%",
    padding: "10px",
    border: `1px solid #0094DA`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px #0094DA`,
    
    transition: "all 0.2s ease-in-out",
   
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid #0094DA`,
    borderLeft: `1px solid #0094DA`,
    borderRight: `1px solid #0094DA`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px #0094DA`,
    transition: "all 0.2s ease-in-out",
   
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `linear-gradient(to right, #0094DA, #379993, #539B35);`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    
  });

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div {...style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(80%,80%)",
              position:"relative",
              bottom:"10px",
              padding: "29px 0px 30px 0px"

                          }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundImage: `linear-gradient(to right, #0094DA, #379993, #539B35)` }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#fff" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#fff" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {degree.descriptions.map((sentence) => {
              return (
                <p className="content-list" >
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: "#E3405F",
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
