import React, { useState } from "react";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function ContactMe() {
  const [showForm, setShowForm] = useState(false);

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
            <p className="contactMe_box_infos_location_text">
              jscattolini@gmail.com
            </p>
          </div>
          <div className="contactMe_box_infos_location">
            <FaPhoneAlt className="contactMe_box_infos_location_logo" />
            <p className="contactMe_box_infos_location_text">06 28 33 54 39</p>
          </div>
        </div>
        <button
          className="contactMe_box_btn"
          type="button"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          sdsdsd
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
