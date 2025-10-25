import React from 'react';
import './About.css';
import mainImage from '../assets/feather-building.png'; // Rename as needed
import insetImage from '../assets/feather-indoor.png';  // Rename as needed

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={mainImage} alt="Feather Arc Academy" className="main-img" />
          <div className="experience-box">
            <h2>7+</h2>
            <p>Years<br />Of Professional<br />Badminton Training</p>
          </div>
          <img src={insetImage} alt="Indoor Court" className="inset-img" />
        </div>

        <div className="about-content">
          <span className="label">ABOUT FEATHER ARC</span>
          <h1>Elevating Excellence in Badminton Training</h1>
          <p>
            Feather Arc Badminton Academy was established in 2017 and is located in the heart of Chennai. Designed with excellence in mind, our facility includes advanced courts, fitness zones, and mentoring spaces all under one roof.
          </p>
          <p>
            Founded by passionate badminton professionals, our academy aims to nurture young talent and elevate their skills through structured programs and expert coaching.
          </p>
          <p>
            With over 7 years of experience, we’ve developed a proven training system that blends technical instruction, physical conditioning, and mental preparation.
          </p>
          <p>
            Our team of certified coaches and trainers are committed to delivering personalized attention and world-class guidance to each player who walks through our doors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
