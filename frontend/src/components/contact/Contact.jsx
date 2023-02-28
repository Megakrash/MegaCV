import React, { useState } from "react";
import { GoMail } from "react-icons/go";

function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact">
      {open === false ? (
        <button
          className="contact_btn"
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <GoMail className="contact_btn_logo" />
        </button>
      ) : (
        <div className="contact_formBox" />
      )}
      ;
    </div>
  );
}

export default Contact;
