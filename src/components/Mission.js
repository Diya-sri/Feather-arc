import React from "react";
import "./Mission.css";
import badmintonImage from "../assets/badminton-hero.jpg";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-image-wrapper">
          <div className="circle-decor shape-top-left"></div>
          <div className="circle-decor shape-bottom-right"></div>
          <div className="circle-image">
            <img src={badmintonImage} alt="Badminton Racket and Shuttle" />
          </div>
        </div>

        <div className="text-wrapper">
          <h2>Our Mission</h2>
          <p>
            To provide a world-class badminton experience for all through coaching,
            court booking, and events. We believe in the philosophy – <strong>‘An Active Mind, An Active Body’</strong> – 
            pursuing badminton helps our community stay active both mentally and physically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
