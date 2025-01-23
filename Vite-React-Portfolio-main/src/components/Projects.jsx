import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
    <div className="projects-container" > 
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-cards">
        <div className="project-card">
          <img src="project1.jpg" alt="Project 1" className="project-img" />
          <div className="project-info">
            <h3>Ai Powered Interactive Learning Platform</h3>
            <p>A description of the first project.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src="project2.jpg" alt="Project 2" className="project-img" />
          <div className="project-info">
            <h3>IPL Dream 11 Team Prection</h3>
            <p>A description of the second project.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src="project3.jpg" alt="Project 3" className="project-img" />
          <div className="project-info">
            <h3>Road Transport Telematic Solution for post services</h3>
            <p>A description of the third project.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src="project3.jpg" alt="Project 3" className="project-img" />
          <div className="project-info">
            <h3>AgriGenius : Gen Ai Agriculture Chatbot</h3>
            <p>A description of the third project.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Projects;
