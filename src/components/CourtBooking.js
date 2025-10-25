// src/components/CourtBooking.js
import React from 'react';
import './CourtBooking.css';

const CourtBooking = () => {
  return (
    <section className="court-booking">
      <div className="court-content">
        <h2>Court Booking:</h2>
        <ul>
          <li><strong>Easy Booking</strong> – Reserve courts instantly via our app or website, with real-time availability.</li>
          <li><strong>Refreshments</strong> – Enjoy cool beverages and quick snacks before or after your game.</li>
          <li><strong>Health Benefits</strong> – Burn calories, improve stamina, and maintain an active lifestyle.</li>
          <li><strong>Social Events</strong> – Join tournaments and community matches to meet fellow players.</li>
          <li><strong>Flexible Slots</strong> – Morning, afternoon, or evening—choose time slots that suit you best.</li>
        </ul>
        <button className="book-btn">
          BOOK NOW <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default CourtBooking;
