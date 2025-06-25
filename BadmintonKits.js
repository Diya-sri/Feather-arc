import React from 'react';
import './BadmintonKits.css';
import kitsImage from '../assets/badminton-shop.jpg'; // Adjust path to your image
import kitsIcon from '../assets/kits-icon.png'; // Adjust path for your icon

const BadmintonKits = () => {
  return (
    <section className="badmintonkits-section">
      <div className="kits-container">
        {/* Left Side */}
        <div className="kits-text-block">
          <img src={kitsIcon} alt="Badminton Kits Icon" className="kits-icon" />
          <h2>Professional Badminton Equipment</h2>
<p>
  Our academy provides top-quality gear from trusted brands like Yonex and Victor. Whether you’re a beginner or an experienced player, we help you choose the perfect equipment tailored to your level and goals.
</p>
<p>
  Beyond just kits, we offer full support for every athlete — helping them prepare for school, state, and national tournaments. Our goal is to inspire every player to excel and achieve their full potential on the court.
</p>
        </div>

        {/* Right Side */}
        <div className="kits-image-block">
          <img src={kitsImage} alt="Badminton Kits Shop" className="kits-image" />
        </div>
      </div>
    </section>
  );
};

export default BadmintonKits;
