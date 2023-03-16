import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { GoMail } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

function Contact({ showForm, setShowForm }) {
  const [mailSend, setMailSend] = useState(false);

  const contactContainer = useRef();
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3u0dzfj",
        "template_whc9o7u",
        form.current,
        "nAGyOPxwIvmlkY5wu"
      )
      .then(() => {
        setMailSend(true);
      })

      .catch(() => {
        console.error("error");
      });
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        showForm &&
        contactContainer.current &&
        !contactContainer.current.contains(e.target)
      ) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showForm]);

  return (
    <div ref={contactContainer} className="contact">
      {showForm === false ? (
        <button
          className="contact_btn"
          type="button"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <GoMail className="contact_btn_logo" />
        </button>
      ) : (
        <div>
          {mailSend === false ? (
            <div className="contact_formBox">
              <button
                className="contact_formBox_btn"
                type="button"
                onClick={() => {
                  setShowForm(false);
                }}
              >
                <FaTimes className="contact_formBox_btn_pic" />
              </button>
              <div className="contact_formBox_contact">
                <p>Remplissez le formulaire et je vous répond au plus vite !</p>
              </div>
              <form
                className="contact_formBox_form"
                ref={form}
                onSubmit={sendMail}
              >
                <div className="contact_formBox_form_labInp">
                  <input className="input" type="text" name="nom" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label htmlFor="contact formulaire">Nom</label>
                </div>
                <div className="contact_formBox_form_labInp">
                  <input className="input" type="text" name="prenom" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label htmlFor="contact formulaire">Prénom</label>
                </div>
                <div className="contact_formBox_form_labInp">
                  <input className="input" type="email" name="email" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label htmlFor="contact formulaire">Email</label>
                </div>
                <div className="contact_formBox_form_labInp inputArea">
                  <textarea
                    className="input area"
                    type="text"
                    name="message"
                    required
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label htmlFor="contact formulaire">Message</label>
                </div>
                <button className="contactMe_box_btn send" type="submit">
                  <span className="span-mother">
                    <span>E</span>
                    <span>n</span>
                    <span>v</span>
                    <span>o</span>
                    <span>y</span>
                    <span>e</span>
                    <span>r</span>
                  </span>
                  <span className="span-mother2">
                    <span>E</span>
                    <span>n</span>
                    <span>v</span>
                    <span>o</span>
                    <span>y</span>
                    <span>e</span>
                    <span>r</span>
                  </span>
                </button>
              </form>
            </div>
          ) : (
            <div className="contact_formBox sendCheck">
              <p className="contact_formBox_contact">
                Merci pour votre message je vous répond au plus vite !
              </p>
              <button
                className="contactMe_box_btn send"
                type="button"
                onClick={() => {
                  setMailSend(false);
                  setShowForm(false);
                }}
              >
                <span className="span-mother">
                  <span>F</span>
                  <span>e</span>
                  <span>r</span>
                  <span>m</span>
                  <span>e</span>
                  <span>r</span>
                </span>
                <span className="span-mother2">
                  <span>F</span>
                  <span>e</span>
                  <span>r</span>
                  <span>m</span>
                  <span>e</span>
                  <span>r</span>
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Contact;

Contact.propTypes = {
  showForm: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
};
