import React from "react";
import "./about.css";
import ME from "../../assets/ga-logo.png";
import Resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <a href="https://generalassemb.ly/" target="_blank">
              <img src={ME} alt="About Image" />
            </a>
          </div>
        </div>

        <div className="about__content">
          <p>
            I am a full-stack developer who brings a balance of both critical
            problem-solving and creativity into everything I do. I have always
            had an interest in computers, starting with my initial Bachelors
            degree studies in Software Engineering. After making the move to
            Australia, I took a career detour and have worked in a variety of
            fields including audio engineering, music production, and as an air
            conditioning technician. It was recently that I decided to make the
            move back to software engineering and this urge pushed me into
            undertaking the Software Engineering Immersive course at General
            Assembly. It is through this that I have gained coding skills in a
            variety of programming languages , recognising problems and using
            the right tools to solve them. These coupled with my side hobby as a
            DJ have helped hone my unique approach to creative problem-solving.
            I'd love to have a chat about any opportunities you may have, so
            please get in touch!
          </p>

          <div className="links">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
