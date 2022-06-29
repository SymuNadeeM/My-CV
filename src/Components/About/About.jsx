import React from "react";
import "./About.css";
import { BsAward } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import Me from "../../Images/me2.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>Symun Majumdar</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={Me} alt="my-pic" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icons" />
              <h5>Experience</h5>
              <small>No Working Experience</small>
            </article>
            <article className="about_card">
              <FaUserFriends className="about_icons" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about_card">
              <AiFillFolderOpen className="about_icons" />
              <h5>Project</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            minima dolores obcaecati, distinctio fugit nesciunt, vitae suscipit
            ea molestias cum optio officiis ipsa atque sed quas architecto ut
            voluptatibus neque? at he the end of the day i want to know to
            world...
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
