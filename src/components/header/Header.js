import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { style } from "glamor";

function Header() {
  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7CD1F7",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${"#F7D774"}`,
    },
  });

  const icon = <CgSun strokeWidth={1} size={20} color="#F9D784" />;

  return (
    <div>
      <header className="header">
        <NavLink to={"/portfolio"} tag={Link} className="logo">
          <span></span>
          <span className="logo-name-parent">
            <span className="logo-name">{greeting.logo_name}</span>
            <span className="logo-name-2">{greeting.logo_name2}</span>
          </span>
          <span></span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              className="homei"
              to="/home"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5 }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ec"
              to="/education"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5 }}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              className="xp"
              to="/experience"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5 }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="projects"
              to="/projects"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5 }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cr"
              to="/contact"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5 }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
