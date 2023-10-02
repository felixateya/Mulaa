// import React from 'react'
import { NavLink } from "react-router-dom";
import projectone from "../assets/Projects/project-1.png";
import projecttwo from "../assets/Projects/project-2.png";
import projectthree from "../assets/Projects/project-3.png";
import Navbar from "../components/Navbar";
function Projects() {
  

  return (
    <section id="latest-works">
    <Navbar/>
      <div className="left-project">
        <div className="latest-work-title">
          <h3>Latest Works</h3>
          <p>Perfect solutions for digital experience</p>
        </div>
        <a href="https://fiscall.vercel.app/" rel="noreferrer" target="_blank" className="project-card project-card-1">
          <div className="title">
            <h3>Fiscall</h3>
            <div className="tech-stack">
              <p>Bootstrap</p>
              <p>ReactJS</p>
              <p>Firebase</p>
            </div>
          </div>
          <img src={projectone} alt="" className="project-img-2" />
        </a>
        <div className="all-projects">
          <a href="">
            <h3>ALL PROJECTS</h3>
          </a>
          <p>
            * Some projects are not allowed to publish by NDA
            <br />
            if you want to see more. <NavLink to="/Contact">CONTACT</NavLink>
          </p>
        </div>
      </div>
      <div className="right-project">
        <a href="https://concept-silk.vercel.app/" rel="noreferrer" target="_blank" className="project-card" id="project-card-2">
          <div className="title">
            <h3>Concept</h3>
            <div className="tech-stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
          </div>
          <img src={projecttwo} alt="" className="project-img-1" />
        </a>
        <a href="#" rel="noreferrer" target="_blank" className="project-card project-card-3">
          <div className="title">
            <h3>Focus</h3>
            <div className="tech-stack">
              <p>ReactJS</p>
              <p>ElectronJs</p>
            </div>
          </div>
          <img src={projectthree} alt="" className="project-img-3" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
