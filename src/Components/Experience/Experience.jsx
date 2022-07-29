import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skill I have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_contents">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light"> Expericenced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light"> Intermediate </small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light"> Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>Js</h4>
                  <small className="text-light"> Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>React</h4>
                  <small className="text-light"> Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          {/* Backend start */}
          <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_contents">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>C</h4>
                  <small className="text-light"> Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>C++</h4>
                  <small className="text-light"> Basic </small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light"> Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light"> Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_icons" />
                <div>
                  <h4>Node.Js</h4>
                  <small className="text-light"> Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
