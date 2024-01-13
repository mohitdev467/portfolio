import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import { themes } from "../../theme.js";
import { NavLink } from "react-router-dom";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <Fade>
      <div className="footer-div">
        <div class="copyright-area">
            <div class="footer-container">
              <div>
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2024, All Right Reserved{" "}
                  </p>
                </div>
              </div>
              {/* <div class="footer-menu">
                <ul>
                  <li className="home-a">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="educ-a">
                    <NavLink to="/education">Education</NavLink>
                  </li>
                  <li className="expe-a">
                    <NavLink to="/experience">Experience</NavLink>
                  </li>
                  <li className="proje-a">
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li className="contact-a">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
