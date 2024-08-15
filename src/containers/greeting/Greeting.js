import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import { themes } from "../../theme";
import BannerImage from '../../assests/images/home-right.png'

export default function Greeting() {
  const history = useHistory();

  const styles = style({
    "background-image": "linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)",
    ":hover": {
      boxShadow: `0 5px 15px ${themes.accentBright}`,
    },
  });

  return (
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
            <h1 class="greeting-text animated animated-text">
                            <span className="mr-2 hey-im">Hey, I'm</span>
                                <div class="animated-info">
                                    <span class="animated-item">Mohit Lehri</span>
                                    <span class="animated-item">Frontend Developer</span>
                                    <span class="animated-item">ReactJS Developer</span>
                                </div>
                        </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: themes.secondaryText }}
              >
                {/* <span>I'm </span>
                <span style={{ color: themes.accentColor }}>
                  {greeting.full_name}.{" "}
                </span> */}
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
           <img src={BannerImage} alt="Banner-Image" />
          </div>
        </div>
      </div>
  );
}
