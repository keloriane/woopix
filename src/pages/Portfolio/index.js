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
import {arrowLeft} from './../../assets/img/left-arrow.svg'
import {arrowRight} from './../../assets/img/right-arrow.svg'

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
            .fromTo(".slide", .7, {  x:"100%", opacity:0},{  x:"0%", stagger:0.03, opacity:1})


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
        console.log("bleh")
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
                        <div className="button-container">
                            <button className={"prev"} onClick={(e) => prevSlide(e)}>
                                <svg width="10" height="14" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.60675 0.428531C7.08249 -0.0337941 6.23234 -0.0337941 5.70808 0.428531L0.393245 5.11547C-0.131082 5.57785 -0.131082 6.32745 0.393245 6.78983L5.70794 11.4768C5.96984 11.7075 6.31433 11.8235 6.65728 11.8235C7.00017 11.8235 7.34464 11.7077 7.60655 11.4768C8.13088 11.0145 8.13095 10.2648 7.60662 9.80241L4.58377 7.13659L3.20605 5.95266L4.5838 4.76871L7.60675 2.10289C8.13108 1.64051 8.13108 0.890914 7.60675 0.428531Z" fill="white"/>
                                </svg>
                            </button>
                            <button className={"next"} onClick={(e) => nextSlide(e)}>

                                <svg width="10" height="14" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.393246 0.428531C0.917507 -0.0337941 1.76766 -0.0337941 2.29192 0.428531L7.60675 5.11547C8.13108 5.57785 8.13108 6.32745 7.60675 6.78983L2.29206 11.4768C2.03016 11.7075 1.68567 11.8235 1.34272 11.8235C0.999828 11.8235 0.655355 11.7077 0.393453 11.4768C-0.130875 11.0145 -0.130949 10.2648 0.393379 9.80241L3.41623 7.13659L4.79395 5.95266L3.4162 4.76871L0.393246 2.10289C-0.131082 1.64051 -0.131082 0.890914 0.393246 0.428531Z" fill="white"/>
                                </svg>

                            </button>

                        </div>
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

                        </div>
                        <div className="call-to-action">
                            <button>
                                <Link to={"/contact"}>Nous contacter   </Link>
                            </button>
                        </div>
                    </div>
                </section>
            </PortfolioWrapper>
        </Container>
    );
};
export default Portfolio
