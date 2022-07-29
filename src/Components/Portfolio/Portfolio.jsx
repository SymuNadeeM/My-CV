import React, { useState } from "react";
import data from "./Data";
import "./Portfolio.css";

const Portfolio = () => {
  const [item, setitem] = useState(data);
  return (
    <>
      <div id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container protfolio_container">
          {item.map((singleitem) => {
            const { id, image, github, title, demo } = singleitem;
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="protfolio_item_btn">
                  <a href={github} className="btn git_card" target="_blank">
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
      </div>
    </>
  );
};

export default Portfolio;
