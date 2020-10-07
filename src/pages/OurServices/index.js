import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CallToAction from "./../../components/CallToAction/";
import Title from "./../../components/Title/Title.js";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import {Link, withRouter} from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)
const OurServices = (props) => {




    const [service, setService] = useState([])
    useEffect(()=>{
        let titleArray = [];
    fetch("http://localhost:1337/info-services")
        .then((res)=> {
            console.log(res.json())
            setService(service)


        })
        function splitWord(word) {
            return [...word]
                .map(letter => `<span class="chars-service">${letter}</span>`)
                .join("");
        }

        const words = [...document.querySelectorAll(".text-letter-service")];
        // eslint-disable-next-line

        words.map(word => {
            word.innerHTML = splitWord(word.textContent);
            const newLetter = [...word.querySelectorAll(".chars-service")];
            // eslint-disable-next-line
            newLetter.map(letter => {
                titleArray.push(letter);
            });
        });
        const charss = document.querySelectorAll(".chars-service")
        const ourServicesTl = gsap.timeline({

            scrollTrigger:{
                trigger: "#our-service",
                id: "#service",
                start: "center center+=200px",





            }
        })
        ourServicesTl
            .from('#our-service', .5,{opacity: 0})
            .staggerFrom(charss,.3, {y: "100%", opacity: 0}, .03)
            .fromTo("ol li",.3, {y: "100%", opacity: 0, stagger:.03, delay:-.3},{y: "0%", opacity: 1, stagger:.03, delay:-.3})
            .fromTo(".text-container__services",.3,{y:"50%", opacity:0},{y:"0%",opacity:1})
    },[])


    const ServiceWrapper = styled.div`
.call-to-action{
text-align: center;
.call-services{
      width: 204.2px;
      height: 38.7px;
      border: 1px solid #8DC63F;
      box-sizing: border-box;
      border-radius: 2px;
      background-color: ${props => props.theme.green};
      color: white;
      margin: 0 auto;
      text-align: left;
      a{
        text-decoration:none;
        color: white;
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 600;
        font-size: 17.489px;
        line-height: 39px;
      }
}

}
     
      #our-service{
       width: 100%;
      max-width: 1200px;
      margin: 150px auto;
     
     
      display: flex;
      flex-direction: column;
      font-family: "Futura PT";
      .inner-wrapper{
      display:flex;
      justify-content: center;
      flex-wrap: wrap;
      .link-container{
        width: 100%;
        max-width:323px;
        display: flex;
          ol{
            height: 202px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            list-style: decimal-leading-zero;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            color: #000000;
            li{
            cursor: pointer;
            &:hover{
              color: ${props => props.theme.green};
            
            }
            }
          }
        
      }
      .text-container__services{
        width: 100%;
        max-width: 463px;
        height: 295px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 160.2%;


color: rgba(0, 0, 0, 0.6);
      }
      }
        .services{
        
        }
      }
  
  @media screen and (max-width: 450px){
    .inner-wrapper{
        padding:25px;
    }
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
              left: 81px;
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
    #our-service{
      .call-to-action{
        display:flex;
        justify-content: flex-start;
        max-width: 638px;
        width: 100%;
        button{
          
        }
      }
    }
        .main-title {
            display: flex;
            max-width: 545px;
            width: 100%;
            height: 165px;
            align-self: flex-end;
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
  
    
  `;

    console.log("service =>",service)

    return (
        <ServiceWrapper>
            <section id="our-service">
                <div className="main-title">
                    <div className="number-title">
                        <h2 className="">02</h2>
                    </div>
                    <div className="title">
                        <h2 className="text-letter-service">Nos</h2>
                        <h2 className="text-letter-service">services</h2>
                    </div>
                </div>
                        <div className="inner-wrapper">

                            <div className="link-container">
                                <ol>
                                    <li>Creation de site Internet</li>
                                    <li>Gestion de réseaux sociaux</li>
                                    <li>lettrage et signalétique</li>
                                    <li>Impression offset et digital</li>
                                    <li>Distribution</li>
                                </ol>
                            </div>
                            <div className="text-container__services">
                                <p>
                                    Peu d’indépendants prennent conscience à quel point il est important de posséder un
                                    site
                                    internet aujourd’hui. En effet, la plupart des gens se renseignent sur l’entreprise
                                    via
                                    internet avant même d’être client. Il est probablement aussi indispensable qu’un
                                    numéro
                                    de téléphone.
                                    Chez Woopix nous développons pour votre entreprise des sites de qualité à coût
                                    raisonnable. Nous avons un taux de satisfactions inégalable par nos concurrents.

                                </p>
                            </div>
                        </div>
                <div className="call-to-action">
                    <button className={"call-services"}>
                        <Link to={`/`}>Nos services</Link>
                    </button>
                </div>
            </section>

        </ServiceWrapper>
    );
};

export default withRouter(OurServices);
