import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_infos">
        <div className="navbar_infos_box">
          <NavLink className="navbar_infos_box_pic" to="/">
            <img
              className="navbar_infos_box_pic_img"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/profilPic.jpg`}
              alt="profil"
            />
          </NavLink>
          <div className="navbar_infos_box_text">
            <p className="navbar_infos_box_text_title">Jonathan</p>
            <p className="navbar_infos_box_text_title2">SCATTOLINI</p>
            <p className="navbar_infos_box_text_subtitle">Developpeur web</p>
          </div>
        </div>
        <div className="navbar_infos_link">
          <a
            href="https://www.linkedin.com/in/jonathanscattolini/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="navbar_infos_link_icon" />
          </a>
          <a
            href="https://github.com/Megakrash"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="navbar_infos_link_icon" />
          </a>
        </div>
      </div>
      <div className="navbar_menu">
        <NavLink to="/projets">
          <p>Réalisations</p>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
