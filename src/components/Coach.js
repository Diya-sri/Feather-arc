import React from "react";
import "./Coach.css"; // ✅ updated

const Coach = () => {
  return (
    <section className="coaching-section">
      <div className="coaching-container">
        <div className="text-block">
          <h2>Why Choose Our Training?</h2>
          <ul>
            <li>🎯 Personalized training tailored to every skill level</li>
            <li>🧒👵 Open to all ages — from children to seniors</li>
            <li>🎓 Certified coaches with professional experience</li>
            <li>🌍 Exposure to national and international tournaments</li>
            <li>📈 Progress tracking from beginner to champion</li>
            <li>🏅 Achievement-based rewards and recognition</li>
            <li>💖 Fun, engaging, and player-first environment</li>
            <li>🛡️ High safety standards with expert supervision</li>
          </ul>
        </div>
        <div className="image-block">
          <img 
            src="https://padukoneschoolofbadminton.com/cdn/shop/files/IMG_20240918_173801_1.jpg?v=1727157911&width=3840" 
            alt="Badminton Coaching Session"
            className="coaching-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Coach; // ✅ updated export name
