import React from "react";
import Cv from "../../Images/CV one page.pdf";
import "./Header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Cv} className="btn cv_download">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
