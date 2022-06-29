import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import emailjs from "emailjs-com";
import "./Contect.css";
import { useRef } from "react";

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrl6e5g",
        "template_sfw8xmd",
        form.current,
        "8QJv-uTG0jxtquoJk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="conta_icons" />
            <h4>Email</h4>
            <h5>msymunnadeem@gmail.com</h5>
            <a href="mailto:msymunnadeem@gmail.com" target="_blank">
              Send me Messege
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="conta_icons" />
            <h4>Messenger</h4>
            <h5>Md.Symun Majumdar</h5>
            <a href="https://m.me/mdsymunmajumdar.nadeem.5" target="_blank">
              Send me Messege
            </a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className="conta_icons" />
            <h4>Whatsapp</h4>
            <h5>+88 01537515034</h5>
            <a
              href="https://api.whatsapp.com/send?phone+8801537515034"
              target="_blank"
            >
              Send me Messege
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send messages
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
