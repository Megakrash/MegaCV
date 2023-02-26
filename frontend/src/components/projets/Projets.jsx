import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaGithub,
  FaJira,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { SiEslint, SiPrettier } from "react-icons/si";

function Projets() {
  return (
    <div className="projets">
      <div className="projets_box">
        <div className="projets_box_link">
          <a
            className="projets_box_link_logo"
            href="https://wild-movies.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projets_box_link_logo_pic"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/wildmovies.svg`}
              alt="logo WildMovies"
            />
          </a>
          <div className="projets_box_link_name">
            <a
              href="https://wild-movies.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="projets_box_link_name_title">Wild Movies</p>
            </a>
            <a
              href="https://github.com/Megakrash/WildMovies"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="gitLink" />
            </a>
          </div>
        </div>
        <div className="projets_box_infos">
          <p>
            Projet n°2 lors de la formation "Développeur web" à la Wild Code
            School de Nantes.
          </p>
          <p>
            L'application est un moteur de recherche de films et de séries basé
            sur l'API "The Movies Database" (TDMB).
          </p>
          <p>
            Une partie recherche complète type "E-commerce", avec des nombreux
            filtres pour personnaliser au maximum la recherche.
          </p>
          <p>
            Intégralement responsive, vous cherchez / trouvez / consultez films,
            séries, acteurs, réalisateurs, scénaristes...
          </p>
        </div>
        <div className="projets_box_code">
          <FaReact className="faIcon" />
          <FaSass className="faIcon" />
          <FaJsSquare className="faIcon" />
          <FaGithub className="faIcon" />
          <SiEslint className="faIcon" />
          <SiPrettier className="faIcon" />
          <FaJira className="faIcon" />
          <DiVisualstudio className="faIcon" />
        </div>
      </div>
      <div className="projets_box">
        <div className="projets_box_link">
          <a
            className="projets_box_link_logo"
            href="http://spherus.eu/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projets_box_link_logo_pic"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/spherus.png`}
              alt="logo Spherus"
            />
          </a>
          <div className="projets_box_link_name">
            <a href="http://spherus.eu/" target="_blank" rel="noreferrer">
              <p className="projets_box_link_name_title">Spherus</p>
            </a>
            <a
              href="https://github.com/Megakrash/Spherus-"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="gitLink" />
            </a>
          </div>
        </div>
        <div className="projets_box_infos">
          <p>
            Projet n°3 lors de la formation "Développeur web" à la Wild Code
            School de Nantes.
          </p>
          <p>
            Développement d'une plateforme d'hébergement vidéo pour la société
            partenaire <span>Origins Digital</span>.
          </p>
          <p>
            Avec un modèle "freemium", les utilisateurs inscrits ont accès à
            plus de contenus, des favoris et la personnalisation de leur profil.
          </p>
          <p>
            Le principal intérêt du projet est la gestion intégrale du site en
            back-office sur un modèle "headlless CMS".
          </p>
          <p>
            Outre la possibilité d'administrer l'ensemble des contenus et des
            utilisateurs, une partie entière est dédiée à la gestion de l'ordre
            et du nombre de contenus à afficher.
          </p>
        </div>
        <div className="projets_box_code">
          <FaReact className="faIcon" />
          <FaSass className="faIcon" />
          <FaNodeJs className="faIcon" />
          <FaJsSquare className="faIcon" />
          <FaGithub className="faIcon" />
          <SiEslint className="faIcon" />
          <SiPrettier className="faIcon" />
          <FaJira className="faIcon" />
          <DiVisualstudio className="faIcon" />
        </div>
      </div>
      <div className="projets_box">
        <div className="projets_box_link">
          <a
            className="projets_box_link_logo"
            href="http://spherus.eu/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projets_box_link_logo_pic"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/mindtrip.png`}
              alt="logo Mindtrip"
            />
          </a>
          <div className="projets_box_link_name">
            <a href="http://spherus.eu/" target="_blank" rel="noreferrer">
              <div className="funky-container">
                <p className="funky-base">MindTrip</p>
                <p className="funky-letter fl-1">MindTrip</p>
                <p className="funky-letter fl-2">MindTrip</p>
                <p className="funky-letter fl-3">MindTrip</p>
                <p className="funky-letter fl-4">MindTrip</p>
                <p className="funky-letter fl-5">MindTrip</p>
                <p className="funky-letter fl-6">MindTrip</p>
                <p className="funky-letter fl-7">MindTrip</p>
                <p className="funky-letter fl-8">MindTrip</p>
              </div>
            </a>
            <a
              href="https://github.com/Megakrash/Mindtrip"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="gitLink" />
            </a>
          </div>
        </div>
        <div className="projets_box_infos">
          <p>
            Dans le cadre du "Hackathon" de décembre 2022, 4 développeurs
            novices et 20 heures devant eux...
          </p>
          <p>
            Développement d'un site de voyage ou les développeurs fous vous
            proposent de faire un "trip" assez particulier.
          </p>
          <p>
            Des carousels d'images, les animations CSS les plus folles et bien
            sur la fabrication de votre voyage sont assurés.
          </p>
          <p>
            Une fois toutes vos options choisies l'image d'une prévision de
            votre voyage vous est fournie par notre application et
            l'intelligence artificielle <span>DALL-E</span> d'OpenAI.
          </p>
        </div>
        <div className="projets_box_code">
          <FaReact className="faIcon" />
          <FaSass className="faIcon" />
          <FaJsSquare className="faIcon" />
          <FaGithub className="faIcon" />
          <SiEslint className="faIcon" />
          <SiPrettier className="faIcon" />
          <DiVisualstudio className="faIcon" />
        </div>
      </div>
      <div className="projets_box">
        <div className="projets_box_link">
          <a
            className="projets_box_link_logo"
            href="http://spherus.eu/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projets_box_link_logo_pic"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/spherus.png`}
              alt="logo Spherus"
            />
          </a>
          <div className="projets_box_link_name">
            <a href="http://spherus.eu/" target="_blank" rel="noreferrer">
              <p className="projets_box_link_name_title">Spherus</p>
            </a>
            <a
              href="https://github.com/Megakrash/Spherus-"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="gitLink" />
            </a>
          </div>
        </div>
        <div className="projets_box_infos">
          <p>
            Projet n°3 lors de la formation "Développeur web" à la Wild Code
            School de Nantes.
          </p>
          <p>
            Développement d'une plateforme d'hébergement vidéo pour la société
            partenaire <span>Origins Digital</span>.
          </p>
          <p>
            Avec un modèle "freemium", les utilisateurs inscrits ont accès à
            plus de contenus, des favoris et la personnalisation de leur profil.
          </p>
          <p>
            Le principal intérêt du projet est la gestion intégrale du site en
            back-office sur un modèle "headlless CMS".
          </p>
          <p>
            Outre la possibilité d'administrer l'ensemble des contenus et des
            utilisateurs, une partie entière est dédiée à la gestion de l'ordre
            et du nombre de contenus à afficher.
          </p>
        </div>
        <div className="projets_box_code">
          <FaReact className="faIcon" />
          <FaSass className="faIcon" />
          <FaNodeJs className="faIcon" />
          <FaJsSquare className="faIcon" />
          <FaGithub className="faIcon" />
          <SiEslint className="faIcon" />
          <SiPrettier className="faIcon" />
          <FaJira className="faIcon" />
          <DiVisualstudio className="faIcon" />
        </div>
      </div>
    </div>
  );
}

export default Projets;
