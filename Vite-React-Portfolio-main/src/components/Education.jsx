import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="max-width">
        <h2 className="title">Education</h2>
        <div className="edu-content">
          {/* B.Tech Card */}
          <div className="card">
            <div className="box">
              <i className="fas fa-school"></i>
              <div className="text">B.Tech</div>
              <p>Persuing B.Tech at SVKM IOT, Dhule</p>
              <p>Duration: 2022 - ____</p>
            </div>
            <div className="image-container">
              <img id="sv" src="/images/svkm.jpg" alt="SVKM IOT" />
            </div>
          </div>

          {/* Diploma Card */}
          <div className="card">
            <div className="box">
              <i className="fas fa-building"></i>
              <div className="text">Diploma</div>
              <p>Government Polytechnic Jalgaon.</p>
              <p>Duration: 2019 - 2022</p>
              <p>Aggregate Percentage: 84.10%</p>
            </div>
            <div className="image-container">
              <img id="sv" src="/images/DP.jpg" alt="GPJ" />
            </div>
          </div>

          {/* School Card */}
          <div className="card">
            <div className="box">
              <i className="fas fa-home"></i>
              <div className="text">School</div>
              <p>Sarvodaya Madhyamik Vidyalaya, Gudhe</p>
              <p>Passing Year : 2019</p>
              <p>Percentage : 83.80%</p>
            </div>
            <div className="image-container">
              <img id="sv" src="/images/sc.jpg" alt="SSC" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
