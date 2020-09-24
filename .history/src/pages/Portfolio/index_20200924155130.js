import React from "react";
import Title from "../../components/Title/Title";
import CallToAction from './../../components/CallToAction';
import Container from "./../../global/Container"
import styled from "styled-components"
import slide1 from "./../../assets/img/slide1.png"
import slide2 from "./../../assets/img/slide2.png"
import slide3 from "./../../assets/img/slide3.png"





export const Portfolio = () => {
  
  const PortfolioWrapper = styled.div `
    #portfolio{
      font-family: "Futura PT", sans-serif;

    }
    @media screen and (max-width: 596px){
      #portfolio{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .portfolio-wrapper{
          height: 557px;
          display: flex;
          flex-direction: column;
          margin: auto;
          justify-content: space-between;
          align-items: center;
          .portfolio-container{
            width: 100%;
            position: relative;
            .green-background{
              position: absolute;
              width:100vw;
              height: 277px;
              background-color: ${(props) => props.theme.green};
              z-index: -1;
            }
            .portfolio-slider{
              height: 295px;
              display: flex;
              width: 100vw;
              overflow: hidden;
              .slider-item{
                margin-left: 7.5px;
                margin-right: 7.5px;
              }
            }
  
          }
          
        }
        
      }
    }
    @media screen and (min-width: 596px){
      #portfolio{
        .portfolio-wrapper{
          .portfolio-container{
            .green-background{
              width: 607px;
              height: 380px;
              right: 0;
              top: 20%;
              position: absolute;
              background-color: ${(props) => props.theme.green};
              z-index:-1;
            }
          }
        }
      }
    }
  `
  return (
    <Container>

    <PortfolioWrapper>
    <div id="portfolio">
      <div className="portfolio-wrapper">
        <Title num="03" firstP="Notre" secondP="Portfolio" />
        <div className="portfolio-container">
          <div className="green-background">

          </div>
          <div className="portfolio-slider">
           <div className="slider-item">
             <img src={slide1} alt=""/>
           </div>
           <div className="slider-item">
             <img src={slide2} alt=""/>
           </div>
           <div className="slider-item">
             <img src={slide3} alt=""/>
           </div>
           <div className="slider-item">
             <img src={slide2} alt=""/>
           </div>
           <div className="slider-item">
             <img src={slide3} alt=""/>
           </div>
          </div>
        </div>
        <CallToAction link="/contact" buttonTxt='Prendre rendez-vous' className="rdv" />
        
      </div>
    </div>

    </PortfolioWrapper>
    </Container>
  );
};
