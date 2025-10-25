import React from "react";
import "./Call.css";
import Footer from './Footer';
import featherBuilding from '../assets/feather-building.png';


const Call = () => {
  return (
    <div>
      <section className="call-section">
        {/* Title Card */}
        <div className="call-title-card">
          <h1>Contact Us</h1>
        </div>

        {/* Image + Info Section */}
        <div className="call-container">
          <div className="call-image">
            <img src={featherBuilding} alt="Feather Arc Academy" />
          </div>

          <div className="call-info">
            <h2>Feather Arc Badminton Academy</h2>
            <p>#21, Greenfield Sports Complex,</p>
            <p>Lakeview Road, Sector 7, Hyderabad,</p>
            <p>Telangana 500082</p>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="call-map-section">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.186847688497!2d77.60840767507599!3d12.877278517089654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15007d25b18b%3A0x438b6f159d8592e7!2sAspirePro%20Badminton%20Academy!5e0!3m2!1sen!2sin!4v1719297253480!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Call;
