import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import CallToAction from "./../../components/CallToAction/";
import Title from "./../../components/Title/Title.js";
import "swiper/swiper-bundle.css";

const OurServices = () => {
  const ServiceWrapper = styled.div`
    #our-service {
      font-family: "Futura PT";
      width: 100vw;
      height: 100vh;
      display: flex;
    }

    @media screen and (max-width: 596px) {
      #our-service {
        .services {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          height: 357px;
          margin: auto;
          .slider-container {
            .slider-title {
              h3 {
                font-style: normal;
                font-weight: bold;
                font-size: 20.6236px;
                line-height: 26px;
                color: #8dc63f;
              }
            }
          }
        }
      }
    }
    @media screen and (min-width: 596px) {
    }
    @media screen and (min-width: 992px) {
    }
  `;
  return (
    <ServiceWrapper>
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
          <CallToAction link="/nos-services" buttonTxt="Nos services" />
        </div>
      </div>
    </ServiceWrapper>
  );
};

export default OurServices;
