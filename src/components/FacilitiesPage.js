import React from 'react';
import './FacilitiesPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FacilitiesPage = () => {
  return (
    <>
      <Header />
      <section className="facilities-banner">
        <div className="banner-content">
          <h1>Facilities</h1>
          <p>Featherarc Academy LLP &gt; <span>Facilities</span></p>
        </div>
      </section>
      {/* Add your actual facilities sections below here */}
      <Footer />
    </>
  );
};

export default FacilitiesPage;
