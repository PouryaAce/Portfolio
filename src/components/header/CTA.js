import React from "react";
import Resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1Jom3VF3CEnpD4pbaCuOdarfsFbhQ39ZY/view?usp=sharing"
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
