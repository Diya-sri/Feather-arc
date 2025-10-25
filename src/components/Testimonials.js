import React from "react";
import "./Testimonials.css";
import Footer from './Footer';


const reviews = [
  {
    name: "Narain Arun Geetha",
    level: "State Level U-19",
    text: "Aspire is one of the best places to train for badminton. The facilities and coaching are top-notch and the environment is encouraging and comforting. Would definitely recommend for any level of badminton coaching.",
  },
  {
    name: "Madhuri",
    level: "Parent",
    text: "The place is very sophisticated with well-maintained courts. The trainers are friendly and professional. My child wouldn't want to miss her class at all. Recommend this place for beginner to advanced level training.",
  },
  {
    name: "Karthik",
    level: "Intermediate Player",
    text: "Amazing coaches and friendly environment. The progress I made here in just a few months is incredible. Best badminton academy!",
  },
  {
    name: "Priya",
    level: "Advanced Player",
    text: "Clean courts, great coaching, and good crowd. Highly recommend Aspirepro to all serious players looking to improve their game!",
  },
  {
    name: "Suresh",
    level: "Beginner",
    text: "Great coaching style for beginners. The trainers make sure everyone gets the attention they deserve. Loved every session so far!",
  },
];

function Testimonials() {
  return (
    <div >
    <section className="testimonial-section">
      <div className="title-card">
        <h1>Testimonials</h1>
      </div>

      <div className="testimonial-cards-container">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-text">"{review.text}"</p>
            <div className="testimonial-author">
              <strong>{review.name}</strong>
              <span>{review.level}</span>
            </div>
          </div>
        ))}
      </div>
     
    </section>
    <Footer/>
    </div>
  );
}

export default Testimonials;
