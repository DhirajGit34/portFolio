import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context/context";

const Contact = () => {
  // (useRef) => It can be used to store a mutable value that does not cause a re-render when updated.
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // for 4m reset
  const [firstName, setFirstName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    // this is useto not refress the page
    e.preventDefault();
    // emailing
    emailjs
      .sendForm(
        "service_ed41vzc",
        "template_1xnoin4",
        formRef.current,
        "F8hwJdxV56X9Am-4X"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFirstName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="c">
      <div
        className="c-bg"
        style={{ backgroundColor: darkMode ? "#59b256" : "rgb(227, 227, 227)" }}
      ></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss Your Project </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +123 678 345
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              ok@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Guahati, six Mile GS road
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              placeholder="Name"
              name="user_name"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              placeholder="Subject"
              name="user_subject"
              onChange={(event) => setSubject(event.target.value)}
              value={subject}
            />
            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              placeholder="Email"
              name="user_email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <textarea
              rows="5"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#fff",
              }}
              placeholder="Message"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
            <button>Submit</button>
            <span> {done && "Thank You"} </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
