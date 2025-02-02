import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Header from './Header';
import Footer from './footer';
import Home from './Home';
import Project from './Project';
import Certificate from './Certificate';
import About from './About';
import ContactMe from './ContactMe';
import Services from './Services';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
