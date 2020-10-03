import React, {useEffect, useState} from "react";
import Title from "../../components/Title/Title";
import CallToAction from "./../../components/CallToAction";
import {PortfolioWrapper} from "./style";
import Container from "./../../global/Container";
import styled from "styled-components";
import slide1 from "./../../assets/img/slide1.png";
import slide2 from "./../../assets/img/slide2.png";
import slide3 from "./../../assets/img/slide3.png";
import slide4 from "./../../assets/img/slide4.png";
import slide5 from "./../../assets/img/slide5.png";
import Slide from './component/Slide'
import {withRouter} from "react-router-dom"
import axios from "axios"
import gsap from "gsap"


const Portfolio = (props) => {
    const [slides , setSlides]  = useState([])
    const [slidePosition , setSlidePosition ] = useState(slides[0])



    useEffect(()=>{
        axios.get('http://localhost:1337/slides',{
                'Accept': 'Application/json'
            }

        )
            .then((res) => {
                setSlides(res.data)

            })
    },[])


    console.log(slides)
    const nextSlide = () => {
        const newIndex = slides[0].index ++
        console.log(slides[newIndex])
    }
    const prevSlide = () => {

    }



    const portfolioTl = gsap.timeline({paused: true})
    useEffect(() => {
        portfolioTl
            .from(".green-background", 1, {x: "100%"})
            .staggerFrom(".chars", .3, {y: "100%", opacity: 0, delay: -.5}, .03)
            .staggerFrom(".swiper-slide", .7, {x: 100, opacity: 0, delay: -.5}, .05)

        portfolioTl.play()
    }, [])
    return (
        <Container>
            <PortfolioWrapper id="global-wrapper">
                <div id="portfolio">
                    <div className="green-background">

                    </div>
                    <div className="portfolio-wrapper">
                        <Title num="03" firstP="Notre" secondP="Portfolio"/>
                        <div className="portfolio-container">
                            <button onClick={nextSlide}>
                                next
                            </button>
                            <div className="portfolio-slider">
                                <div className="card-wrapper" style={{
                                    'transform': `translateX(-${slides.index*(100/slides.length)}%)`
                                }}>
                                {/*{*/}
                                {/*    slides.map(slide=>(*/}
                                {/*        <div>*/}
                                {/*            <img src={`http://localhost:1337${slide.image.url}`} alt=""/>*/}
                                {/*            <p>{slide.id}</p>*/}
                                {/*        </div>*/}


                                {/*    ))*/}
                                {/*}*/}

                                <Slide slide={slides} />

                                </div>

                            </div>
                        </div>
                        <CallToAction
                            link="/contact"
                            buttonTxt="Prendre rendez-vous"
                            className="rdv"
                        />
                    </div>
                </div>
            </PortfolioWrapper>
        </Container>
    );
};
export default withRouter(Portfolio)
