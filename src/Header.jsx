import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
          <li><Link to="/">Home</Link></li>  {/* Remove '#' here */}
          <li><Link to="/projects">Projects</Link></li>  {/* Remove '#' here */}
          <li><Link to="/certificates">Certificates</Link></li>  {/* Remove '#' here */}
          <li><Link to="/about">About Me</Link></li>  {/* Remove '#' here */}
          <li><Link to="/services">Services</Link></li>  {/* Remove '#' here */}
          <li><Link to="/contact">Contact</Link></li>  {/* Remove '#' here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
