import React, {useState} from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import CallToAction from "./../../components/CallToAction/";
import Title from "./../../components/Title/Title.js";
import "swiper/swiper-bundle.css";
import {withRouter} from "react-router-dom"

const OurServices = (props) => {


    const [service, setService] = useState({})

    const ServiceWrapper = styled.div`
    #our-service {
      font-family: "Futura PT";
      width: 100vw;
      height: 100vh;
      display: flex;
      overflow: hidden;
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
            width: 100%;
            /* max-width: 279px; */

            overflow: inherit;
            .swiper-wrapper {
              .swiper-slide-next {
                opacity: 0.5;
              }
            }
            .slider-title {
              h3 {
                font-style: normal;
                font-weight: bold;
                font-size: 20.6236px;
                line-height: 26px;
                color: #8dc63f;
              }
            }
            .slider-text {
              p {
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 160.2%;
                /* or 24px */

                color: rgba(0, 0, 0, 0.6);
              }
            }
          }
        }
      }
    }
    @media screen and (min-width: 596px) {
      #our-service {
        .services {
        height: 881px;
        margin: auto;
          .slider-container {
            .swiper-wrapper {
              .swiper-slide-next {
                opacity: 0.2;
              }
              .swiper-slide {
                width: 431px;
                height: 612px;
              }
            }
            .slider-title {
              h3 {
                font-style: normal;
                font-weight: bold;
                font-size: 35.9547px;
                line-height: 46px;

                color: #8dc63f;
              }
            }
            .slider-text {
              p {
                font-style: normal;
                font-weight: normal;
                font-size: 26.1507px;
                line-height: 160.2%;
                /* or 42px */

                color: rgba(0, 0, 0, 0.6);
              }
            }
          }
        }
      }
    }
    
    @media screen and (min-width: 992px) {
        #our-service{
          display: flex;
          align-items: center;
            .services{
              width: 970px;
              margin: auto;
              display: flex;
              align-items: center;
              
              .service-links-container{
                width: 100%;
                display: flex;
                justify-content: space-evenly;

                  .link-container{
                     width: 420px;
                  ul{
                    ol{
                      font-style: normal;
                      font-weight: 600;
                      font-size: 20px;
                      line-height: 26px;
                      color: #000000;
                      cursor: pointer;
                      &:hover{
                      color: ${props => props.theme.green};
                      }
                    }
                  }
                }
                .text-container{
                  width: 100%;
                  max-width: 465px;
                  p{
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 160.2%;
                  color: rgba(0, 0, 0, 0.6);
                  }
                }
                
              }
                #mobile-slider{
                    display: none;
                }
            }
        }
    }

    /* .swiper-slide:nth-child(2n) {
      width: 60%;
    }

    .swiper-slide:nth-child(3n) {
      width: 40%;
    }    */
  `;
    return (
        <ServiceWrapper>
            <div id="our-service">
                <div className="services">
                    <Title num="02" firstP="nos" secondP="services"/>
                    <Swiper
                        slidesPerView={2}
                        className="slider-container"
                        id="mobile-slider"
                        spaceBetween={50}
                    >
                        <SwiperSlide>

                            <div className="slider-title">
                                <h3>01 Gestion des réseaux sociaux</h3>
                            </div>
                            <div className="slider-text">
                                <p>
                                    Peu d’indépendants prennent conscience à quel point il est
                                    important de posséder un site internet aujourd’hui. En effet,
                                    la plupart des gens se renseignent sur l’entreprise via
                                    internet avant même d’être client. Il est probablement aussi
                                    indispensable qu’un numéro de téléphone. Chez Woopix nous
                                    développons pour votre entreprise des sites de qualité à coût
                                    raisonnable. Nous avons un taux de satisfactions inégalable
                                    par nos concurrents.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-title">
                                <h3>02 Gestion des réseaux sociaux</h3>
                            </div>
                            <div className="slider-text">
                                <p>
                                    Peu d’indépendants prennent conscience à quel point il est
                                    important de posséder un site internet aujourd’hui. En effet,
                                    la plupart des gens se renseignent sur l’entreprise via
                                    internet avant même d’être client. Il est probablement aussi
                                    indispensable qu’un numéro de téléphone. Chez Woopix nous
                                    développons pour votre entreprise des sites de qualité à coût
                                    raisonnable. Nous avons un taux de satisfactions inégalable
                                    par nos concurrents.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-title">
                                <h3>03 Gestion des réseaux sociaux</h3>
                            </div>
                            <div className="slider-text">
                                <p>
                                    Peu d’indépendants prennent conscience à quel point il est
                                    important de posséder un site internet aujourd’hui. En effet,
                                    la plupart des gens se renseignent sur l’entreprise via
                                    internet avant même d’être client. Il est probablement aussi
                                    indispensable qu’un numéro de téléphone. Chez Woopix nous
                                    développons pour votre entreprise des sites de qualité à coût
                                    raisonnable. Nous avons un taux de satisfactions inégalable
                                    par nos concurrents.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-title">
                                <h3>03 Gestion des réseaux sociaux</h3>
                            </div>
                            <div className="slider-text">
                                <p>
                                    Peu d’indépendants prennent conscience à quel point il est
                                    important de posséder un site internet aujourd’hui. En effet,
                                    la plupart des gens se renseignent sur l’entreprise via
                                    internet avant même d’être client. Il est probablement aussi
                                    indispensable qu’un numéro de téléphone. Chez Woopix nous
                                    développons pour votre entreprise des sites de qualité à coût
                                    raisonnable. Nous avons un taux de satisfactions inégalable
                                    par nos concurrents.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-title">
                                <h3>03 Gestion des réseaux sociaux</h3>
                            </div>
                            <div className="slider-text">
                                <p>
                                    Peu d’indépendants prennent conscience à quel point il est
                                    important de posséder un site internet aujourd’hui. En effet,
                                    la plupart des gens se renseignent sur l’entreprise via
                                    internet avant même d’être client. Il est probablement aussi
                                    indispensable qu’un numéro de téléphone. Chez Woopix nous
                                    développons pour votre entreprise des sites de qualité à coût
                                    raisonnable. Nous avons un taux de satisfactions inégalable
                                    par nos concurrents.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-title">
                                <h3>03 Gestion des réseaux sociaux</h3>
                            </div>
                            <div className="slider-text">
                                <p>
                                    Peu d’indépendants prennent conscience à quel point il est
                                    important de posséder un site internet aujourd’hui. En effet,
                                    la plupart des gens se renseignent sur l’entreprise via
                                    internet avant même d’être client. Il est probablement aussi
                                    indispensable qu’un numéro de téléphone. Chez Woopix nous
                                    développons pour votre entreprise des sites de qualité à coût
                                    raisonnable. Nous avons un taux de satisfactions inégalable
                                    par nos concurrents.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="service-links-container">
                        <div className="link-container">
                            <ul>
                                <ol> 01.Creation de site Internet</ol>
                                <ol>02.Gestion de réseaux sociaux</ol>
                                <ol>03.lettrage et signalétique</ol>
                                <ol>04.Impression offset et digital</ol>
                                <ol>05.Distribution</ol>
                            </ul>
                        </div>
                        <div className="text-container">
                            <p>
                                Peu d’indépendants prennent conscience à quel point il est important de posséder un site
                                internet aujourd’hui. En effet, la plupart des gens se renseignent sur l’entreprise via
                                internet avant même d’être client. Il est probablement aussi indispensable qu’un numéro
                                de téléphone.
                                Chez Woopix nous développons pour votre entreprise des sites de qualité à coût
                                raisonnable. Nous avons un taux de satisfactions inégalable par nos concurrents.

                            </p>
                        </div>
                    </div>
                    <CallToAction link="/nos-services" buttonTxt="Nos services"/>
                </div>
            </div>
        </ServiceWrapper>
    );
};

export default withRouter(OurServices);
