import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer </h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>

        {/* web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
        {/* Create Content */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
