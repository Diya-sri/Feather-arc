import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <h4>REACH OUT</h4>
        <h2>Join Feather Arc and Elevate Your Game!</h2>
        <p>
         Train with expert coaches at Feather Arc Badminton Academy. Whether you're a beginner or a pro, we’ll help you level up your skills. Contact us to get started!
        </p>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email *" required />
        </div>
        <div className="form-row">
          <input type="tel" placeholder="Phone Number *" required />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea placeholder="Write your message here..."></textarea>
        <button type="submit">JOIN NOW</button>
      </form>

     
    </section>
  );
};

export default Contact;
