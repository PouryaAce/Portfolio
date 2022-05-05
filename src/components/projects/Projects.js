import React from "react";
import "./projects.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG5 from "../../assets/project5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "CRUD application with ability to create playlists and listen to tracks using spotify API",
    github: "https://github.com/PouryaAce/elektronik",
    demo: "https://elektroniksounds.herokuapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "Personal portfolio built on ReactJS with user friendly navigation system",
    github:
      "https://github.com/PouryaAce/Portfolio/tree/main/Pouria_Ghafourzadeh_Portfolio",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "Daily updated matches and news about cricket games using sportradar API",
    github: "https://github.com/zuh3r/Cricket-live",
    demo: "https://apkzmedia.herokuapp.com",
  },

  {
    id: 5,
    image: IMG5,
    title:
      "God Of War video game inspired Tic Tac Toe with ability to record players scores",
    github: "https://github.com/PouryaAce/TicTacToe",
    demo: "https://pouryaace.github.io/TicTacToe/",
  },
];

const Projects = () => {
  return (
    <section id="portfolio">
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
