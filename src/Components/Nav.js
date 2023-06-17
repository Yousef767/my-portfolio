import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  activeMenu = () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("active-menu");
    window.scrollTo(0, 0);
  };
  toggleMenu = () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("active-menu");
  };
  render() {
    return (
      <nav>
        <a href="https://drive.google.com/file/d/1gEnGhEZ3YXMXtWlRcJ_5cSlExq57Wb0R/view?usp=share_link">
          <span className="cv">Watch cv</span>
          <i className="fa-regular fa-file"></i>
        </a>
        <button className="menu" onClick={this.toggleMenu}>
          <span></span>
          <span></span>
        </button>
        <div className="contact-btn">
          <Link
            to="contact"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </Link>
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="sections">
          <NavLink to="/" onClick={this.activeMenu}>
            Home <span>01</span>
          </NavLink>
          <NavLink to="/about" onClick={this.activeMenu}>
            About <span>02</span>
          </NavLink>
          <NavLink to="/skills" onClick={this.activeMenu}>
            Skills <span>03</span>
          </NavLink>
          <NavLink to="/portfolio" onClick={this.activeMenu}>
            Projects <span>04</span>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
