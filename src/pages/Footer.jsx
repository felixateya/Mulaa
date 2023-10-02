// import React from 'react'

import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"

function Footer() {
  return (
    <>

    <Navbar/>
    <section id="footer" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500">
  <div className="footer-left">
    <h2>Let&apos;s make something amazing together</h2>
    <div className="email-form">
      <h2>
        Start by <span>saying hi</span>
      </h2>
      <input type="text" name="name" id="" placeholder="Your name" />
      <input type="email" name="email" id="" placeholder="Email Address" />
      <div>
        <input
          type="number"
          name="phone-number"
          id=""
          placeholder="Phone number"
        />
        <button type="submit">Send</button>
      </div>
    </div>
    <div className="footer-title">
      <h3 className="title-first-name">Felix</h3>
      <h3 className="title-last-name">Mulaa</h3>
    </div>
  </div>
  <div className="footer-right">
    <div className="footer-email-intro">
      <p>Information</p>
      <h6>Nairobi, Kenya, 127.0.0.1</h6>
      <h3>mulaafelix6@gmail.com</h3>
    </div>
    <div className="footer-nav-menu">
      <ul className="footer-menu">
        <li>
          <NavLink to="/" activeclassname="active" >
            &lt; Home &gt;
          </NavLink>
        </li>
        <li>
          <NavLink to="/Skills" activeclassname="active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" activeclassname="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Testimonials" activeclassname="active">
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeclassname="" >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="social-icons">
      <a href="#" target="_blank">
        <FaLinkedin className="icon linkedin"/>
      </a>
      <a href="https://github.com/felixateya" rel="noreferrer" target="_blank">
        <FaGithub className="icon github"/>
      </a>
      <a href="https://mulaafelix6@gmail.com" rel="noreferrer" target="_blank">
        <FaEnvelope className="icon email"/>
      </a>
      <a href="#" target="_blank">
        <FaTwitter className="icon twitter"/>
      </a>
      <a href="#" target="_blank">
        <FaInstagram className="icon insta"/>
      </a>
      <a href="#" target="_blank">
        <FaFacebook className="icon fb"/>
      </a>
    </div>
  </div>
</section>
    </>

  )
}

export default Footer