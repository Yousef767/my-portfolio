import React, { useState } from "react";
import img from "../Media/writingHand.png";
import { Link } from "react-router-dom";
import { send } from "emailjs-com";

function Contact() {
  const showMessage = (e, t) => {
    if (e !== null) {
      navigator.clipboard.writeText(e.target.innerText);
    }
    let div = document.createElement("div");
    div.className = "message";
    let span = document.createElement("span");
    span.innerText = `${t}`;
    document.getElementById("root").appendChild(div);
    div.appendChild(span);
    setTimeout(() => {
      div.remove();
    }, 3000);
  };

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValue = toSend.to_name;
    if (emailValue.match(emailRegex) && toSend.from_name !== '') {
      send("service_6uaqdew", "template_evr647s", toSend, "mykHT8oJAgaEWLgvf")
        .then((response) => {
          showMessage(null, "Email Sent");
          setToSend({
            from_name: "",
            to_name: "",
            message: "",
            reply_to: "",
          });
        })
        .catch((err) => {
          showMessage(null, "An Error Occurred");
        });
    } else {
      showMessage(null, "Invalid Email Or Name");
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section className="contact">
      <div className="form">
        <h1>GET IN TOUCH</h1>
        <p>Fill out the form and i will get back to you ASAP.</p>
        <form onSubmit={onSubmit}>
          <div className="field">
            <label>full name :</label>
            <div className="input-inner">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={toSend.from_name}
                onChange={handleChange}
              />
              <i className="fa-solid fa-user"></i>
              <span></span>
            </div>
          </div>
          <div className="field">
            <label>email :</label>
            <div className="input-inner">
              <input
                type="text"
                name="to_name"
                placeholder="Your Email"
                value={toSend.to_name}
                onChange={handleChange}
              />
              <i className="fa-solid fa-envelope"></i>
              <span></span>
            </div>
          </div>
          <div className="field">
            <label>message :</label>
            <div className="input-inner">
              <textarea
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
              />
              <i className="fa-solid fa-paper-plane mi"></i>
              <span></span>
            </div>
          </div>
          <div className="submit">
            <input type="submit" value={"SEND"} />
          </div>
        </form>
      </div>
      <div className="card">
        <h1>CONTACT INFO</h1>
        <span>Let's level up your brand together.</span>
        <div className="con-info">
          <span
            onClick={(e) => {
              showMessage(e, "Phone Copied");
            }}
          >
            <i className="fa-solid fa-phone"></i> +201006770769
          </span>
          <span
            onClick={(e) => {
              showMessage(e, "Email Copied");
            }}
          >
            <i className="fa-solid fa-envelope"></i> floky4444@gmail.com
          </span>
        </div>
        <div className="con-info2">
          <a
            href="https://wa.me/+201006770769"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yousef-ahmed-2862a2252"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Yousef767"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <img className="cimg" src={img} alt=""></img>
        <span className="bub"></span>
        <Link to="/" className="exit">
          <i className="fa-solid fa-x"></i>
        </Link>
      </div>
    </section>
  );
}

export default Contact;
