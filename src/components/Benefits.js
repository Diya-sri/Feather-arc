import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefit-box">
          <img src="https://cdn-icons-png.flaticon.com/512/1048/1048918.png" alt="Physical Wellness" />
          <h3>Physical Wellness</h3>
          <p>
            Regular play improves stamina, coordination, and muscle strength.
            Badminton is an engaging way to burn calories and build endurance,
            helping players stay fit and energized.
          </p>
        </div>
        <div className="benefit-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2966/2966483.png" alt="Mental Strength" />
          <h3>Mental Strength</h3>
          <p>
            Engaging in sports like badminton enhances focus, reduces stress,
            and uplifts mood. It encourages a healthy mind through teamwork,
            discipline, and consistent practice.
          </p>
        </div>
        <div className="benefit-box">
          <img src="https://cdn-icons-png.flaticon.com/512/9275/9275151.png" alt="Modern Courts" />
          <h3>Modern Facilities</h3>
          <p>
            Our training spaces are equipped with professional-grade courts
            and amenities, offering a quality environment for players to
            practice, learn, and compete with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
