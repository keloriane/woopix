import React from "react";
import Title from "../../components/Title/Title";
import Container from './../../global/Container';
import styled from "styled-components"





export const Portfolio = () => {
  
  const PortfolioWrapper = styled.div `
    #portfolio{
      font-family: "Futura PT", sans-serif;

    }
    @media screen and (max-width: 596px){
      #portfolio{
        height: 557px;
        display: flex;
        flex-direction: column;
        .portfolio-container{
          width: 100%;
          position: relative;
          .green-background{
            position: absolute;
            width:100vw;
            height: 277px;
            background-color: ${(props) => props.theme.green}
          }

        }
        
      }
    }
  `
  return (
    <PortfolioWrapper>
    <div id="portfolio">
      <div className="portfolio-wrapper">
        <Title num="03" firstP="Notre" secondP="Portfolio" />
        <div className="portfolio-container">
          <div className="greenBackground">

          </div>
          <div className="portfolio-slider">
            <slide>
              <img src="" alt=""/>
            </slide>
            <slide>
              <img src="" alt=""/>
            </slide>
            <slide>
              <img src="" alt=""/>
            </slide>
          </div>
        </div>
      </div>
    </div>

    </PortfolioWrapper>
  );
};
