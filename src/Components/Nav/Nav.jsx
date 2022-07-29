import React, { useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setActive("#")}
          className={active === "#" ? "active" : " "}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : " "}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActive("#experience")}
          className={active === "#experience" ? "active" : " "}
        >
          <FaRegAddressBook />
        </a>
        <a
          href="#services"
          onClick={() => setActive("#services")}
          className={active === "#services" ? "active" : " "}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : " "}
        >
          <AiOutlineContacts />
        </a>
      </nav>
    </>
  );
};

export default Nav;
