import React from 'react';
import './App.css';

import Header from './components/Header';
import QuoteBanner from './components/QuoteBanner';
import Mission from './components/Mission';
import AcademyIntro from './components/AcademyIntro';
import Benefits from './components/Benefits';
import HomeContact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import { Routes, Route, useLocation } from 'react-router-dom';
import Overview from './components/Overview';
import Founder from './components/Founder';
import Achievers from './components/Achievers';
import Coaching from './components/Coaching';
import Facilities from './components/Facilities';
import NewsEvents from './components/NewsEvents';
import Hiring from './components/Hiring';
import Details from './components/Details';
import Testimonials from './components/Testimonials';
import Call from './components/Call'; // ✅ new import




function App() {
  const location = useLocation();
  const isHomeExtraSection = location.pathname === '/';

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/founder" element={<Founder />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/achievers" element={<Achievers />} />
        <Route path="/about/coaches" element={<Coaching />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/news-and-events" element={<NewsEvents />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/details" element={<Details />} />
        <Route path="/testimonials" element={<Testimonials />} /> 
        <Route path="/call" element={<Call />} /> 

        

      </Routes>

      {isHomeExtraSection && (
        <>
          <QuoteBanner />
          <AcademyIntro />
          <Mission />
          <Benefits />
          
          <HomeContact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
