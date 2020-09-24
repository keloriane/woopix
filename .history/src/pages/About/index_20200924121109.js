import React from 'react';
import styled from 'styled-components';

export const About = () => {
    const AboutWrapper = styled.div`    
    #about{
        height: 100vh;
        width:100vw;
        display: flex;
        align-items: center;
        font-family: "Futura PT", sans-serif;
        

    }
    @media screen and (max-width: 596px){
        #about{
            
            .about-wrapper{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 445px;
        margin: 0 auto;

            .main-title{
                display: flex;
                font-style: normal;
                align-items: center;
                position: relative;
                width:100%;
                max-width: 311px;
                height: 72px;
                .title{
                    position: absolute;
                    left: 81px;
                h2{
                
                font-weight: bold;
                font-size: 34px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: #1B065E;
                display: flex;
                align-items: center;
                }

                }
                .number-title{
                    position: absolute;
                   

                  
              
                    h2{
                    
                    font-style: normal;
                    font-weight: 800;
                    font-size: 92.2247px;
                    line-height: 107.33%;
                    text-transform: uppercase;
                    color: #ECECEC;
                    
                    }
                    
                }

            }
            .text-container{
                max-width: 397px;
                width: 100%;
                margin: 0 auto;
                .inner-text{
                    display:flex;
                    justify-content: center;
                    flex-direction: column;
                    width:100%;
                    p{
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
        }
            }
    }
    

    
    `
    return (
        <AboutWrapper>
            <div id="about">
                <div className="about-wrapper">

                    <div className="main-title">
                        <div className="number-title">
                            <h2>
                                01

                        </h2>
                        </div>
                        <div className="title">
                            <h2>à propos <br></br>de woopix </h2>

                        </div>
                    </div>
                    <div className="text-container">
                        <div className="inner-text">
                            <p>Woopix est une agence de communication qui propose des outils marketings et des services complets en matière de communication, sur internet et sur tout support imprimé. </p>
                        </div>
                        <div className="inner-text">
                            <p>
                                Au fil des années et des projets réalisés, Woopix s’est perfectionné dans le développement de site internet et la gestion des réseaux sociaux
                    </p>
                        </div>
                    </div>
                    <div className="call-to-action">
                        <button>
                            En savoir plus
                </button>
                    </div>
                </div>
            </div>
        </AboutWrapper>
    )
}

export default About;