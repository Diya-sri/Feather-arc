import React from 'react';
import './QuoteBanner.css';

const QuoteBanner = () => {
  return (
   <section
  className="quote-banner"
  style={{
    backgroundImage: `url('https://tenniszon.com/cdn/shop/articles/Batminton_player_lunging_to_hit_shuttlecock_inside_court.png')`
  }}
>
  <div className="quote-overlay">
    <h1 className="quote-text">
      “Champions are made when no one is watching.”
    </h1>
  </div>
</section>

  );
};

export default QuoteBanner;
