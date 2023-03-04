import React from "react";

function Experience() {
  return (
    <div className="experience">
      <div className="experience_box">
        <div className="experience_box_link">
          <a
            className="experience_box_link_logo"
            href="https://ecophone44.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="experience_box_link_logo_pic ateq"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/ecophone.jpg`}
              alt="logo Ecophone44"
            />
          </a>
          <div className="experience_box_link_name">
            <a
              className="experience_box_link_name_title"
              href="https://ecophone44.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ecophone 44</p>
            </a>
            <p className="experience_box_link_name_date">2015-2020</p>
          </div>
        </div>
        <div className="experience_box_infos">
          <p>
            - Co-fondateur associé & gérant. Gestion administrative et
            comptable.
          </p>
          <p>- Communication globale et marketing.</p>
          <p>- Marchés public et appels d'offre.</p>
          <p>- Mise en place des contrats de maintenance B2B.</p>
          <p>- Revente de l'entreprise en juillet 2020.</p>
        </div>
      </div>
      <div className="experience_box">
        <div className="experience_box_link">
          <a
            className="experience_box_link_logo"
            href="https://ateq-uniforme.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="experience_box_link_logo_pic ateq"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/ateq.jpg`}
              alt="logo Ateq"
            />
          </a>
          <div className="experience_box_link_name">
            <a
              className="experience_box_link_name_title"
              href="https://ateq-uniforme.fr/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ateq</p>
            </a>
            <p className="experience_box_link_name_date">2014</p>
          </div>
        </div>
        <div className="experience_box_infos">
          <p>- Responsable des marchés public et appels d'offre.</p>
        </div>
      </div>
      <div className="experience_box">
        <div className="experience_box_link">
          <a
            className="experience_box_link_logo"
            href="https://www.prun.net/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="experience_box_link_logo_pic"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/prun.jpg`}
              alt="logo Prun"
            />
          </a>
          <div className="experience_box_link_name">
            <a
              className="experience_box_link_name_title"
              href="https://www.prun.net/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Prun' 92FM</p>
            </a>
            <p className="experience_box_link_name_date">2007-2012</p>
          </div>
        </div>
        <div className="experience_box_infos">
          <p>- Directeur de la structure, de l'antenne et des programmes.</p>
          <p>- Gestion administrative et comptable. </p>
          <p>
            - Objectifs et suivi de la mise en oeuvre de la ligne éditoriale, de
            la stratégie de communication et du développement technique.
          </p>
        </div>
      </div>

      <div className="experience_box">
        <div className="experience_box_link">
          <a
            className="experience_box_link_logo"
            href="https://labodessavoirs.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="experience_box_link_logo_pic"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/labo.jpg`}
              alt="logo Labo des savoirs"
            />
          </a>
          <div className="experience_box_link_name">
            <a
              className="experience_box_link_name_title"
              href="https://labodessavoirs.fr/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Le Labo des Savoirs</p>
            </a>
            <p className="experience_box_link_name_date">2010-2015</p>
          </div>
        </div>
        <div className="experience_box_infos">
          <p>- Membre fondateur.</p>
          <p>- Gestion administrative et comptable.</p>
        </div>
      </div>
      <div className="experience_box">
        <div className="experience_box_link">
          <a
            className="experience_box_link_logo"
            href="https://www.facebook.com/rntnantes/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="experience_box_link_logo_pic ateq"
              src={`${
                import.meta.env.VITE_PORT_BACKEND
              }/assets/images/gram.jpg`}
              alt="logo Gram"
            />
          </a>
          <div className="experience_box_link_name">
            <a
              className="experience_box_link_name_title"
              href="https://www.facebook.com/rntnantes/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Le Gram</p>
            </a>
            <p className="experience_box_link_name_date">2009-2012</p>
          </div>
        </div>
        <div className="experience_box_infos">
          <p>Groupement des Radios Associatives de la Métropole Nantaise.</p>
          <p>- Gestion administrative et comptable. (CA de 400K€ à 700K€)</p>
          <p>- Maître d'ouvrage de la Maison de la Radio associative.</p>
          <p>
            - Maître d'ouvrage des sites de diffusion FM et numérique sur
            Nantes, la Baule et la Roche-sur-Yon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
