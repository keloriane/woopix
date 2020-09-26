import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import contactImage from "./../../assets/img/contact-image.png";

const Contact = () => {
  const ContactWrapper = styled.div`
    #contact {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      font-family: "Futura PT";
      .contact-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
    @media screen and (max-width: 596px) {
      #contact {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        font-family: "Futura PT";
        .contact-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 354px;
          height: 558px;
          margin: auto;
          .title {
            width: 300px;

            h2 {
              font-size: 34px;
            }
          }
          .text-container {
            width: 100%;
            max-width: 345px;
            height: 124px;
            margin: 0 auto;
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 19px;
              line-height: 160.2%;
              /* or 30px */

              color: rgba(0, 0, 0, 0.6);
            }
          }
          .time-opening {
            font-family: Futura PT;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 160.2%;
            /* or 32px */
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            margin-top: 20px;
            width: 345px;
            height: 124px;

            .day {
              color: rgba(0, 0, 0, 0.6);
            }
            .time {
              color: ${(props) => props.theme.green};
            }
          }
        }
      }
    }
    @media screen and (min-width: 596px) {
      #contact {
        .contact-wrapper {
          height: 100%;
          width: 100%;
          max-width: 560px;
          max-height: 999px;
          margin: 0 auto;
          .title {
            width: 100%;
            max-width: 480px;
          }
          .image-container {
            img {
              max-width: 649.33px;
              width: 100%;
            }
          }
          .text-container {
          }
        }
      }
    }
  `;

  return (
    <ContactWrapper>
      <div id="contact">
        <div className="contact-wrapper">
          <Title num="04" firstP="prenez" secondP="rendez-vous" />

          <div className="image-container">
            <img src={contactImage} alt="" />
          </div>
          <div className="text-container">
            <p>
              Rutrum id venenatis gravida porttitor mauris nunc metus. Aliquet
              dictumst quam sed turpis velit dignissim.
            </p>
          </div>
          <div className="time-opening">
            <p className="day">LUNDI – VENDREDI</p>
            <p className="time">10:00 ~ 18.00</p>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
