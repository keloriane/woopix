import React from "react";
import Title from "../../components/Title/Title";
import styled from "styled-components"





export const Portfolio = () => {
  
  const PortfolioWrapper = styled.div `
    
    @media screen and (max-width: 596px){
      #portfolio{
        height: 557px;
        display: flex;
        flex-direction: column;
      }
    }
  `
  return (
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
  );
};
