import React from "react";
import "./About.css";
import { BsAward, BsCodeSquare } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdBackpack, MdFastfood, MdSportsCricket } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";

import Me from "../../Images/me2.png";

const About = () => {
  return (
    <>
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
                <AiFillFolderOpen className="about_icons" />
                <h5>Project</h5>
                <small>20+ completed</small>
              </article>
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
            </div>
            <p>
              I am a hard working individual web developer with deep knowledge
              and proficiency in front-end technology as well as the ability to
              communicate effectively in a team setting, and possessing a strong
              willingness to learn about modern web technologies.
            </p>
            <a href="#contact" className="btn btn-primary talk_button">
              Let's Talk
            </a>
            <div className="hoives">
              <h4 className="Interest">My Interests</h4>
              <div className="category">
                <div className="part">
                  <h6>
                    <span>
                      <MdBackpack className="icon_tag" />
                    </span>
                    Travel
                  </h6>
                </div>
                <div className="part">
                  <h6>
                    <span>
                      <BsCodeSquare className="icon_tag" />
                    </span>
                    Coding
                  </h6>
                </div>
                <div className="part">
                  <h6>
                    <span>
                      <MdFastfood className="icon_tag" />
                    </span>
                    Eating
                  </h6>
                </div>
                <div className="part">
                  <h6>
                    <span>
                      <MdSportsCricket className="icon_tag" />
                    </span>
                    Playing
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
