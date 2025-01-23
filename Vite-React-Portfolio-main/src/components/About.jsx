import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="container about-section">
      <div className="row">
        {/* Left Section: Image */}
        <div className="col-md-4 text-center">
          <img src="./1.png" alt="About Me" className="about-img" />
        </div>

        {/* Right Section: About Text */}
        <div className="col-md-8">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I am currently pursuing my B.Tech in Information Technology at SVKM IOT, Dhule. I have already completed my Diploma in
            Mechanical Engineering at Government Polytechnic, Jalgaon. Currently looking for opportunities in Software Industries to
            direct my career towards growth and success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
