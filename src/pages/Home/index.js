import React, {useEffect} from "react";
import homeImage from "./../../assets/img/home.png";
import styled from "styled-components";
import Container from "./../../global/Container";
import {Link, withRouter} from "react-router-dom";
import About from "../About/";
import Portfolio from "../Portfolio/";
import Contact from "../Contact/";
import OurServices from "../OurServices";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Footer from "./../Footer/";
import {
    ScrollingProvider,
    useScrollSection,
    Section,
} from 'react-scroll-section';



gsap.registerPlugin(ScrollTrigger)
const Home = (props) => {
    let homeTl = gsap.timeline({paused: true});
    useEffect(() => {
        let path = document.querySelector('path');
        homeTl
            .fromTo(".home", .5, {opacity: 0}, {opacity: 1})
            .from(".green-layout", 0.7, {width: 0, transformOrigin: "left"})
            .fromTo(
                ".home-image",
                0.7,
                {x: "-100%",},
                {x: "0%", delay: -0.4}
            )
            .staggerFrom("h1", 0.7, {y: "100%", opacity: 0, delay: -0.6}, 0.05);
        homeTl.play();
    }, []);
    const changePage = (e, destination) => {
        e.preventDefault();
        homeTl.reverse();
        const timelineDuration = homeTl.duration() * 1000;
        setTimeout(() => {
            props.history.push(destination);
        }, timelineDuration);
    };


    return (
        <HomeContainer>
            <ScrollingProvider>
                <Container>


                    <div className="home">
                        <div className="home-wrapper">
                            <div className="bg-green">
                                <div className="green-layout"></div>
                            </div>
                            <div className="main-logo-container">

                            </div>
                            <div className="title-home-container">
                                <div className="logo-container">
                                    <svg width="296" height="117" viewBox="0 0 296 117" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.8323 81.8042C16.4029 82.1953 15.9496 82.5591 15.4749 82.8933C15.9741 82.5931 16.4307 82.2268 16.8323 81.8042Z"
                                            fill="#6D6E71"/>
                                        <path
                                            d="M235.64 46.0759V69.6308C235.64 55.7931 225.988 45.011 211.509 45.011C206.169 45.011 199.877 47.3042 196.251 52.5682L195.491 46.0638H184.608V64.1369C182.339 53.2882 173.429 45.1138 160.579 45.1138C148.959 45.1138 140.73 51.7695 137.653 61.0995C134.468 51.7937 126.088 45.1078 114.445 45.1078C101.703 45.1078 93.0398 53.149 90.7413 63.8646V47.5825L74.1326 30.9192L74.0361 72.5714L50.1095 49.1072L26.1828 72.5714C26.1828 59.9801 26.6775 43.4499 26.6775 43.4499L23.3836 44.775C23.3836 44.775 23.3836 36.038 23.3836 35.8323L19.7095 37.3328L20.1499 26.6233L13.9058 28.5413L13.0552 17.1904L3.01636 19.9676C10.0809 47.4615 9.4716 74.3623 9.4716 74.3623C9.23632 77.1517 8.98896 88.5267 15.589 92.2055C15.589 92.2055 23.4318 97.7357 29.6457 91.5157L50.1095 71.5791L70.5732 91.546C76.769 97.766 84.6239 92.2357 84.6239 92.2357C89.9208 89.2891 90.6568 83.5713 90.7292 81.2539V81.2237V75.6209C93.0097 86.3485 101.589 94.2929 114.529 94.2929C126.33 94.2929 134.534 87.7099 137.647 78.4465C140.73 87.7099 148.881 94.2929 160.681 94.2929C173.736 94.2929 182.4 86.2396 184.614 75.403V113.147L196.245 104.797V87.8672C199.588 93.0344 206.93 94.5652 211.883 94.5652C226.965 94.5652 235.616 83.6742 235.628 69.9212V93.4156H247.26V45.8702H235.64V46.0759ZM15.4744 82.8936C15.9482 82.5692 16.4016 82.2156 16.8318 81.8348C16.4283 82.2467 15.9718 82.6028 15.4744 82.8936ZM114.541 83.5834C106.053 83.5834 101.763 76.8915 101.763 69.7155C101.763 62.6363 106.149 55.7508 114.541 55.7508C122.384 55.7508 127.319 62.6363 127.319 69.7155C127.295 76.8431 123.03 83.5532 114.541 83.5532V83.5834ZM160.693 83.5834C152.205 83.5834 147.915 76.8915 147.915 69.7155C147.915 62.6363 152.301 55.7508 160.693 55.7508C168.536 55.7508 173.471 62.6363 173.471 69.7155C173.471 76.8431 169.182 83.5532 160.693 83.5532V83.5834ZM210.658 83.1054C202.779 83.1054 197.355 77.1335 197.307 69.7941C197.355 62.479 202.308 56.4829 210.658 56.4829C219.008 56.4829 223.961 62.4487 224.003 69.7941C224.045 77.1395 218.537 83.0752 210.658 83.0752V83.1054Z"
                                            fill="#455FA3"/>
                                        <path
                                            d="M279.669 69.4L295.047 46.6499V46.4442V46.2687V46.063H281.123L271.874 62.0365L262.626 46.063H248.702V46.2687V46.4442V46.6499L264.08 69.4L247.749 92.9247V93.1304V93.2091V93.4148H261.673L271.874 77.6349L282.076 93.4148H296V93.2091V93.1304V92.9247L279.669 69.4Z"
                                            fill="#455FA3"/>
                                        <path
                                            d="M248.322 32.9699C248.322 32.9397 248.322 32.9034 248.322 32.8731C248.322 32.8429 248.322 32.8066 248.322 32.7703C248.322 23.6944 234.591 23.6944 234.591 32.7703C234.591 32.8066 234.591 32.8368 234.591 32.8731C234.591 32.9094 234.591 32.9397 234.591 32.9699C234.591 42.0579 248.322 42.0579 248.322 32.9699Z"
                                            fill="#8DC63F"/>
                                        <path
                                            d="M24.0347 4.95542L24.0649 0L19.1782 0.713968L19.4376 5.85696L24.0347 4.95542Z"
                                            fill="#D7DF23"/>
                                        <path
                                            d="M18.2794 13.3053L18.1165 7.74487L12.3008 8.90053L12.886 14.7272L18.2794 13.3053Z"
                                            fill="#8DC63F"/>
                                        <path
                                            d="M9.58634 6.5105C6.03294 7.15791 0 8.42248 0 8.42248C1.43584 14.0495 2.31061 17.5468 2.31061 17.5468L10.6481 15.3564L9.58634 6.5105Z"
                                            fill="#39B54A"/>
                                        <path
                                            d="M32.5418 16.6575L27.1303 18.1641L26.6838 23.7669L31.7213 22.1998L32.5418 16.6575Z"
                                            fill="#D7DF23"/>
                                        <path
                                            d="M29.139 25.0803L22.5028 27.198L22.0322 34.4103L28.1858 31.9961L29.139 25.0803Z"
                                            fill="#8DC63F"/>
                                        <path
                                            d="M32.4814 33.9927L25.9055 36.2072V41.9916L31.4679 40.1643L32.4814 33.9927Z"
                                            fill="#009444"/>
                                        <path
                                            d="M16.2832 24.8382L24.1803 22.4422L24.5905 13.8564L15.9695 16.3493L16.2832 24.8382Z"
                                            fill="#39B54A"/>
                                        <path d="M184.625 116.999L196.299 108.607V105.939L184.625 114.319V116.999Z"
                                              fill="#8DC63F"/>
                                    </svg>


                                </div>
                                <h1>BIENVENUE SUR WOOPIX </h1>
                                <h1>
                <span className="green">
                  Agence de Communication & Marketing
                </span>
                                </h1>
                                <div className="call-to-action-home">
                                    <button className="home-button">En savoir plus</button>
                                </div>
                            </div>
                            <div className="image-container">
                                <img className="home-image" src={homeImage} alt=""/>
                            </div>
                            <div className="call-to-action-home mobile-call">
                                <button className="home-button">
                                    <a href="">
                                        En savoir plus
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
                <Section id={'about-us'}>
                    <About/>

                </Section>
                <Section id={"nos-services"}>
                    <OurServices/>

                </Section>
                <Section id={"nos-realisation"}>
                    <Portfolio/>

                </Section>
                <Section id={"contactez-nous"}>
                    <Contact/>
                </Section>
                <Footer />
            </ScrollingProvider>
        </HomeContainer>
    );
};
export default withRouter(Home);
const HomeContainer = styled.div`
.home-button{
font-size: 18px;
}
  .home {
  height: 95vh;
  display: flex;
  align-items: center ;
  justify-content: center;
    .home-wrapper {
      .title-home-container {
        margin: 0 auto;
        h1 {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: bold;

          text-transform: uppercase;
          color: ${props => props.theme.blue};
          .green {
            text-transform: uppercase;
            color: ${props => props.theme.green};
          }
        }
      }
      .image-container {
        .bg-green {
          z-index: -1;
        }
      }
    }
  }
  @media screen and (max-width: 596px) {
    .home {
      display: flex;
      align-items: center;
      .home-wrapper {
        height: 665px;
        margin: auto auto;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .title-home-container {
          width: 100%;
          max-width: 278px;
          h1 {
            font-size: 28.4746px;
            line-height: 141.83%;
            text-align: center;
          }
          
        }
        .image-container {
          .bg-green {
            display: none;
          }
          img {
            width: 100%;
            max-width: 355px;
          }
        }
        .call-to-action-home {
          margin-top: 50px;
          button {
            width: 204.84px;
            height: 44.54px;
            left: 96px;
            top: 648px;
            background: #8dc63f;
            border: 1px solid #8dc63f;
            box-sizing: border-box;
            border-radius: 2px;
            color: white;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
      .mobile-call{
        text-align: center;
        display:flex;
        justify-content: center;
        margin-top: 50px;
          button{
          width: 204.84px;
height: 44.54px;


background: #8DC63F;
border: 1px solid #8DC63F;
box-sizing: border-box;
border-radius: 2px;
a{
  text-decoration:none;
  color: white;
  font-weight: bold;
  font-size: 16px;
}
          }
        }
    .home {
      margin: 100px auto 100px;
      
      .home-wrapper {
      }
      .title-home-container {
        max-width: 515px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1 {
          font-size: 51.4436px;
          line-height: 126.83%;
          text-align: left;
          text-transform: uppercase;
        }
        .call-to-action-home {
          display: none;
        }
    
      }
      .image-container {
        display: block;
        margin: 0 auto;
        max-width: 562px;
        width: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        .bg-green {
          display: block;
          background-color: ${props => props.theme.green};
          width: 367px;
          height: 450px;
          position: absolute;
          right: -32px;
          bottom: -32px;
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .home {
      display: flex;
      align-items: center;
      height: 100vh;
    

      .home-wrapper {
        display: flex;
        flex-direction: row;
        position: relative;
        width: 100%;
        max-width: 938px;
        height: 504px;

        margin: 0 auto;
        .bg-green {
          height: 500px;
          width: 500px;
          position: absolute;
          z-index: -1;
          right: -61px;
          bottom: -46px;
          width: 367.58px;
          height: 451.49px;
          .green-layout {
            width: 100%;
            height: 100%;
            background-color: ${(props) => props.theme.green};
          }
        }

        .main-logo-container {
        }
        .title-home-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          max-width: 442px;
          h1 {
            font-weight: bold;
            font-size: 45.5164px;
            line-height: 126.83%;
            text-align: left;
          }
          .call-to-action-home {
            display: block;
            text-align: left;
            margin-top: 35px;
            button {
              width: 177px;
              height: 38px;
              border: 1px solid #8dc63f;
              box-sizing: border-box;
              border-radius: 2px;
              background: none;
              font-weight: bold;
              color: #8dc63f;
            }
          }
        }
        .image-container {
          position: relative;
          max-width: 495px;
          width: 100%;
          overflow: hidden;

          img {
            position: absolute;
            left: -50px;
            z-index: -1;
          }
        }
        .call-to-action-home {
          display: none;
        }
      }
    }
  }
`;


