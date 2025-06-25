import React from "react";
import "./AcademyIntro.css";

const AcademyIntro = () => {
  return (
    <section className="academy-section">
      <div className="academy-container">
        <div className="academy-image">
          <img
            src="https://img.freepik.com/premium-vector/badminton-player-sports-vector-design_968188-1643.jpg"
            alt="Feather Arc Player"
          />
          <div className="experience-box">
            <h3>7+</h3>
            <p>Years Of Experience</p>
          </div>
        </div>

        <div className="academy-content">
          <span className="highlight">BUILDING CHAMPIONS THROUGH PASSION AND PRECISION!</span>
          <h2>Feather Arc Badminton Academy</h2>
          <p>
            Feather Arc is a premier badminton academy that blends world-class coaching with a deep passion for the game. With over 7 years of experience, we’ve trained hundreds of players to improve their skill, stamina, and sportsmanship.
          </p>
          <p>
            Whether you're a complete beginner or aiming for competitive success, our programs are tailored to help you grow and succeed—on the court and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcademyIntro;
