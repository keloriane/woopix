import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import contactImage from "./../../assets/img/contact-image.png";
import Footer from "./../Footer/";
import Menu from "./../Menu/"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)
const Contact = (props) => {
  const ContactWrapper = styled.div`
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
          color: ${props => props.theme.blue};
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
    @media screen and (max-width: 596px){
        .main-title {
            display: flex;
            font-style: normal;
            align-items: center;
            position: relative;
         
            width: 311px;
            height: 72px;
            .title {
              position: absolute;
              left: 107px;
              h2 {
                font-weight: bold;
                font-size: 34px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: ${props=>props.theme.blue};
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

    }
    @media screen and (min-width: 596px){
        .main-title {
            display: flex;
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

                color: ${props=>props.theme.blue};
              }
            }
          }
    }
    @media screen and (min-width: 992px){
        .main-title {
            display: flex;
            max-width: 545px;
            width: 100%;
            height: 165px;
            .number-title {
              h2 {
                font-size: 134.475px;
                line-height: 107.33%;
              }
            }
            .title {
              h2 {
                font-size: 59.7665px;
                line-height: 107.33%;
              }
            }
          }
    }
    #contact {
      
      position: relative;
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
              .call-to-action{
      button{
      width: 200.51px;
height: 63.45px;
background: #8DC63F;
border: 1.65336px solid #8DC63F;
box-sizing: border-box;
border-radius: 3.30672px;
a{
color: white;
text-decoration:none;
font-weight: bold;

}
      }
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
  useEffect(() => {
  let ContactTl = gsap.timeline({
      scrollTrigger:{
        trigger: "#contact",
        id: "#contact",
        start: "center center+=200px",

      }
     });
    let titleArray = [];

    function splitWord(word) {
      return [...word]
          .map(letter => `<span class="chars-contact">${letter}</span>`)
          .join("");
    }

    const words = [...document.querySelectorAll(".text-letter-contact")];
    // eslint-disable-next-line

    words.map(word => {
      word.innerHTML = splitWord(word.textContent);
      const newLetter = [...word.querySelectorAll(".chars-contact")];
      // eslint-disable-next-line
      newLetter.map(letter => {
        titleArray.push(letter);
      });
    });
    const charss = document.querySelectorAll(".chars-contact")
    ContactTl
    .from("image-container, img", .6, { right: "100%" })
    .staggerFrom(charss, 0.3, { y: "100%", opacity: 0, delay:-.3 }, 0.03)
    .staggerFrom(".contact-text", 0.3, { y: "100%", opacity: 0, delay:-.3 }, 0.03);


  }, []);


  return (
    <>

      <ContactWrapper>
        <section id="contact">
          <div className="contact-wrapper">
            <div className="main-title">
              <div className="number-title">
                <h2 >05</h2>
              </div>
              <div className="title">
                <h2 className="text-letter-contact">Prendre </h2>
                <h2 className="text-letter-contact">rendez-vous</h2>
              </div>
            </div>

            <div className="image-container">
              <img src={contactImage} alt="" />
            </div>
            <div className="text-wrapper">
              <div className="text-container">
                <p className={"contact-text"}>
                  Prenez contact, nous vous accueillons dans nos bureaux sur Rendez-vous, ou nous venons vous rencontrez chez Vous
                </p>
              </div>
              <div className="time-opening">
                <p className="day">LUNDI – VENDREDI</p>
                <p className="time">10:00 ~ 18.00</p>
              </div>
            </div>
          <div className="call-to-action">
            <button>
              <Link to="/services">En savoir plus</Link>
            </button>
          </div>
          </div>
        </section>
      </ContactWrapper>

    </>
  );
};

export default Contact;
