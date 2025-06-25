import React from "react";
import "./Hiring.css";
import Footer from "./Footer";
 
function Hiring() {
  return (
    <div className="hiring-page">

      {/* Title Section */}
      <section className="newsevents-title-wrapper">
        <div className="newsevents-title-card">
          <h1>We Are Hiring!</h1>
        </div>
      </section>

      {/* Requirements */}
      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>7+ years of coaching at international level</li>
          <li>Exposure to coaching students across the world</li>
          <li>Superior knowledge of badminton coaching and fitness</li>
          <li>Planning coaching sessions and creating training plan</li>
          <li>Travel with students for tournaments</li>
        </ul>
      </section>

      {/* Leave a Reply */}
      <section className="reply-section">
        <div className="reply-card">
          <h2>Leave A Reply</h2>
          <p>Your email address will not be published. Required fields are marked *</p>
          <form>
            <div className="row">
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
            </div>
            <input type="text" placeholder="Enter Website" />
            <textarea placeholder="Enter Your Comment" rows="5" required></textarea>
            <button type="submit">Post Comment →</button>
          </form>
        </div>
        <Footer/>
      </section>

    </div>
  );
}

export default Hiring;


