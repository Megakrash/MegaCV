import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Angular from "../../assets/certificats/angular.jpg";
import Html from "../../assets/certificats/html.jpg";
import JavaScript from "../../assets/certificats/javaScript.jpg";
import Terminal from "../../assets/certificats/terminal.jpg";

function BigPictures({ setShowBigPictures, certif }) {
  const [pictureToShow, setPictureToShow] = useState(certif);

  const whatCertif = () => {
    if (pictureToShow === "java") {
      return JavaScript;
    }
    if (pictureToShow === "angular") {
      return Angular;
    }
    if (pictureToShow === "html") {
      return Html;
    }
    if (pictureToShow === "terminal") {
      return Terminal;
    }
    return "";
  };

  useEffect(() => {
    whatCertif();
  }, [pictureToShow]);

  return (
    <div className="bigPictures">
      <button
        className="bigPictures_btn"
        type="button"
        onClick={() => {
          setShowBigPictures(false);
        }}
      >
        <FaTimes className="contact_formBox_btn_pic" />
      </button>
      <div className="bigPictures_mini">
        <button
          type="button"
          className={
            pictureToShow === "java" ? "activ" : "bigPictures_mini_btn"
          }
          onClick={() => {
            setPictureToShow("java");
          }}
        >
          <img
            className="bigPictures_mini_btn_img"
            src={JavaScript}
            alt="Certificat JavaScript"
          />
        </button>
        <button
          type="button"
          className={
            pictureToShow === "angular" ? "activ" : "bigPictures_mini_btn"
          }
          onClick={() => {
            setPictureToShow("angular");
          }}
        >
          <img
            className="bigPictures_mini_btn_img"
            src={Angular}
            alt="Certificat Angular"
          />
        </button>
        <button
          type="button"
          className={
            pictureToShow === "html" ? "activ" : "bigPictures_mini_btn"
          }
          onClick={() => {
            setPictureToShow("html");
          }}
        >
          <img
            className="bigPictures_mini_btn_img"
            src={Html}
            alt="Certificat HTML"
          />
        </button>
        <button
          type="button"
          className={
            pictureToShow === "terminal" ? "activ" : "bigPictures_mini_btn"
          }
          onClick={() => {
            setPictureToShow("terminal");
          }}
        >
          <img
            className="bigPictures_mini_btn_img"
            src={Terminal}
            alt="Certificat Terminal"
          />
        </button>
      </div>
      <div className="bigPictures_big">
        {pictureToShow !== "" && (
          <img
            className="bigPictures_big_img"
            src={whatCertif()}
            alt="Certificat"
          />
        )}
      </div>
    </div>
  );
}

export default BigPictures;

BigPictures.propTypes = {
  setShowBigPictures: PropTypes.func.isRequired,
  certif: PropTypes.string.isRequired,
};
