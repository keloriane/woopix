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
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        .home-wrapper{
            height: 565px;
            margin: auto;
            width: 100%;
        .title-home-container {
          width: 100%;
          max-width: 278px;
          margin: 0 auto;
          h1 {
            font-family: "Futura PT";
            font-style: normal;
            font-weight: bold;
            font-size: 28.4746px;
            line-height: 141.83%;
            text-align: center;
            text-transform: uppercase;
            color: #1b065e;
            .green {
              text-transform: uppercase;
              color: #8dc63f;
            }
          }
        }
        .image-container {
          img {
            width: 100%;
            max-width: 355px;
          }
        }
        .call-to-action-home {
          button {
            width: 204.84px;
            height: 44.54px;
            left: 96px;
            top: 648px;

            background: #8dc63f;
            border: 1px solid #8dc63f;
            box-sizing: border-box;
            border-radius: 2px;
            color: white;
            font-weight: bold;
          }
        }
      }
        }

    }
  `;

  return (
    <HomeContainer>
      <div className="home">
          <div className="home-wrapper">

        <div className="main-logo-container">
          <img src="" alt="" />
        </div>
        <div className="title-home-container">
          <h1>
            BIENVENUE SUR WOOPIX
            <span className="green"> Agence de Communication & Marketing</span>
          </h1>
        </div>
        <div className="image-container">
          <img src={homeImage} alt="" />
        </div>
        <div className="call-to-action-home">
          <button className="home-button">En savoir plus</button>
        </div>
      </div>
          </div>
    </HomeContainer>
  );
};
