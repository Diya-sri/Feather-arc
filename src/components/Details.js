import React from "react";
import "./Details.css";
import imageBg from "../assets/image-bg.jpeg";
import Footer from "./Footer";

const Details = () => {
  return (
    <div>
      <div className="details-wrapper">
        <div className="main-and-sidebar">
          <div className="main-content">
 <div className="details-heading-container">
  <h1 className="details-heading">Feather Arc Academy</h1>
</div>

  <img src={imageBg} alt="Badminton" className="main-image" />


            <div className="post-info">
              <span>📅 March 23, 2024</span>
              <span>🏷️ News And Events</span>
            </div>

            <p className="description">
              We Feather Arc Academy are a team of Badminton enthusiasts having
              immense knowledge and experience in the field of badminton. In its
              short history, the academy has produced multiple National and
              State level players and is renowned around Bengaluru for producing
              and nurturing genuine badminton talent.
            </p>

            <div className="comment-section">
              <h2>Leave A Reply</h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form className="comment-form">
                <div className="row">
                  <input type="text" placeholder="Enter Name" required />
                  <input type="email" placeholder="Enter Email" required />
                </div>
                <input type="text" placeholder="Enter Website" />
                <textarea
                  placeholder="Enter Your Comment"
                  rows="5"
                  required
                ></textarea>
                <button type="submit">Post Comment</button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-box">
              <h3>Search</h3>
              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
              </div>
            </div>

            <div className="sidebar-box">
              <h3>Recent Posts</h3>
              <ul>
                <li>We Are Hiring!</li>
                <li>Shop Gallery</li>
                <li>Awards Gallery</li>
                <li>Academy Gallery</li>
                <li>Feather Arc Academy</li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Categories</h3>
              <ul>
                <li>
                  News And Events <span>(2)</span>
                </li>
                <li>
                  Photo Gallery <span>(3)</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Most Popular</h3>
              <div className="popular-post no-image">
                <span>📅 March 23, 2024</span>
                <p>Feather Arc Academy</p>
              </div>
              <div className="popular-post no-image">
                <span>📅 March 30, 2024</span>
                <p>Academy Gallery</p>
              </div>
              <div className="popular-post no-image">
                <span>📅 March 30, 2024</span>
                <p>Awards Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
