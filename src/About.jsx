import React from "react";
import "./styles.css"; // Using the provided styles
import rt from "./img/Tech/react.jpg";
import Bootsraps from "./img/Tech/Bootsraps.jpg";
import C from "./img/Tech/c.png";
import Css from "./img/Tech/CSS.png"; 
import DT from "./img/Tech/DataStracture.jpg";
import ex from "./img/Tech/Express.png";
import git from "./img/Tech/github.jpg";
import html from "./img/Tech/HTML.jpg"; 
import Java from "./img/Tech/java.jpg";
import js from "./img/Tech/javaScript.jpg";
import php from "./img/Tech/php.jpg";
import pg from "./img/Tech/PostgreSQL.jpg";
import python from "./img/Tech/python.jpg";
import R from "./img/Tech/R.jpg";





const About = () => {
  const technicalSkills = [
    { name: "React", image: rt },
    {name:"C language",image:C},
    {name:"CSS",image:Css},
    {name:"Bootstraps",image:Bootsraps},
    {name:"Data Structure",image:DT},
    {name:"Express",image:ex},
    {name:"Github",image:git},
    {name:"HTML",image:html},
    {name:"Java",image:Java},
    {name:"Javascript",image:js},
    {name:"PHP",image:php},
    {name:"PostgreSQL",image:pg},
    {name:"Python",image:python},
    {name:"R tool",image:R},
  ];

  return (
    <div className="about-page">
      {/* About Me Section */}
      <section className="about-me">
        <h1 className="section-heading">About Me</h1>
        <p className="about-description">
        I am Bhargav, currently pursuing a Bachelor's degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I possess a solid foundation in web technologies and a deep understanding of artificial intelligence and machine learning principles. My practical expertise extends to both web development and AI/ML, enabling me to bridge the gap between these domains effectively.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="technical-skills">
        <h1 className="section-heading">Technical Skills</h1>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img
                src={skill.image}
                alt={`${skill.name} logo`}
                className="skill-image"
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
