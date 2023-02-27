import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithubSquare, FaLocationArrow } from "react-icons/fa";

function NavBar() {
  const [projets, setProjets] = useState(false);
  const [formation, setFormation] = useState(false);
  const [parcours, setParcours] = useState(false);

  const classHome = () => {
    if (projets === false && formation === false && parcours === false) {
      return "navbar_menu_link_activ";
    }
    return "navbar_menu_link";
  };

  const classProjets = () => {
    if (projets === true) {
      return "navbar_menu_link_activ";
    }
    return "navbar_menu_link";
  };
  const classFormation = () => {
    if (formation === true) {
      return "navbar_menu_link_activ";
    }
    return "navbar_menu_link";
  };
  const classExperience = () => {
    if (parcours === true) {
      return "navbar_menu_link_activ";
    }
    return "navbar_menu_link";
  };

  return (
    <div className="navbar">
      <div className="navbar_infos">
        <div className="navbar_infos_box">
          <NavLink
            className="navbar_infos_box_pic"
            to="/"
            onClick={() => {
              setProjets(false);
              setFormation(false);
              setParcours(false);
            }}
          >
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
        <div className="navbar_infos_location">
          <FaLocationArrow className="navbar_infos_location_arrow" />
          <p>Nantes</p>
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
        <NavLink to="/">
          <button
            type="button"
            className={classHome()}
            onClick={() => {
              setProjets(false);
              setFormation(false);
              setParcours(false);
            }}
          >
            Accueil
          </button>
        </NavLink>
        <NavLink to="/projets">
          <button
            type="button"
            className={classProjets()}
            onClick={() => {
              setProjets(!projets);
              setFormation(false);
              setParcours(false);
            }}
          >
            Réalisations
          </button>
        </NavLink>
        <NavLink to="/formation">
          <button
            type="button"
            className={classFormation()}
            onClick={() => {
              setProjets(false);
              setFormation(!formation);
              setParcours(false);
            }}
          >
            Formation - certificats
          </button>
        </NavLink>
        <NavLink to="/parcours">
          <button
            type="button"
            className={classExperience()}
            onClick={() => {
              setProjets(false);
              setFormation(false);
              setParcours(!parcours);
            }}
          >
            Expérience professionnelle
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
