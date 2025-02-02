import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = ({ onNavClick }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="portfolio-header">
      <div className="logo">My Portfolio</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setMenuActive(false)}>Projects</Link></li>
          <li><Link to="/certificates" onClick={() => setMenuActive(false)}>Certificates</Link></li>
          <li><Link to="/about" onClick={() => setMenuActive(false)}>About Me</Link></li>
          <li><Link to="/services" onClick={() => setMenuActive(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
