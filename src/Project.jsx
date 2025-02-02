import React from "react";
import "./styles.css"; // Add styles specific to the project page
import hackshop from "./img/projects/HackShop.jpg";
import nutriScan from "./img/projects/NutriScan.png";
import BloodBank from "./img/projects/BloodBank.png";

const ProjectPage = () => {
  const projects = [
    {
      name: "HackShop",
      description: "Join us at HackShop – your gateway to innovation! 🚀 Dive into an exciting blend of hackathons & workshops designed to fuel creativity and skills. Collaborate, code, and learn with like-minded enthusiasts. Unleash your potential and bring your ideas to life. Let’s build the future together!",
      github: "https://github.com/Bhargavvallapuram/Hackshop.git",
      image: hackshop, // Replace with actual image paths
    },
    {
      name: "NutriScan",
      description: "NutriScan: Your Gateway to Smarter Nutrition 🌟 Revolutionizing Nutritional Awareness & Personal Health Harnessing advanced technologies like scanning systems and data analytics. Providing accurate insights into the nutritional content of food. 🧑‍⚕️ Personalized Dietary Recommendations Tailored to your health needs and lifestyle goals.",
      github: "https://github.com/Bhargavvallapuram/nutriscan.git",
      image: nutriScan,
    },
    {
      name: "BloodBank",
      description: "The Blood Bank Web Application is an online platform designed to streamline the management and accessibility of blood donations. It connects blood donors, recipients, and blood banks, ensuring efficient communication and timely access to required blood types in emergency situations.",
      github: "https://github.com/Bhargavvallapuram/BloodBank.git",
      image: BloodBank,
    },
  ];

  return (
    <div className="project-page">
      <h1 className="project-heading">My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
