import React from "react";
import "./experience.css";
import AAT from "../../assets/aat-kings.png";
import IJ from "../../assets/inspiring-journeys.png";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience__container">
        <div>
          <h4>AAT KINGS</h4>
          <a href="https://www.aatkings.com/" className="" target="_blank">
            <img src={AAT} alt="" />
          </a>
          <h4>INSPIRING JOURNEYS</h4>
          <a href="https://inspiringjourneys.com/" className="" target="_blank">
            <img src={IJ} alt="" />
          </a>
        </div>
        <div>
          <h4>Key roles and achievements</h4>
          <ul>
            <li>
              Website development and enhancements using PHP, JavaScript, SASS
              and HTML.
            </li>
            <li>
              Ongoing maintenance of multiple travel websites including
              aatkings.com and inspiringjourneys.com.
            </li>
            <li>UX design for new components and functionality.</li>
            <li>
              Used version control in conjunction with the web development team.
            </li>
            <li>Integrated dynamic data into website template structures.</li>
            <li>Developed complex print CSS stylesheets.</li>
            <li>
              Created interactive elements such as image carousels and forms.
            </li>
            <li>Carried out image manipulation where required.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
