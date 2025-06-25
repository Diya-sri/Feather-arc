import React from 'react';
import './Coaching.css';

import Footer from './Footer';
import heroImage from '../assets/about-hero.png';
import badmintonImage from "../assets/badminton-hero.jpg";

const Coaching = () => {
  return (
    <div className="overview-page">
     
      <section
        className="overview-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>Training / Coaching</h1>
      </section>

      {/* Coaching content block */}
      <div className="coaching-content-block">
        <div className="coaching-text">
          <span className="coaching-tagline">ACTIVE MIND & ACTIVE BODY</span>
          <p>
            We prepare beginners, middle and expert level capability among the players. 
            We set up a preparation module for each player based on their individual capability. 
            We have all the necessary support and partnerships for children to participate in 
            inter-school, state, national and international Badminton tournaments which will propel 
            the children to grow to greater heights and bring accolades for themselves as well as the nation.
          </p>
        </div>
        <div className="coaching-image">
          <img src={badmintonImage} alt="Training session" />
        </div>
      </div>

      <div className="overview-section-spacing">
        <Footer />
      </div>
    </div>
  );
};

export default Coaching;
