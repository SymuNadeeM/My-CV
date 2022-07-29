import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <footer>
        <ScrollToTop
          smooth
          top="1000"
          color="#4db5ff"
          width="20px"
          height="28px"
        />
        <a href="#" className="footer_logo">
          SYMUN
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer_socials">
          <a href="https://facebook.com">
            <BsFacebook />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <BsTwitter />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
