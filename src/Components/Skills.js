import React, { Component } from "react";
import html from "../Media/icons/html.png";
import css from "../Media/icons/css.png";
import js from "../Media/icons/js.png";
import bootstarp from "../Media/icons/bootstrap.png";
import react from "../Media/icons/react.png";
import redux from "../Media/icons/redux.png";
import tailwind from "../Media/icons/tailwind.png";
import sass from "../Media/icons/sass.png";
class Skills extends Component {
  render() {
    return (
      <section className="skills">
        <div className="nolimits">
          <header>THERE ARE NO LIMITS</header>
          <div className="learning">
            <h1>WHAT AM I LEARNING NEXT.?</h1>
            <span className="st">
              (1) Back-End Web Developement (PHP , Laravel, MySQL )
            </span>
            <span className="nd">(2) Web Testing Using Jest</span>
          </div>
        </div>
        <div className="skill">
          <span data-name="html">
            <img src={html} alt=""></img>
          </span>
          <span data-name="css">
            <img src={css} alt=""></img>
          </span>
          <span data-name="js">
            <img src={js} alt=""></img>
          </span>
          <span data-name="sass">
            <img src={sass} alt=""></img>
          </span>
          <span data-name="react">
            <img src={react} alt=""></img>
          </span>
          <span data-name="redux">
            <img src={redux} alt=""></img>
          </span>
          <span data-name="bootstrap">
            <img src={bootstarp} alt=""></img>
          </span>
          <span data-name="tailwind">
            <img src={tailwind} alt=""></img>
          </span>
        </div>
        <span className="bubble top"></span>
        <span className="bubble bottom"></span>
      </section>
    );
  }
}

export default Skills;
