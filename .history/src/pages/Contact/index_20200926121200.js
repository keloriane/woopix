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
        width: 100%;
        max-width: 647px;
        margin:  auto;
        height: 984px;
        .title {
          width: 300px;

          h2 {
            font-size: 34px;
          }
        }
        .text-container {
          width: 632.82px;
          height: 227.45px;
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 19px;
            line-height: 160.2%;
            /* or 30px */

            color: rgba(0, 0, 0, 0.6);
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
              <p className="day">
              LUNDI – VENDREDI

              </p>
              <p className="day">
              10:00 ~ 18.00

              </p>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
