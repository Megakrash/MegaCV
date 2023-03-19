import React, { useState } from "react";
import BigPictures from "./BigPictures";
import Angular from "../../assets/certificats/angular.jpg";
import Html from "../../assets/certificats/html.jpg";
import JavaScript from "../../assets/certificats/javaScript.jpg";
import Terminal from "../../assets/certificats/terminal.jpg";
import WildLogo from "../../assets/images/wildlogo.png";

function Formation() {
  const [showBigPictures, setShowBigPictures] = useState(false);
  const [certif, setCertif] = useState("");

  return (
    <div className="formation">
      <div className="projets_box">
        <div className="projets_box_link">
          <a
            className="projets_box_link_logo"
            href="https://www.wildcodeschool.com/fr-FR"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projets_box_link_logo_pic"
              src={WildLogo}
              alt="logo Wild Code School"
            />
          </a>
          <div className="projets_box_link_name">
            <a
              href="https://www.wildcodeschool.com/fr-FR"
              target="_blank"
              rel="noreferrer"
            >
              <p className="projets_box_link_name_title">Wild Code School</p>
            </a>
            <p className="projets_box_link_name_date">09/22 - 02/23</p>
          </div>
        </div>
        <div className="projets_box_infos">
          <p>Formation "Développeur web" à la Wild Code School de Nantes.</p>
          <p>
            La formation mène à la préparation du titre professionnel{" "}
            <span>Développeur Web et Web Mobile</span>, inscrit au RNCP de
            niveau 5.
          </p>
          <p>
            Formation "intensive" basée sur la pratique. L'apprentissage se base
            sur le développement de sites intéractifs qui utilisent les
            technologies <span>HTML</span>, <span>CSS (Sass)</span>,{" "}
            <span>JavaScript</span>, <span>React</span> et <span>NodeJS</span>.
          </p>
          <p>
            Le but est également de découvrir le cycle complet de la création
            d'une application web performante pour répondre aux besoins des
            clients. Etablir un product <span>backlog</span>, construire des{" "}
            <span>wireframes</span> et des maquettes, utiliser une {""}{" "}
            <span>API</span>...
          </p>
          <p>
            Tous les projets de formations entrepris le sont avec la méthode
            agile de type <span>Scrum</span>.
          </p>
        </div>
      </div>
      <div className="formation_box">
        <button
          type="button"
          className="formation_box_btn"
          onClick={() => {
            setCertif("java");
            setShowBigPictures(true);
          }}
        >
          <img
            className="formation_box_btn_img"
            src={JavaScript}
            alt="Certificat JavaScript"
          />
        </button>
      </div>
      <div className="formation_box">
        <button
          type="button"
          className="formation_box_btn"
          onClick={() => {
            setCertif("angular");
            setShowBigPictures(true);
          }}
        >
          <img
            className="formation_box_btn_img"
            src={Angular}
            alt="Certificat Angular"
          />
        </button>
      </div>
      <div className="formation_box">
        <button
          type="button"
          className="formation_box_btn"
          onClick={() => {
            setCertif("html");
            setShowBigPictures(true);
          }}
        >
          <img
            className="formation_box_btn_img"
            src={Html}
            alt="Certificat HTML"
          />
        </button>
      </div>
      <div className="formation_box">
        <button
          type="button"
          className="formation_box_btn"
          onClick={() => {
            setCertif("terminal");
            setShowBigPictures(true);
          }}
        >
          <img
            className="formation_box_btn_img"
            src={Terminal}
            alt="Certificat Terminal"
          />
        </button>
      </div>
      {showBigPictures === true && certif !== "" && (
        <BigPictures setShowBigPictures={setShowBigPictures} certif={certif} />
      )}
    </div>
  );
}

export default Formation;
