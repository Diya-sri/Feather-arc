import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div className="about-dropdown">
      <button className="about-toggle">About ▾</button>
      <ul className="dropdown-menu">
        <li><a href="#overview">– Overview</a></li>
        <li><a href="#founder">Founder</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#achievers">Achievers</a></li>
        <li><a href="#coaching">Coaching</a></li>
      </ul>
    </div>
  );
};

export default AboutUsSection;
