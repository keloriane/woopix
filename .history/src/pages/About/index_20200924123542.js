import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const About = () => {
  const AboutWrapper = styled.div`
    #about {
      height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      font-family: "Futura PT", sans-serif;
    }
    .main-title {
      display: flex;
      font-style: normal;
      align-items: center;
      position: relative;
      width: 100%;
      .title {
        position: absolute;

        h2 {
          font-weight: bold;

          text-transform: uppercase;
          color: #1b065e;
          display: flex;
          align-items: center;
        }
      }
      .number-title {
        position: absolute;

        h2 {
          font-style: normal;

          text-transform: uppercase;
          color: #ececec;
        }
      }
    }
    @media screen and (max-width: 596px) {
      #about {
        .about-wrapper {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: space-around;
          height: 445px;
          margin: auto;

          .main-title {
            display: flex;
            font-style: normal;
            align-items: center;
            position: relative;
            width: 100%;
            max-width: 311px;
            height: 72px;
            .title {
              position: absolute;
              left: 81px;
              h2 {
                font-weight: bold;
                font-size: 34px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: #1b065e;
                display: flex;
                align-items: center;
              }
            }
            .number-title {
              position: absolute;

              h2 {
                font-style: normal;
                font-weight: 800;
                font-size: 92.2247px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: #ececec;
              }
            }
          }
          .text-container {
            max-width: 397px;
            width: 100%;
            margin: 0 auto;
            .inner-text {
              display: flex;
              justify-content: center;
              flex-direction: column;
              width: 100%;
              p {
                font-style: normal;
                font-weight: normal;
                font-size: 19px;
                line-height: 160.2%;
                /* or 30px */
                text-align: left;

                color: rgba(0, 0, 0, 0.6);
              }
            }
          }
          .call-to-action {
            button {
              width: 172px;
              height: 38px;
              background: #8dc63f;
              border: 1px solid #8dc63f;
              box-sizing: border-box;
              border-radius: 2px;
              a {
                text-decoration: none;
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 22px;
                /* identical to box height, or 129% */
                display: flex;
                align-items: center;
                letter-spacing: 0.04em;
                color: #ffffff;
                /* Inside Auto Layout */
                flex: none;
                order: 0;
                align-self: center;
                margin: 10px 0px;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 992px) {
      #about {
        .about-wrapper {
            width: 100%;
          max-width: 643px;
          height: 804px;
          margin: auto;
          .main-title {
            width: 530px;
            height: 160px;
            .number-title {
              h2 {
                font-weight: 800;
                font-size: 144px;
              }
            }
            .title {
              left: 147px;
              h2 {
                font-size: 64px;
                line-height: 107.33%;

                text-transform: uppercase;

                color: #1b065e;
              }
            }
          }
        }
        .text-container {
          width: 100%;
          max-width: 625.92px;
          height: 213.42px;
          margin: 0 auto;
          .inner-text {
            p {
              font-family: Futura PT;
              font-style: normal;
              font-weight: normal;
              font-size: 34.076px;
              line-height: 160.2%;
              span {
                color: ${(props) => props.theme.green};
              }
            }
          }
        }
      }
    }
  `;
  return (
    <AboutWrapper>
      <div id="about">
        <div className="about-wrapper">
          <div className="main-title">
            <div className="number-title">
              <h2>01</h2>
            </div>
            <div className="title">
              <h2>
                à propos <br></br>de woopix{" "}
              </h2>
            </div>
          </div>
          <div className="text-container">
            <div className="inner-text">
              <p>
                Woopix est une <span>agence de communication</span> qui propose
                des <span>outils marketings</span> et des services{" "}
                <span>complets</span> en matière de communication, sur internet
                et sur tout support imprimé.
              </p>
            </div>
            <div className="inner-text">
              <p>
                Au fil des années et des projets réalisés, Woopix s’est
                perfectionné dans le développement{" "}
                <span>de site internet et la gestion des réseaux sociaux</span>
              </p>
            </div>
          </div>
          <div className="call-to-action">
            <button>
              <Link to="/services">En savoir plus</Link>
            </button>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
