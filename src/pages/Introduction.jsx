// import React from 'react'


import { useState } from "react";
import DesignCard from "../components/DesignCard";
import IntroductionText from "../components/IntroductionText";
import Navbar from "../components/Navbar";





function Introduction() {
  const [activeIndex, setActiveIndex] = useState(0)

function handleIndexValue (index){
  setActiveIndex(index)
}

  return (
    <>
    <Navbar activeIndex = {activeIndex} handleIndexValue={handleIndexValue}/>
    <section id="introduction" data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="500">
      <div className="cards">
        <DesignCard
          className={`design-card ${activeIndex === 0  ? 'active' : ''}`}
          onClick={() => handleIndexValue(0)}
          card={
            <>
              <div>
                <h3>UI/UX Design</h3>
                <i className="fa-solid fa-wand-magic-sparkles" />
              </div>
              <p>Create design products with unique ideas that matters</p>
              <a href="">20 PROJECTS</a>
            </>
          }
        />
        <DesignCard
          className={`design-card ${activeIndex === 1  ? "active" : ""}`}
          onClick={() => handleIndexValue(1)}
          card={
            <>
              <div>
                <h3>Frontend Development</h3>
                <i className="fa-solid fa-code" />
              </div>
              <p>Making the Web Look Good</p>
              <a href="">20 PROJECTS</a>
            </>
          }
        />
        <DesignCard
          className={`design-card ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => handleIndexValue(2)}
          card={
            <>
              <div>
                <h3>Backend Development</h3>
                <i className="fa-solid fa-terminal" />
              </div>
              <p>Building the Web&apos;s Backbone</p>
              <a href="">20 PROJECTS</a>
            </>
          }
        />
      </div>

      
      { activeIndex === 0 && 
        <IntroductionText
        className = {`introduction-text`}
        text = {
          <>
             <p>Introduction</p>
        <h2>Hello! I&apos;m Felix Mulaa</h2>
        <h4>Crafting User Experiences that Delight and Inspire</h4>
        <p>
          I am a UI/UX designer who loves to create engaging and delightful user
          experiences for web and mobile applications. I use my skills in user
          research, design thinking, and prototyping to craft interfaces that
          are not only aesthetically pleasing, but also easy to use and
          navigate. Making it a very smooth and delightful experience for the
          clients
        </p>
          </>
        }
      />
      }

      

      { activeIndex === 1 && <IntroductionText
        className = {`introduction-text`}
        text = {
          <>
          <p>Introduction</p>
        <h2>Hello! I&apos;m Felix Mulaa</h2>
        <h4> The Web&apos;s &amp; Mobile&apos;s Magician</h4>
        <p>
          As a frontend developer, I create stunning and responsive web pages
          that capture the attention and imagination of the users. I use my
          skills in HTML, CSS, JavaScript, and various frameworks and libraries
          to design and implement user interfaces that are both visually
          appealing and user-friendly.
        </p>
          </>
        }
      />}
      
     {activeIndex === 2 && <IntroductionText
        className = {`introduction-text`}
        text = {
          <>
          <p>Introduction</p>
        <h2>Hello! I&apos;m Felix Mulaa</h2>
        <h4>Coding with Efficiency</h4>
        <p>
          As a backend developer, I create robust and scalable web applications
          that handle the logic and data behind the scenes. I use my skills in
          Python, Django, SQL, and various APIs and tools to develop and deploy
          backend systems that are secure, reliable, and efficient.
        </p>
          </>
        }
      />}
    </section>
    </>
  );
}

export default Introduction;
