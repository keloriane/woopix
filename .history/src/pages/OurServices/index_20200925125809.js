import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide } from "swiper/react";
import CallToAction from "./../../components/CallToAction/"
import Title from "./../../components/Title/Title.js"
import "swiper/swiper-bundle.css"

const OurServices = () => {
  const ServiceWrapper = styled.div`
    @media screen and (max-width:596px){
        #ou-services{
            .services{

            }
        }
        
    }
    @media screen and (min-width:596px){

    }
    @media screen and (min-width:992px){

    }
  `;
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
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
