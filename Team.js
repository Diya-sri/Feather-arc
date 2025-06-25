// src/components/Team.js
import React from 'react';
import './Team.css';

import Footer from './Footer';
import heroImage from '../assets/about-hero.png'; // You can change this if needed

const Team = () => {
  return (
    <div className="overview-page">
      <section
        className="overview-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>Team</h1>
      </section>

      <div className="team-content">
        <h2>Our Core Team</h2>
        <p>
          Meet the driving force behind Feather Arc. Our team is a blend of experienced coaches,
          passionate trainers, and dedicated coordinators, all working together to build champions.
        </p>
      </div>

      <div className="team-section-spacing">
        <Footer />
      </div>
    </div>
  );
};

export default Team;
