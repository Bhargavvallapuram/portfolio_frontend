import React, { useState } from 'react';
import './styles.css';

const Header = () => {
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
          <li><a href="/" onClick={() => setMenuActive(false)}>Home</a></li>
          <li><a href="/projects" onClick={() => setMenuActive(false)}>Projects</a></li>
          <li><a href="/certificates" onClick={() => setMenuActive(false)}>Certificates</a></li>
          <li><a href="/about" onClick={() => setMenuActive(false)}>About Me</a></li>
          <li><a href="/services" onClick={() => setMenuActive(false)}>Services</a></li>
          <li><a href="/contact" onClick={() => setMenuActive(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
