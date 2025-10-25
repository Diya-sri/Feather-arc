import React from 'react';
import './EventsAndShop.css';

const EventsAndShop = () => {
  return (
    <section className="combined-section">
      <div className="info-box">
        <h2 className="section-heading">
          Events <span className="underline"></span>
        </h2>
        <ul className="info-list">
          <li><strong>Exciting Tournaments –</strong> Participate in open tournaments to showcase your skills.</li>
          <li><strong>Vibrant Community –</strong> Meet passionate players and expand your circle.</li>
          <li><strong>Challenging Matches –</strong> Compete and level up with every game.</li>
          <li><strong>Attractive Prizes –</strong> Win rewards and recognition.</li>
          <li><strong>Quick Registration –</strong> Sign up easily via our app or website.</li>
        </ul>
      </div>

      <div className="info-box">
        <h2 className="section-heading">
          Pro Shop <span className="underline"></span>
        </h2>
        <ul className="info-list">
          <li><strong>Top Brands –</strong> Shop from Yonex, Li-Ning, Victor and more.</li>
          <li><strong>Vast Selection –</strong> Rackets, shoes, and accessories under one roof.</li>
          <li><strong>Expert Advice –</strong> Get recommendations from our experienced staff.</li>
          <li><strong>100% Genuine –</strong> We guarantee original, quality-checked products.</li>
          <li><strong>Fast Stringing –</strong> Quick and reliable stringing service available.</li>
        </ul>
      </div>
    </section>
  );
};

export default EventsAndShop;

