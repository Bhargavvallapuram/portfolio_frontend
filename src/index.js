import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from './Header';
import Footer from './footer';
import Home from './Home';
import Project from './Project';
import Certificate from './Certificate';
import About from './About';
import ContactMe from './ContactMe';
import Services from './Services';

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
          </Routes>
        </main>
        <Footer />
      </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
