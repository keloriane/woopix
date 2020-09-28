import React,{useEffect} from "react";
import Title from "../../components/Title/Title";
import CallToAction from "./../../components/CallToAction";
import Container from "./../../global/Container";
import styled from "styled-components";
import slide1 from "./../../assets/img/slide1.png";
import slide2 from "./../../assets/img/slide2.png";
import slide3 from "./../../assets/img/slide3.png";
import slide4 from "./../../assets/img/slide4.png";
import slide5 from "./../../assets/img/slide5.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {withRouter} from "react-router-dom"
import "swiper/swiper-bundle.css";
import gsap from "gsap"
import SwiperCore from "swiper";
import Menu from "../Menu";

const Portfolio = (props) => {


    const PortfolioWrapper = styled.div`
    #portfolio {
      font-family: "Futura PT", sans-serif;
    }
    @media screen and (max-width: 596px) {
      #portfolio {
        max-width: 1015px;
        height: 552px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .portfolio-wrapper {
          height: 557px;
          display: flex;
          flex-direction: column;
          
          justify-content: space-between;
          align-items: center;
          .portfolio-container {
            width: 100%;
            position: relative;
            .green-background {
              position: absolute;
              width: 100%;
              height: 277px;
              background-color: ${(props) => props.theme.green};
              z-index: -1;
            }
            .portfolio-slider {
              height: 295px;
              display: flex;
              width: 100%;
              overflow: hidden;
              .swiper-slide {
                min-width: 160px;
                max-width: 160.75px;
              }
            }
          }
        }
      }
    }
    @media screen and (min-width: 596px) {
    .call-to-action{
    button{
        width: 219px;
    height: 53px;
    margin-top: 33px;
    }
    }
      #portfolio {
        width: 835px;
        height: 1070px;
        .portfolio-wrapper {
          display: flex;
          flex-direction: column;
          height: 1000px;
          width: 100%;
          max-width: 674px;
          justify-content: space-around;
          margin: 0 auto;
          .portfolio-container {
          display: flex;
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
  flow: hidden;
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
    #global-wrapper{
      overflow: hidden;
  }
    img{
      height: 100%;
      max-height:320px;
    }
  `;


        const portfolioTl = gsap.timeline({paused: true})
    useEffect(()=>{
        portfolioTl
            .from(".green-background", 1 , { x:"100%" })
            .staggerFrom(".chars",.3,{y:"100%", opacity:0, delay:-.5},.03)
            .staggerFrom(".swiper-slide", .7 , {x:100, opacity: 0, delay:-.5},.05)

        portfolioTl.play()
    },[])

    const changePage=(e, destination) => {
        e.preventDefault();
        portfolioTl.reverse();
        const timelineDuration = portfolioTl.duration()*1000;
        setTimeout(() => {
            props.history.push(destination);
        }, timelineDuration);
    }
    return (
        <Container>
            <Menu
                animation1={(e) => changePage(e, "/")}
                animation2={(e) => changePage(e, "/about")}
                animation3={(e) => changePage(e, "/tarifs-sites")}
                animation4={(e) => changePage(e, "/portfolio")}
                animation5={(e) => changePage(e, "/contact")}
                animation6={(e)=>changePage(e, "/gestion-reseaux-sociaux")}
            />
            <PortfolioWrapper id="global-wrapper">
                <div id="portfolio">
                    <div className="portfolio-wrapper">
                        <Title num="03" firstP="Notre" secondP="Portfolio"/>
                        <div className="portfolio-container">
                            <div className="green-background">

                            </div>
                            <div className="portfolio-slider">
                                <Swiper
                                    slidesPerView={4}
                                    centeredSlides={true}

                                    className="slider-items"

                                >
                                    <SwiperSlide className="slider-item">

                                        <img src={slide1} alt=""/>
                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <img src={slide2} alt=""/>
                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <img src={slide3} alt=""/>
                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <img src={slide4} alt=""/>
                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <img src={slide5} alt=""/>
                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <img src={slide3} alt=""/>
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
export default withRouter(Portfolio)
