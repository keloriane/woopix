import React, { useEffect } from "react";

import homeImage from "./../../assets/img/home.png";
import styled from "styled-components";

export const Home = () => {
  const HomeContainer = styled.div`
    @media screen and (max-width: 576px) {
      .home {
        display: flex;
        justify-content: center;
        flex-direction: column;

        .title-home-container {
            width: 100%;
            max-width: 210px;
            margin: 0 auto;
            h1{

          font-family: "Futura PT";
          font-style: normal;
          font-weight: bold;
          font-size: 28.4746px;
          line-height: 141.83%;
          text-align: center;
          text-transform: uppercase;
          color: #1B065E;
          &.green{
            color: #8DC63F;
          }
            }

        }
      }
    }
  `;

  return (
    <HomeContainer>
      <div className="home">
        <div className="main-logo-container">
          <img src="" alt="" />
        </div>
        <div className="title-home-container">
          <h1>
            BIENVENUE SUR WOOPIX Agence
            <span className="green">de Communication & Marketing</span>
          </h1>
        </div>
        <div className="image-container">
          <img src={homeImage} alt="" />
        </div>
        <div className="call-to-action-home">
          <button className="home-button"></button>
        </div>
      </div>
    </HomeContainer>
  );
};
