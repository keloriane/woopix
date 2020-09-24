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
          h1 {
            font-size: 51.4436px;
            line-height: 126.83%;
            text-align: center;
            text-transform: uppercase;
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
        width: 100vw;
        height: 100vh;
        .home-wrapper {
          display: flex;
          flex-direction: row;
          position: relative;
          width: 100%;
          max-width: 938px;
          height: 100%;
          background-color: pink;
          .main-logo-container {
          }
          .title-home-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            max-width:600px;
            h1 {
              font-weight: bold;
              font-size: 45.5164px;
              line-height: 126.83%;
            }
            .call-to-action-home {
              width: 177px;
              height: 38px;
              left: 128px;
              top: 477px;

              border: 1px solid #8dc63f;
              box-sizing: border-box;
              border-radius: 2px;
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
              <span className="green">
                {" "}
                Agence de Communication & Marketing
              </span>
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
