import React, { Component } from "react";
import myPhoto from "../Media/photo.jpg";

class About extends Component {
  render() {
    return (
      <section className="about">
        <h1>
          DELIGHTED <br /> TO MEET YOU
        </h1>
        <div className="myPhoto">
          <img src={myPhoto} alt=""></img>
          <div className="summary">
            <p>
              I'm a Front-end developer with years of experience in building
              products and appealing web experiences. I've collaborated with
              individuals and teams to build experiences for their ideas.
            </p>
            <p>
              I have serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
            </p>
            <p>
              Each project is a new opportunity to learn new concepts across
              multiple domains.
            </p>
          </div>
        </div>
        <div className="offers">
          <header>What i offer...</header>
          <div className="offer">
            <span className="head">
              user Interfaces
              <span>01</span>
            </span>
            <p>
              UI technologies are so important it can be used in many places
              where the digital technologies present like Computer, Mobile,
              Phones, Cars, Music players, etc. that's why I have serious
              passion for UI effects.
              <i className="fa-duotone fa-browsers"></i>
            </p>
          </div>
          <div className="offer">
            <span className="head">
              Web Coding
              <span>02</span>
            </span>
            <p>
              Web Coding can range from developing a simple single static page
              of plain text to complex web-based internet applications. so,
              using Html, Css and JavaScript i can convert your thoughts into
              web applications.
              <i className="fa-duotone fa-code"></i>
            </p>
          </div>
          <div className="offer">
            <span className="head">
              Creative Implementation
              <span>03</span>
            </span>
            <p>
              It is all about putting creativity to work. Ideas are useless
              unless used. The proof of their value is their implementation.
              Until then they are in limbo.
              <i className="fa-duotone fa-lightbulb"></i>
            </p>
          </div>
        </div>
        <div className="circles">
          <div className="circle">
            <div className="c-head">
              <span id="fs">
                21 <br /> Years old
              </span>
              <span>
                <i className="fa-light fa-calendar-days"></i>
              </span>
            </div>
            <p>
              Keep It Simple.<br></br>
              Always Updated.
            </p>
          </div>
          <div className="circle">
            <div className="c-head">
              <span>
                Mansoura university <br></br>
                Faculty of science <br></br>
                Computer Science dep.
              </span>
              <span>
                <i className="fa-regular fa-graduation-cap"></i>
              </span>
            </div>
            <p>
              Healthy Mindset.<br></br>
              Always Learning.
            </p>
          </div>
        </div>
        <span className="bubble top"></span>
        <span className="bubble bottom"></span>
      </section>
    );
  }
}

export default About;
