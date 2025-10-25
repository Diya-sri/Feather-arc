import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ image, date, month, category, title, description, link }) => {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={image} alt={title} />
        <div className="news-card-date">
          <span>{date}</span>
          <small>{month}</small>
        </div>
      </div>
      <div className="news-card-content">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="read-more-link">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
