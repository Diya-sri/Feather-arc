
import React from 'react';
import './Founder.css';

import Footer from './Footer';
import heroImage from '../assets/about-hero.png';

const Founder = () => {
  return (
     <div className="overview-page"> 
      <section
        className="overview-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>Founder</h1>
      </section>

      <div className="founder-content">
        <h2>Ms. Kavya Ramesh</h2>
        <p>
          Feather Arc Badminton Academy was founded by Ms. Kavya Ramesh, a passionate sports educator and former international badminton coach. Known for her sharp tactical mind and inspiring leadership, she created the academy in 2017 with a mission to empower young athletes through structured training and personal mentorship.
        </p>

        <p>
          Raised in a small town with limited access to professional coaching, Kavya’s early struggles inspired her to build an academy where talent is nurtured regardless of background. With over a decade of experience in coaching players at the junior national and sub-junior international level, she brings global exposure into grassroots development.
        </p>

        <p>
          Under her guidance, Feather Arc has become a place where discipline meets innovation—combining traditional drills with sports science, nutrition, and mental fitness. Her coaching philosophy focuses on developing not just players, but confident individuals ready to face the world both on and off the court.
        </p>

        <p>
          When not on the court, Kavya often conducts motivational workshops and community outreach programs to make sports accessible to rural youth. Her dream? To produce India’s next Olympic champion—one feather at a time.
        </p>
      </div>

      <div className="overview-section-spacing">
        <Footer />
      </div>
    </div>
  );
};

export default Founder;
