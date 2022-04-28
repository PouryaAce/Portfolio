import React from "react";
import Resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/105lM6yMUZHY8UydD9yPNO5DGuyYEYKas/view?usp=sharing"
        download
        className="btn"
        target="_blank"
      >
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Get In Touch!
      </a>
    </div>
  );
};

export default CTA;
