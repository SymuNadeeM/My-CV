import React from "react";
import "./Header.css";
import me from "../../Images/me2.png";
import CTA from "./CTA";
import { BsFillFileArrowDownFill } from "react-icons/bs";
import Socials from "./Socials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Md. Symun Majumdar</h1>
          <h5 className="text-light">Front-end web developer</h5>
          <CTA />
          <Socials />
          <div className="me">
            <img src={me} alt="symun" />
          </div>
          {/* <a href="#contect" className="scroll_down">
          <BsFillFileArrowDownFill />
        </a> */}
        </div>
      </header>
    </>
  );
};

export default Header;
