import React, {useEffect, useState, useRef} from "react";
import CallToAction from "./../../components/CallToAction";
import {PortfolioWrapper} from "./style";
import Container from "./../../global/Container";
import Slide from './component/Slide'
import {Link} from "react-router-dom"
import slide1 from "./../../assets/img/slide1.png"
import slide2 from "./../../assets/img/slide2.png"
import slide3 from "./../../assets/img/slide3.png"
import slide4 from "./../../assets/img/slide4.png"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {STRAPI_URL} from "./../Helpers";

gsap.registerPlugin(ScrollTrigger)
const Portfolio = (props) => {

    const myRef = useRef(null);
    const [slides, setSlides] = useState([])
    const [slider, setSlider] = useState({
        data: [
            {
                src: slide1
            },
            {
                src: slide2
            },
            {
                src: slide3
            },
            {
                src: slide4
            },

        ]
    })


    useEffect(() => {
        const path = "sliders"

        console.log("=====>", STRAPI_URL);

        fetch(`${STRAPI_URL}/${path}`)
            .then(response => response.json())
            .then((dataResponse) => {
                console.log('==============>', dataResponse);
                /*return null*/
                return setSlides(dataResponse)
            })

    }, [])


    console.log("slides =>", slides)


    useEffect(() => {
        const portfolioTl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                id: "#portfolio",
                trigger: "#portfolio",
                start: "center center+=200px",



            }
        })
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
        portfolioTl
            .from(".green-background", 1, {width:0})
            .staggerFrom(".chars", .3, {y: "100%", opacity: 0, delay: -.5}, .03)
            .fromTo(".slide", .7, {  x:"100%"},{  x:"0%", stagger:0.03})


    }, [])
    console.log(slides)

    const nextSlide = (e) =>{
        const slide = myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if(slide.scrollLeft <= 0){
            slide.scrollLeft = slide.scrollWidth;
        }
    }

    const prevSlide = () =>{
        const slide = myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)){
            slide.scrollLeft = 0;
        }
    };

    return (
        <Container>
            <PortfolioWrapper id="global-wrapper">

                <section id="portfolio">
                    <div className="green-background">
                    </div>
                    <div className="portfolio-wrapper">
                        <div className="main-title">
                            <div className="number-title">
                                <h2 className="num">03</h2>
                            </div>
                            <div className="title">
                                <h2 className="text-letter">Notre</h2>
                                <h2 className="text-letter">portfolio</h2>
                            </div>
                        </div>
                        <div className="portfolio-container">

                            <div className="portfolio-slider" ref={myRef}>
                                {
                                   <Slide data={slider.data} />
                                }

                            </div>
                            <div className="button-container">
                                <button className={"prev"} onClick={(e) => prevSlide(e)}>
                                    prev
                                </button>
                                <button className={"next"} onClick={(e) => nextSlide(e)}>
                                    next
                                </button>

                            </div>
                        </div>
                        <CallToAction
                            link="/contact"
                            buttonTxt="Prendre rendez-vous"
                            className="rdv"
                        />
                    </div>
                </section>
            </PortfolioWrapper>
        </Container>
    );
};
export default Portfolio
