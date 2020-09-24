import React, { useEffect } from "react";

import homeImage from "./../../assets/img/home.png";
import styled from "styled-components";

export const Home = () => {
  const HomeContainer = styled.div`
    .home {
      width: 100vw;
      height: 100vh;
      .home-wrapper {
        .title-home-container {
          margin: 0 auto;
          h1 {
            font-family: "Futura PT";
            font-style: normal;
            font-weight: bold;

            text-transform: uppercase;
            color: #1b065e;
            .green {
              text-transform: uppercase;
              color: #8dc63f;
            }
          }
        }
        .image-container {
          .bg-green {
            z-index: -1;
          }
        }
      }
    }
    @media screen and (max-width: 596px) {
      .home {
        height: 100vh;
        display: flex;
        align-items: center;
        .home-wrapper {
          height: 665px;
          margin: auto auto;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          .title-home-container {
            width: 100%;
            max-width: 278px;
            h1 {
              font-size: 28.4746px;
              line-height: 141.83%;
              text-align: center;
            }
            .call-to-action-home {
              display: none;
            }
          }
          .image-container {
            .bg-green {
              display: none;
            }
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

    @media screen and (max-width: 992px) {
      .home {
        .home-wrapper {
        }
        .title-home-container {
          max-width: 515px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          h1 {
            font-size: 51.4436px;
            line-height: 126.83%;
            text-align: left;
            text-transform: uppercase;
          }
          .call-to-action-home {
            display: none;
          }
        }
        .image-container {
          display: block;
          margin: 0 auto;
          max-width: 562px;
          width: 100%;
          position: relative;
          .bg-green {
            display: block;
            background-color: #8dc63f;
            width: 367px;
            height: 450px;
            position: absolute;
            right: -32px;
            bottom: -32px;
          }
        }
      }
    }
    @media screen and (min-width: 992px) {
      .home {
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
        .home-wrapper {
          display: flex;
          flex-direction: row;
          position: relative;
          width: 100%;
          max-width: 938px;
          height: 504px;

          margin: 0 auto;
          .main-logo-container {
          }
          .title-home-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            max-width: 442px;
            h1 {
              font-weight: bold;
              font-size: 45.5164px;
              line-height: 126.83%;
              text-align: left;
            }
            .call-to-action-home {
              display: block;
              text-align: left;
              margin-top: 35px;
              button {
                width: 177px;
                height: 38px;
                border: 1px solid #8dc63f;
                box-sizing: border-box;
                border-radius: 2px;
                background: none;
                font-weight: bold;
                color: #8dc63f;
              }
            }
          }
          .image-container {
            position: relative;
            max-width: 495px;
            width: 100%;
            .bg-green {
              width: 313.87px;
              height: 384.99px;
              position: absolute;
              right: -50px;
              bottom: -36px;
              background-color: #8dc63f;
            }

            img {
              position: absolute;
              left: -50px;
              z-index: -1;
            }
          }
          .call-to-action-home {
            display: none;
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
              <span className="green">Agence de Communication & Marketing</span>
            </h1>
            <div className="call-to-action-home">
              <button className="home-button">En savoir plus</button>
            </div>
          </div>
          <div className="image-container">
            <div className="bg-green"></div>
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
