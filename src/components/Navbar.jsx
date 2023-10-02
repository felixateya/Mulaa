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
    <section id="header">
        <Link to="/" className="navbar-title">
          <h3 className="title-first-name">Felix</h3>
          <h3 className="title-last-name">Mulaa</h3>
        </Link>
      <div>
        <ul className="navbar-menu">
          <li>
            <CustomLink to="/">
              &lt; Home &gt;
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Skills" >
              &lt; Skills &gt;
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Projects" >
              &lt; Projects &gt;
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Testimonials" >
              &lt; Testimonials &gt;
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Contact" >
              &lt; Contact &gt;
            </CustomLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="social-media">
          <li>
            {/* <i className="fa-brands fa-Linkedin-in" /> */}
            <FaLinkedin />
            <a href="#" target="_blank">
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
              href="mulaafelix6@gmail.com"
              rel="noreferrer"
              target="_blank"
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
