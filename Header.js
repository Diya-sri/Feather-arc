import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-text">
          <h1>FEATHER ARC</h1>
          <p>BADMINTON ACADEMY</p>
        </div>
      </div>

      <div className="nav-icons-wrapper">
        <nav className="nav-links">
          <Link to="/">Home</Link>


          <div className="dropdown">
            <span className="dropdown-title" onClick={toggleDropdown}>
              About us ▾
            </span>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/about/overview">Overview</Link>
                <Link to="/about/founder">Founder</Link>
                <Link to="/about/team">Team</Link>
                <Link to="/about/achievers">Achievers</Link>
                <Link to="/about/coaches">Coaches</Link>
              </div>
            )}
          </div>

          <Link to="/news-and-events">News and Events</Link>
          <Link to="/facilities">Facilities</Link>
          {/* <Link to="/events">Events</Link> <-- removed */}
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/call">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
