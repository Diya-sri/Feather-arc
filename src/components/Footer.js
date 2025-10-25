import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Information</h3>
          <hr />
          <p><FaMapMarkerAlt /> Feather Arc Badminton Academy</p>
          <p>Feather Arc Badminton Academy  
#21, Greenfield Sports Complex,  
Lakeview Road, Sector 7,  
Hyderabad, Telangana 500082  
</p>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <hr />
          <p>Overview</p>
          <p>Founder</p>
          <p>Team</p>
          <p>Achievements</p>
          <p>Coaching</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <hr />
          <p>Facilities</p>
          <p>Gallery</p>
          <p>Testimonials</p>
          <p>News & Events</p>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <hr />
          <p><FaPhoneAlt /> +91 80012 34567</p>
          <p><FaEnvelope /> featherarc@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Feather Arc Academy | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
