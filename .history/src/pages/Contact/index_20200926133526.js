import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import contactImage from "./../../assets/img/contact-image.png";
import Footer from "./../Footer/";
import gsap from "gsap";

const Contact = (props) => {
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
        .text-container {
          width: 100%;

          margin: 0 auto;
          p {
            font-style: normal;
            font-weight: normal;

            line-height: 160.2%;
            /* or 30px */

            color: rgba(0, 0, 0, 0.6);
          }
        }
        .time-opening {
          font-family: Futura PT;
          font-style: normal;
          font-weight: normal;

          line-height: 160.2%;
          /* or 32px */
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          margin-top: 20px;

          .day {
            color: rgba(0, 0, 0, 0.6);
          }
          .time {
            color: ${(props) => props.theme.green};
          }
        }
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
          width: 100%;
          max-width: 354px;
          height: 558px;
          margin: auto;
          .image-container {
            img {
              width: 100%;
              max-width: 354px;
            }
          }
          .title {
            max-width: 300px;
            width: 100%;

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
            }
          }
          .time-opening {
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
            width: 100%;
            max-width: 632.82px;
            height: 227.45px;
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 34.8511px;
              line-height: 160.2%;
              /* or 56px */

              color: rgba(0, 0, 0, 0.6);
            }
          }
          .time-opening {
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 36.6854px;
              line-height: 160.2%;
              /* or 59px */

              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
    @media screen and (min-width: 960px) {
      #contact {
        .contact-wrapper {
          flex-direction: row;
          width: 100%;
          max-width: 1260px;
          justify-content: space-between;
          .image-container {
            overflow: hidden;
            position: relative;
            max-width: 649px;
            width: 100%;
            top: 7%;
            height: 525px;
            img {
              position: absolute;
              top: 7%;
              width: 100%;
            }
          }
          .contact-title {
            width: 637px;
            position: absolute;
            right: 0;
            top: 0;
          }
          .main-title {
            width: 500px;
            position: absolute;
            right: 205px;
            top: 11%;
          }
          .text-container {
            width: 100%;
            max-width: 474px;
            height: 124px;
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 26px;
              line-height: 160.2%;
              /* or 42px */

              color: rgba(0, 0, 0, 0.6);
            }
          }
          .time-opening {
            width: 214px;
            height: 84px;
            font-style: normal;
            font-weight: normal;
            font-size: 26px;
            line-height: 160.2%;
            /* or 42px */

            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  `;
  let ContactTl = gsap.timeline({ paused: true });
  useEffect(() => {
    let ContactTl = gsap.timeline();
    ContactTl
    .from("image-container, img", .6, { right: "100%" })
    .staggerFrom(".chars", 0.3, { y: "100%", opacity: 0, delay:-.3 }, 0.03)
    .staggerFrom("p", 0.3, { y: "100%", opacity: 0, delay:-.3 }, 0.03);

    ContactTl.play();
  }, []);

  const changePage=(e, destination) => {
    e.preventDefault();
    ContactTl.reverse();
    const timelineDuration = ContactTL.duration()*1000;
    setTimeout(() => {
        props.history.push(destination);
      }, timelineDuration);
  }
  return (
    <>
      <ContactWrapper>
        <div id="contact">
          <div className="contact-wrapper">
            <Title
              num="04"
              firstP="prenez"
              secondP="rendez-vous"
              className="contact-title"
            />

            <div className="image-container">
              <img src={contactImage} alt="" />
            </div>
            <div className="text-wrapper">
              <div className="text-container">
                <p>
                  Rutrum id venenatis gravida porttitor mauris nunc metus.
                  Aliquet dictumst quam sed turpis velit dignissim.
                </p>
              </div>
              <div className="time-opening">
                <p className="day">LUNDI – VENDREDI</p>
                <p className="time">10:00 ~ 18.00</p>
              </div>
            </div>
          </div>
        </div>
      </ContactWrapper>
      <Footer />
    </>
  );
};

export default Contact;
