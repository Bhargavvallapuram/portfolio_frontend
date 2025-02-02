import React from "react";
import "./styles.css"; // Assuming global styles are in this file
import Udemy from "./img/Certificates/coding/Udemy.jpg";
import Smartbridge from "./img/Certificates/coding/Certificate - SmartInternz (1)_page-0001.jpg";
import Harvard from "./img/Certificates/coding/HarvardX CS109x Certificate _ edX_page-0001.jpg"
import PCMR from "./img/Certificates/coding/PCMR_page-0001.jpg";
import Cisco from "./img/Certificates/coding/Cisco1.jpg";
import Cisco2 from "./img/Certificates/coding/Cisco2.jpg";
import Tableau from "./img/Certificates/coding/Tableau_page-0001.jpg";
import  Bt from "./img/Certificates/coding/bharatintern.jpg";
import skillDudia from  "./img/Certificates/Non-coding/skilldunia.jpg";
import viksitBharatQuiz from "./img/Certificates/Non-coding/viksit.jpg";
import Bts from "./img/Certificates/Non-coding/Hamara Sankalp Viksit Bharat Pledge.jpeg";



const certificates = {
  coding: [
    {
      name: "Full Stack Web Development",
    
      image:Udemy,
    },
    {
      name: "AI Internship",
      image:Smartbridge,
    },
    {
        name: "Data Science",
        image:Harvard,
    },
    {
        name: "Hacthon at PCMR college",
        image:PCMR,
    },
    {
        name: "Cisco python programming",
        image:Cisco,
    },
    {
        name: "python Programming",
        image:Cisco2,
    },
    {
        name: "Tableau WorkShop",
        image:Tableau,
    },
    {
        name: "Bharat Internship",
        image:Bt
    }

  ],
  nonCoding: [
    {
      name: "Career Development",
      image:skillDudia,
    },
    {
      name: "vitsit Bharat Quiz",
      image: viksitBharatQuiz,
    },
    {
      name: "Hamara Sankalp Viksit Bharat Pledge",
      image: Bts,
    },
  ],
};

const CertificateCard = ({ name,image }) => (
  <div className="project-card">
    <img src={image} alt={name} className="project-image" />
    <div className="project-info">
      <h3 className="project-name">{name}</h3>
    </div>
  </div>
);

const CertificatePage = () => (
  <div className="project-page">
    <h1 className="project-heading">Certificates</h1>

    <div>
      <h2 className="project-heading">Coding Certificates</h2>
      <div className="project-list">
        {certificates.coding.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </div>

    <div>
      <h2 className="project-heading">Non-Coding Certificates</h2>
      <div className="project-list">
        {certificates.nonCoding.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </div>
  </div>
);

export default CertificatePage;
