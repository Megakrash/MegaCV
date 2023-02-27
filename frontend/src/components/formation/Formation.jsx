import React from "react";

function Formation() {
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
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/wildlogo.png`}
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
            La formation mène à la préparation du titre professionnel {""}{" "}
            <span>Développeur Web et Web Mobile</span>, inscrit au RNCP de
            niveau 5.
          </p>
          <p>
            Formation "intensive" basée sur la pratique. L'apprentissage se base
            sur le développement de sites intéractifs qui utilisent les
            technologies
            <span>HTML</span>, <span>CSS (Sass)</span>,<span>JavaScript</span>,
            <span>React</span> et <span>NodeJS</span>.
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
        <img
          className="formation_box_img"
          src={`${
            import.meta.env.VITE_PORT_BACKEND
          }/assets/certificats/javaScript.jpg`}
          alt="logo Wild Code School"
        />
      </div>
      <div className="formation_box">
        <img
          className="formation_box_img"
          src={`${
            import.meta.env.VITE_PORT_BACKEND
          }/assets/certificats/angular.jpg`}
          alt="logo Wild Code School"
        />
      </div>
      <div className="formation_box">
        <img
          className="formation_box_img"
          src={`${
            import.meta.env.VITE_PORT_BACKEND
          }/assets/certificats/html.jpg`}
          alt="logo Wild Code School"
        />
      </div>
      <div className="formation_box">
        <img
          className="formation_box_img"
          src={`${
            import.meta.env.VITE_PORT_BACKEND
          }/assets/certificats/terminal.jpg`}
          alt="logo Wild Code School"
        />
      </div>
    </div>
  );
}

export default Formation;
