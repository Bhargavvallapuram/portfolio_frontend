import React from "react";
import "./styles.css";
import insta from "./img/social media icons/instagram.jpeg";
import linkedin from "./img/social media icons/linkedin.jpeg";
import yt from "./img/social media icons/yt.png";
import git from "./img/social media icons/git.jpeg";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      {/* Footer Left Section */}
      <div className="footer-left">
        <a href="/" className="footer-link">Blog</a>
      </div>

      {/* Follow Me Section */}
      <div className="follow-section">
        <h4 className="follow-heading">Follow Me:</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com/scrip_tifyme/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" style={{height:'30px',}} />
          </a>
          <a href="https://www.linkedin.com/in/vallapuram-bhargav-1977b1290/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="ld" style={{height:'40px',}} />
          </a>
          <a href="https://www.youtube.com/channel/UCQRTTsRT3eTuI6vPDO7Ud9g/community?pvf=CAM%253D" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src={yt} alt="yt" style={{height:'30px',width:'30px'}} />
          </a>
          <a href="https://github.com/Bhargavvallapuram" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="git"  style={{height:'30px'}}/>
          </a>
        </div>
      </div>

      {/* Footer Right Section */}
      <div className="footer-right">
        <p className="contact-info">Email:bhargavvaallapuram@gmail.com</p>
        <p className="contact-info">Phone: +917671958328</p>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright" style={{marginRight:'35px'}}>All copy rights reserved @2025 Bhargav </div>
    </footer>
  );
};

export default Footer;
