// import React from 'react'
import { NavLink } from "react-router-dom";
import projectone from "../assets/Projects/project-1.png";
import projecttwo from "../assets/Projects/project-2.png";
import projectthree from "../assets/Projects/project-3.png";
import Navbar from "../components/Navbar";
function Projects() {
  

  return (
    <>

    <Navbar/>
    <section id="latest-works" data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="500">
      <div className="left-project">
        <div className="latest-work-title">
          <h3>Latest Works</h3>
          <p>Perfect solutions for digital experience</p>
        </div>
        <a href="https://hotel-mgt-oasis.netlify.app" rel="noreferrer" target="_blank" className="project-card project-card-1">
          <div className="title">
            <h3>The Wild Oasis</h3>
            <div className="tech-stack">
              <p>React query</p>
              <p>React</p>
              <p>Supabase</p>
            </div>
          </div>
          <img src={projectone} alt="" className="project-img-2" />
        </a>
        <div className="all-projects">
          <a href="/">
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
        <a href="https://fast-pizza-iota.vercel.app" rel="noreferrer" target="_blank" className="project-card project-card-3">
          <div className="title">
            <h3>React Pizza</h3>
            <div className="tech-stack">
              <p>Redux toolkit</p>
              <p>React</p> 
              <p>Tailwind</p> 
            </div>
          </div>
          <img src={projectthree} alt="" className="project-img-3" />
        </a>
      </div>
    </section>
    </>
  );
}

export default Projects;
