// src/components/Overview.js
import React from 'react';
import './Overview.css';

import Mission from './Mission';
import './AcademyIntro';
import Coach from './Coach';
import heroImage from '../assets/about-hero.png';
import AcademyIntro from './AcademyIntro';
import BadmintonKits from './BadmintonKits';
import CourtBooking from './CourtBooking';
import EventsAndShop from './EventsAndShop';
import Footer from './Footer';
const Overview = () => {
  return (
    <div className="overview-page"> 
      <section
        className="overview-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>About Us</h1>
      </section>
       <div className="overview-section-spacing">
        < AcademyIntro/>
</div>

      <div className="overview-section-spacing">
        <Mission />
      </div>
       <div className="overview-section-spacing">
       <BadmintonKits/>
      </div>
  <div className="overview-section-spacing">
        <Coach />
      </div>
      <div className="overview-section-spacing">
       <CourtBooking/>
      </div>
      <div className="overview-section-spacing">
       <EventsAndShop/>
      </div>
      <div className="overview-section-spacing">
       <Footer/>
      </div>
    </div>
  );
};

export default Overview;
