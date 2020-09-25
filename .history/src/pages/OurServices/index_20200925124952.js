import React from "react";
import styled from "styled-components";

const index = () => {
  const ServiceWrapper = styled.div``;
  return (
    <div>
      <div id="our-service">
        <div className="services">
          <Title num="02" firstP="nos" secondP="services" />
          <div className="slider-container">
            <div className="slider-title">
              <h3>02 Gestion des réseaux sociaux</h3>
            </div>
            <div className="slider-text">
              <p>
                Peu d’indépendants prennent conscience à quel point il est
                important de posséder un site internet aujourd’hui. En effet, la
                plupart des gens se renseignent sur l’entreprise via internet
                avant même d’être client. Il est probablement aussi
                indispensable qu’un numéro de téléphone. Chez Woopix nous
                développons pour votre entreprise des sites de qualité à coût
                raisonnable. Nous avons un taux de satisfactions inégalable par
                nos concurrents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
