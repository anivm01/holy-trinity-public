import React, { useState } from "react";
import axios from "axios";

import "./ContactForm.scss";
import { API_URL } from "../../utils/api";

function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const response = await axios.post(
      `${API_URL}/contact`,
      JSON.stringify(details),
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    setStatus("Submit");
      e.target.reset()
  };
  return (
    <section className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field">
          <label className="contact__label" htmlFor="name">
            Name:
          </label>
          <input className="contact__input" type="text" id="name" required />
        </div>
        <div className="contact__field">
          <label className="contact__label" htmlFor="email">
            Email:
          </label>
          <input className="contact__input" type="email" id="email" required />
        </div>
        <div className="contact__field">
          <label className="contact__label" htmlFor="message">
            Message:
          </label>
          <textarea className="contact__message" id="message" required />
        </div>
        <button className="button" type="submit">
          {status}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
