import {  Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";




function CustomLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}


function Navbar() {
  return (
    <section id="header" data-aos = "fade-down"data-aos-easing="linear"
    data-aos-duration="1500">
        <Link to="/" className="navbar-title">
          <h3 className="title-first-name">Felix</h3>
          <h3 className="title-last-name">Mulaa</h3>
        </Link>
        
      <div>
        <ul className="navbar-menu">
          <li>
            <CustomLink to="/">
               Home 
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Skills" >
               Skills 
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Projects" >
               Projects 
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Testimonials" >
               Testimonials 
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Contact" >
               Contact 
            </CustomLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="social-media">
          <li>
            {/* <i className="fa-brands fa-Linkedin-in" /> */}
            <FaLinkedin />
            <a href="/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            {/* <i className="fa-brands fa-github" /> */}
            <FaGithub />
            <a
              href="https://github.com/felixateya"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            {/* <i className="fa-regular fa-envelope" /> */}
            <FaEnvelope />
            <a
              href="mailto:mulaafelix6@gmail.com"
              rel="noreferrer"
              // target="_blank"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
