// import React from 'react'
import { Link } from 'react-router-dom'
import Circle from '../components/Circle'
import Navbar from '../components/Navbar'


function Home() {
  

  return (
    <>
    <Navbar/>
    <section id="content-body" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500">
    <div className="body-part-1">
      <div className="developer-intro">
        <p>Full-Stack Engineer</p>
        <p>UI/UX Designer</p>
      </div>
      <div className="body-title">
        {/* <h1>Talk is cheap<br>Show me the code</h1> */}
        <h1>
          Full Stack Wizard: Coding
          
          and Designing Magic
        </h1>
        <p>
          I design and code beautifully simple things,
          
          and I love what I do.
        </p>
        <Link to="/Contact">LET&apos;S CHAT!</Link>
      </div>
      <div className="body-tail">
        <h1>2</h1>
        <p>
          YEARS
          <br />
          EXPERIENCE
        </p>
        <h1>20</h1>
        <p>
          PROJECTS
          <br />
          COMPLETED
        </p>
      </div>
    </div>
    <div className="body-part-2">
      <div className="hoodie-guy-animation-class">
        <div className="hoodie-guy" />
      </div>
      <div className="background-circle" />
    </div>
    <Circle/>
  </section>

    </>
  )
}

export default Home