import React from 'react';
import './Facilities.css';
import Footer from './Footer';

const Facilities = () => {
  return (
    <div className="overview-page">
      {/* Animated card-like title */}
      <section className="facilities-title-wrapper">
        <div className="facilities-title-card">
          <h1>Our Facilities</h1>
        </div>
      </section>

      <div className="facilities-content">
        <p>
          At Feather Arc, we are committed to providing world-class training spaces that meet international standards and foster high performance. Our facility is built not just for physical training but also for overall player development.
        </p>
      </div>

      <div className="facilities-grid">
        <div className="facility-card">
          <h3>🏸 Indoor Courts</h3>
          <p>5 synthetic badminton courts with anti-skid flooring and LED lighting, suitable for national-level play.</p>
        </div>
        <div className="facility-card">
          <h3>💪 Fitness Zone</h3>
          <p>Fully equipped gym area with cardio, strength training, and agility stations tailored for athletes.</p>
        </div>
        <div className="facility-card">
          <h3>📊 Video Analysis</h3>
          <p>Slow-mo replay analysis and coaching feedback systems to improve form and strategy.</p>
        </div>
        <div className="facility-card">
          <h3>🍎 Nutrition Support</h3>
          <p>Personalized meal plans and consults from certified sports nutritionists.</p>
        </div>
        <div className="facility-card">
          <h3>🧘 Recovery & Wellness</h3>
          <p>Yoga, massage therapy, foam rollers, and muscle relaxation space for recovery.</p>
        </div>
        <div className="facility-card">
          <h3>👟 Locker Rooms</h3>
          <p>Modern locker and shower facilities for comfort after intensive training.</p>
        </div>
      </div>

      <div className="overview-section-spacing">
        <Footer />
      </div>
    </div>
  );
};

export default Facilities;
