import React from "react";
import "./styles.css"; // Importing the provided stylesheet
import profilePic from "./img/profile.jpg"; // Importing the provided image
import rt from "./img/blogs/react.gif";
import node from "./img/blogs/node.jpg";
import pg from  "./img/blogs/PostgreSQL.jpg";
import HackShop from "./img/blogs/HackShop.jpg";
import Backend from "./img/blogs/Backend.jpg";
import API from "./img/blogs/API.jpg";

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
          <h1 style={{color:'yellow',marginLeft:"20px"} }className="greeting">Welcome to My Portfolio</h1>
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


          <div className="blog">
            <h3>🔥 Upcoming Workshop: Mastering APIs!</h3>
            <img
              src={API}//eplace with actual image path
              alt="HackShop"
              className="blog-image"
            />
            <p className="Blog-Description">
            🚀 After the success of our backend development workshop (400+ attendees!), we at HackShop are excited to bring another power-packed session—a hands-on workshop on APIs!

🌍 What to Expect?
✅ Understanding APIs & how they work
✅ RESTful APIs vs. GraphQL
✅ Hands-on experience with Postman & real-world API integration
✅ Best practices for API development

📅 Stay Tuned for the Official Date!

Want to be a part of this exciting session? Follow us for updates! 🚀
            </p>
          </div>

          <div className="blog">
            <h3>🎤 Successful Backend Development Workshop – 400+ Attendees!</h3>
            <img
              src={Backend} // Replace with actual image path
              alt="Backend"
              className="blog-image"
            />
            <p className="Blog-Description">
            🚀 About the Workshop
Our startup, HackShop, recently conducted a practical workshop on backend development, where I had the opportunity to be the speaker and instructor. We were thrilled to see an overwhelming response, with 400+ enthusiastic learners joining us to explore backend technologies.

🎥 Watch the Workshop
We’ve uploaded the entire session on YouTube, making it accessible to a wider audience eager to learn backend development hands-on.

🔗<a href="https://www.youtube.com/watch?v=8qK9mEaIVZw">Click Here workshop link</a>

💡 Key Highlights
✅ Interactive, hands-on learning experience
✅ Covered essential backend concepts and tools
✅ Engaged with a large audience, making learning fun and impactful
            </p>
          </div>

          {/* Blog 1 */}

          <div className="blog">
            <h3>🚀 HackShop - Empowering Students & Innovating IT Solutions</h3>
            <img
              src={HackShop} // Replace with actual image path
              alt="HackShop"
              className="blog-image"
            />
            <p className="Blog-Description">
            HackShop is a startup founded by me and my friends with a vision to bridge the global skill gap. We organize workshops and events happening in other countries to help students enhance their skills and stay ahead in the tech industry.What We Do
            ✅ Workshops & Events: Bringing international-level workshops and tech events to students worldwide.
            ✅ Skill Enhancement: Providing hands-on learning experiences to help students grow.
            ✅ IT Services (Coming Soon!): Expanding into IT solutions to support businesses and startups.
            Our Mission
            To create a platform where students can access high-quality learning experiences and IT solutions that drive innovation.
            </p>
          </div>

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