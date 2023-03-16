import React from "react";
import PropTypes from "prop-types";
import { FaLocationArrow, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function ContactMe({ setShowForm }) {
  return (
    <div className="contactMe">
      <div className="contactMe_box">
        <div className="contactMe_box_title">
          <p className="contactMe_box_title_title">N'hésitez pas</p>
          <p className="contactMe_box_title_subtitle">contactez moi !</p>
        </div>
        <div className="contactMe_box_infos">
          <div className="contactMe_box_infos_location">
            <FaLocationArrow className="contactMe_box_infos_location_logo" />
            <p className="contactMe_box_infos_location_text">Nantes, France</p>
          </div>
          <div className="contactMe_box_infos_location">
            <GoMail className="contactMe_box_infos_location_logo" />
            <button
              type="button"
              className="contactMe_box_infos_location_text mailto"
              onClick={() => {
                window.location = "mailto:jscattolini@gmail.com";
              }}
            >
              jscattolini@gmail.com
            </button>
          </div>
          <div className="contactMe_box_infos_location">
            <FaPhoneAlt className="contactMe_box_infos_location_logo" />
            <a
              href="tel:+33628335439"
              className="contactMe_box_infos_location_text"
            >
              06 28 33 54 39
            </a>
          </div>
        </div>
        <button
          className="contactMe_box_btn"
          type="button"
          onClick={() => {
            setShowForm(true);
          }}
        >
          <span className="span-mother">
            <span>F</span>
            <span>o</span>
            <span>r</span>
            <span>m</span>
            <span>u</span>
            <span>l</span>
            <span>a</span>
            <span>i</span>
            <span>r</span>
            <span>e</span>
          </span>
          <span className="span-mother2">
            <span>F</span>
            <span>o</span>
            <span>r</span>
            <span>m</span>
            <span>u</span>
            <span>l</span>
            <span>a</span>
            <span>i</span>
            <span>r</span>
            <span>e</span>
          </span>
        </button>
        <a
          className="contactMe_box_linkdin"
          href="https://www.linkedin.com/in/jonathanscattolini/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="contactMe_box_linkdin_pic" />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;

ContactMe.propTypes = {
  setShowForm: PropTypes.func.isRequired,
};
