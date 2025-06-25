import React from 'react';
import './NewsEvents.css';
import NewsCard from './NewsCard';
import Footer from './Footer';

const NewsEvents = () => {
  return (
    <div className="overview-page">
      <section className="newsevents-title-wrapper">
        <div className="newsevents-title-card">
          <h1>News and Events</h1>
        </div>
      </section>

      <div className="news-cards-wrapper">
        <NewsCard
          image="https://img.freepik.com/free-photo/badminton-concept-with-racket-shuttlecock_23-2149940925.jpg"
          date="10"
          month="Jun"
          category="News and Events"
          title="Join Our Coaching Team!"
          description="We are looking for experienced coaches with 7+ years at the international level. Help shape future champions with personalized training programs."
          link="/hiring" // ✅ Opens Hiring page
        />

        <NewsCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7bgkj7beEqlSeis8sIRMeKqPBQSbkgYmyg&s"
          date="28"
          month="Apr"
          category="News and Events"
          title="Feather Arc Badminton Academy"
          description="We are a dedicated team of badminton professionals committed to delivering excellence through top-tier coaching and a passion for the sport."
          link="/details" // ✅ Opens Details page
        />
      </div>

      <Footer />
    </div>
  );
};

export default NewsEvents;
