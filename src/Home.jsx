import React from "react";
import "./styles.css"; // Importing the provided stylesheet
import profilePic from "./img/profile.jpg"; // Importing the provided image
import rt from "./img/blogs/react.gif";
import node from "./img/blogs/node.jpg";
import pg from  "./img/blogs/PostgreSQL.jpg";

function Home() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "resume.pdf"; // Replace with actual resume path
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <div className="App">
      <main>
        <section className="profile">
          <h1 style={{color:'yellow'}} className="greeting">Welcome to My Portfolio</h1>
          <img
            src={profilePic} // Your image path
            alt="Your Name"
            className="profile-image"
          />
          <div className="profile-info">
            <p>Hello! I'm bhargav vallapuram, a <spam style={{color:'blue'}}>Full-Stack Web Developer</spam> (Fresher).</p>
            <p>
              I am passionate about building dynamic, responsive websites and
              applications. I'm eager to bring my skills to real-world projects and
              make an impact in the tech industry.
            </p>

            <button onClick={handleResumeDownload} className="download-btn">
              Download My Resume
            </button>
          </div>
        </section>

        <section id="blog">
          <h2 className="bt">My Blogs</h2>
          {/* Blog 1 */}
          <div className="blog">
            <h3>Understanding Node.js</h3>
            <img
              src={node} // Replace with actual image path
              alt="Node.js"
              className="blog-image"
            />
            <p className="Blog-Description">
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
              engine. It helps in building scalable network applications and is
              known for its non-blocking, event-driven architecture.
            </p>
          </div>

          {/* Blog 2 */}
          <div className="blog">
            <h3>Mastering React.js</h3>
            <img
              src={rt} // Replace with actual image path
              alt="React.js"
              className="blog-image"
            />
            <p className="Blog-Description">
              React.js is a JavaScript library for building user interfaces. It
              allows developers to build fast and interactive web applications
              with reusable components.
            </p>
          </div>

          {/* Blog 3 */}
          <div className="blog">
            <h3>PostgreSQL Database</h3>
            <img
              src={pg} // Replace with actual image path
              alt="PostgreSQL"
              className="blog-image"
            />
            <p className="Blog-Description">
              PostgreSQL is an open-source, object-relational database system.
              It is known for its stability, scalability, and support for complex
              queries.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;