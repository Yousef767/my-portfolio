import React, { Component } from "react";
import img from "../Media/home.png";
import { Link } from "react-router-dom";
import creative from "../Media/creativity.gif";
import astuteness from "../Media/astuteness.gif";
import ingenuity from "../Media/ingenuity.gif";

class Home extends Component {
  render() {
    return (
      <section className="home inner">
        <div className="title">
          <p>
            How Can{" "}
            <span className="creative">
              INGENUITY <img src={ingenuity} alt="" className="gif"></img>
            </span>{" "}
            ,{" "}
            <span className="creative">
              ASTUTENESS <img src={astuteness} alt="" className="gif"></img>
            </span>{" "}
            and{" "}
            <span className="creative">
              CREATIVITY <img src={creative} alt="" className="gif"></img>
            </span>{" "}
            get your idea turned into code
          </p>
          <h2>
            Hi , My name is <span>yousef</span> i'm a front-end developer{" "}
          </h2>
          <div className="reach">
            <span>Reach Out</span>
            <span className="c">
              <span>
                <Link
                  to="contact"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <i className="fa-regular fa-right-long"></i>
                </Link>
              </span>
            </span>
          </div>
        </div>
        <div className="media">
          <a
            href="https://wa.me/+201006770769"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://github.com/Yousef767"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yousef-ahmed-2862a2252"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <img src={img} alt="" className="homeimg"></img>
        <span className="bubble top"></span>
        <span className="bubble bottom"></span>
      </section>
    );
  }
}

export default Home;
