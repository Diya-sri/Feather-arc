// src/components/Achievers.js
import React from 'react';
import './Founder.css'; // ✅ Reusing founder styles

import Footer from './Footer';
import heroImage from '../assets/about-hero.png';

const Achievers = () => {
  return (
    <div className="overview-page">
      <section
        className="overview-hero" // ✅ Use same class for hero styling
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>Achievers</h1>
      </section>

      <div className="founder-content">
        <p>
          Our achievers have consistently brought pride to the academy through their determination,
          discipline, and outstanding performance at district, state, and national levels.
        </p>
      </div>

      <div className="founder-section-spacing">
        <Footer />
      </div>
    </div>
  );
};

export default Achievers;
