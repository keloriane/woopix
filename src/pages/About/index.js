import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Container from "./../../global/Container";
import Title from "../../components/Title/Title";
import {doted} from "./../../assets/img/doted.png";
import {AboutWrapper} from "./style.js"
import parse from "html-react-parser/dist/html-react-parser"
import Menu from "./../Menu/"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import axios from "axios";
import {TitleMain} from "./../../global/Container";

gsap.registerPlugin(ScrollTrigger);
export const About = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {

        const aboutTl = gsap.timeline({
            scrollTrigger: {
                id: "#about",
                trigger: "#about",
                start: "top center-=300px",
                markers: true
            }
        })


        axios.get('https://woopix-prod.herokuapp.com/About-woopix')
            .then((res) => {
                    console.log(res.data)
                    setData(res.data)


                }
            )
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




        aboutTl

            .from("#about", .8, {opacity: 0})
            .staggerFrom(".chars", .3, {y: "100%", opacity: 0}, .03)
            .staggerFrom(".inner-text", .5, {y: "100%", opacity: 0, delay: -.4}, .2)


    }, [])


    return (
        <Container>
            <AboutWrapper>

                <div id="about">
                    <img src={doted} alt="" className={"doted"}/>
                    <div className="about-wrapper">
                        <TitleMain>
                            <div className="main-title">
                                <div className="number-title">
                                    <h2 className="text-letter">01</h2>
                                </div>
                                <div className="title">
                                    <h2 className="text-letter">à propos</h2>
                                    <h2 className="text-letter">de woopix</h2>
                                </div>
                            </div>

                        </TitleMain>
                        <div className="text-container">
                            <div className="inner-text">
                                <p dangerouslySetInnerHTML={{__html: data.text_one}}>

                                </p>
                            </div>
                            <div className="inner-text">
                                <p dangerouslySetInnerHTML={{__html: data.text_one}}>

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
