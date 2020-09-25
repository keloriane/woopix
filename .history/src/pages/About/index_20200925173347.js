import React,{useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./../../global/Container";
import Title from "../../components/Title/Title";
import Menu from "./../Menu/"
import gsap from "gsap"

export const About = (props) => {
  const AboutWrapper = styled.div`
  .text-letter{
    overflow: hidden;
  }
  .chars{
    overflow:hidden;
    display: block;
  }
    #about {
      
      display: flex;
      align-items: center;
      font-family: "Futura PT", sans-serif;
    }
    .about-wrapper {
      display: flex;
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
    @media screen and (min-width: 596px) {
      #about {
        .about-wrapper {
          width: 100%;
          max-width: 643px;
          height: 804px;
          margin: auto;
          flex-direction: column;
          justify-content: space-around;

          
        }
        .text-container {
          width: 100%;
          max-width: 625.92px;
          height: 429px;
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
        .call-to-action {
          button {
            width: 308.2px;
            height: 68.7px;
            a {
              font-weight: 600;
              font-size: 30.489px;
              line-height: 39px;
              letter-spacing: 0.04em;
              color: white;
            }
          }
        }
      }
    }
    @media screen and (min-width: 992px) {
      .text-letter{
        display: flex;
      }
      .chars{

        display: flex;
        justify-content: center;
      }
      #about {
        height: 100vh;
        width: 100vw;
        .about-wrapper {
          width: 100%;
          max-width: 1054px;
          height: 475px;
          .text-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 886px;
            height: 128px;
            .inner-text {
              width: 100%;
              max-width: 420px;
              p {
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 160.2%;
                /* or 32px */

                color: rgba(0, 0, 0, 0.6);
              }
            }
          }
          .call-to-action {
              display: flex;
              justify-content: center;

            button {
              width: 171px;
              height: 38px;
                
              a {
                font-weight: 600;
                font-size: 17px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  `;

const aboutTl = gsap.timeline({paused: true})
  useEffect(() => {
        
        //Split each word from a tag
        let titleArray = [];
        function splitWord(word) {
            return [...word]
            .map(letter => `<span class="chars">${letter}</span>`)
            .join("");
        }
        const words = [...document.querySelectorAll(".text-letter")];
        // eslint-disable-next-line
        words.map(word => {
            word.innerHTML = splitWord(word.textContent);
            const newLetter = [...word.querySelectorAll(".chars")]; 
            // eslint-disable-next-line
            newLetter.map(letter => {
                titleArray.push(letter);
            });
        }); 
        let chars = document.querySelectorAll('.chars')

     aboutTl
     .from("#about",.8,{ opacity:0})
     .staggerFrom(".chars",.2,{y:"100%", opacity:0},.07)
     .staggerFrom(".inner-text",1,{y:"100%", opacity:0},.2)

        aboutTl.play()
    }, [])

    const changePage=(e, destination) => {
      e.preventDefault();
      aboutTl.reverse();
      const timelineDuration = aboutTl.duration()*1000;
      setTimeout(() => {
          props.history.push(destination);
        }, timelineDuration);
    }
  return (
    <Container>
      <AboutWrapper>
      <Menu 
          animation1={e => changePage(e,'/')}
          animation2={e => changePage(e,'/services')}
          animation3={e => changePage(e,'/about')}
          animation4={e => changePage(e,'/portfolio')}
          animation5={e => changePage(e,'/contact')}
        />
        <div id="about">
          <div className="about-wrapper">
          <Title num="01" firstP="à propos" secondP="de woopix" className="text-letter"  />
            <div className="text-container">
              <div className="inner-text">
                <p>
                  Woopix est une <span>agence de communication</span> qui
                  propose des <span>outils marketings</span> et des services{" "}
                  <span>complets</span> en matière de communication, sur
                  internet et sur tout support imprimé.
                </p>
              </div>
              <div className="inner-text">
                <p>
                  Au fil des années et des projets réalisés, Woopix s’est
                  perfectionné dans le développement{" "}
                  <span>
                    de site internet et la gestion des réseaux sociaux
                  </span>
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
    </Container>
  );
};

export default About;
