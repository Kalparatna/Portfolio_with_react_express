import React from 'react';
import '../styles/Skills.css'; 

const Skill = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              As a passionate developer, I've honed my skills in various technologies and frameworks. My expertise extends to creating dynamic and visually appealing web applications. I have hands-on experience with:
            </p>
            <ul>
              <li>Front-end technologies like HTML, CSS</li>
              <li>Back-end languages such as PHP, Python, C, C++</li>
              <li>Database management with MySQL</li>
              <li>Data analysis using Python libraries like Pandas, Numpy, Matplotlib, Seaborn</li>
              <li>Web frameworks including Flask and Django</li>
              <li>API testing with Postman</li>
              <li>Cloud Computing on AWS (Amazon Web Services)</li>
              <li>Machine Learning</li>
            </ul>
            <a href="#">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML, CSS</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MERN STACK</span>
                <span>70%</span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div className="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>C, C++</span>
                <span>80%</span>
              </div>
              <div className="line cpp"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JAVA</span>
                <span>60%</span>
              </div>
              <div className="line java"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Database: MySQL, MongoDB</span>
                <span>75%</span>
              </div>
              <div className="line mysql"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python Libraries: Pandas, Numpy, Matplotlib, Seaborn</span>
                <span>85%</span>
              </div>
              <div className="line python-libraries"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python Web Frameworks: Flask, Django</span>
                <span>80%</span>
              </div>
              <div className="line python-frameworks"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
