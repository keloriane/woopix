import React from "react";
import Title from "../../components/Title/Title";
import CallToAction from "./../../components/CallToAction";
import Container from "./../../global/Container";
import styled from "styled-components";
import slide1 from "./../../assets/img/slide1.png";
import slide2 from "./../../assets/img/slide2.png";
import slide3 from "./../../assets/img/slide3.png";
import slide4 from "./../../assets/img/slide4.png";
import slide5 from "./../../assets/img/slide5.png";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"
import SwiperCore from "swiper";

export const Portfolio = () => {
  
  const PortfolioWrapper = styled.div`
    #portfolio {
      font-family: "Futura PT", sans-serif;
    }
    @media screen and (max-width: 596px) {
      #portfolio {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .portfolio-wrapper {
          height: 557px;
          display: flex;
          flex-direction: column;
          margin: auto;
          justify-content: space-between;
          align-items: center;
          .portfolio-container {
            width: 100%;
            position: relative;
            .green-background {
              position: absolute;
              width: 100vw;
              height: 277px;
              background-color: ${(props) => props.theme.green};
              z-index: -1;
            }
            .portfolio-slider {
              height: 295px;
              display: flex;
              width: 100vw;
              overflow: hidden;
              .slider-item {
                min-width: 160px;
              }
            }
          }
        }
      }
    }
    @media screen and (min-width: 596px) {
      #portfolio {
        width: 100vw;
        height: 100vh;
        .portfolio-wrapper {
          display: flex;
          flex-direction: column;
          height: 1000px;
          width: 100%;
          max-width: 674px;
          justify-content: space-around;
          margin: 0 auto;
          .portfolio-container {
            .green-background {
              width: 100%;
              height: 380px;
              right: 0;
              top: 40%;
              position: absolute;
              background-color: ${(props) => props.theme.green};
              z-index: -1;

            }
          }
          .portfolio-slider {
            display: flex;
          }
        }
      }
    }

    @media screen and (min-width: 992px){
      #portfolio{
        
        .portfolio-wrapper{
          max-width: 1025px;
          display: flex;
          justify-self: flex-end;
          justify-content: center;
          .portfolio-container{
            .green-background{
              width: 60%;
            }
          }

        }

      }
    }
    img{
      height: 100%;
      max-height: 267px;
    }
  `;
  return (
    <Container>
      <PortfolioWrapper>
        <div id="portfolio">
          <div className="portfolio-wrapper">
            <Title num="03" firstP="Notre" secondP="Portfolio" />
            <div className="portfolio-container">
              <div className="green-background"></div>
              <div className="portfolio-slider">
                <Swiper 
                slidesPerView={4}
                centeredSlides={true} 
                spaceBetween ={30}
                className="slider-items"
                
                >
                  <SwiperSlide className="slider-item">

                      <img src={slide1} alt="" />
                   </SwiperSlide>
                  <SwiperSlide>

                      <img src={slide2} alt="" />
                   </SwiperSlide>
                  <SwiperSlide>

                      <img src={slide3} alt="" />
                   </SwiperSlide>
                  <SwiperSlide>

                      <img src={slide4} alt="" />
                   </SwiperSlide>
                  <SwiperSlide>

                      <img src={slide5} alt="" />
                   </SwiperSlide>
                  <SwiperSlide>

                      <img src={slide3} alt="" />
                   </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <CallToAction
              link="/contact"
              buttonTxt="Prendre rendez-vous"
              className="rdv"
            />
          </div>
        </div>
      </PortfolioWrapper>
    </Container>
  );
};
