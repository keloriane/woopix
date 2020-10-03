import React, {useEffect, useState} from 'react'
import styled, {withTheme, css} from 'styled-components'
import ServicesItem from "./components/ServiceItem.js";
import ServiceOption from "./components/ServiceOption";
import {withRouter} from "react-router-dom";
import parse from 'html-react-parser';
import {motion, useAnimation } from 'framer-motion'
import {useInView } from "react-intersection-observer";
import {STRAPI_URL} from "../Helpers";



const Services = (props) => {
    const [data, setData] = useState(null);
    const animation= useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        // rootMargin: '-300px'



    })



    const parent = {
        initial: { y: 50,opacity:0},
        animate: {
            y:0,
            opacity: 1,
            transition: {
                duration: .5
            }
        }
    }
    const child = {
        initial: { y: 100, opacity:0 },
        animate: {
            y:0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6 , 0.5, -0.01 , 0.9]
            }
        }
    }
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    useEffect(() => {
        const path = "social-network"

    console.log("=====>",STRAPI_URL);

        fetch(`${STRAPI_URL}/${path}`)
            .then(response => response.json())
            .then((dataResponse) => {
                console.log('==============>',dataResponse);
                /*return null*/
                return setData(dataResponse)
            })

        if(inView){
            animation.start('visible')
        }


    }, [animation, inView]);

    if (!data) {
        return <p>loading..</p>;
    }




    return (
        <Container gridDisplayed={props.gridDisplayed}>
            <div className="bg"/>
            <div className={'page-header-bg'}>
                <div className='page-header'>
                    <motion.h1 variants={parent} initial={"initial"} animate={'animate'} className="text-letter page-title ">{data.pageTitle}</motion.h1>
                    <motion.p variants={child} initial={"initial"} animate={'animate'} className={'page-description'}>{parse(data.pageDescription)}</motion.p>
                </div>
            </div>


            <motion.div className={'sub-container'}
                 ref={contentRef}
                 animate={animation}
                 initial={'hidden'}
                 variants={{
                     visible: {
                         opacity:1,
                         y:0,
                         transition: {duration: .6 , ease:[.6,.05,-.01,.9]}
                     },
                     hidden:{
                         opacity:0,
                         y:72,
                     }
                 }}
            >
                {data.items && (
                    <div className='services-list'
                         variants={container}
                         initial="hidden"
                         animate="show"
                    >
                        {data.items.map(item => (
                            <ServicesItem

                                title={item.title}
                                subtitle={item.subtitle}
                                price={item.price}
                                text={item.text}
                                variants={item}
                            />
                        ))}
                    </div>
                )}
                <div className="option-list">
                    {data.options.map(option => (
                        <ServiceOption
                            title={option.title}
                            price={option.price ? option.price : ""}
                            list={option.list}
                        />
                    ))}
                </div>
            </motion.div>
        </Container>
    )
}

export default withRouter(withTheme(Services))


const Container = styled.div`
font-size: 1.5em;
text-align: center;
font-family: "Futura PT", sans-serif;
padding-top: 170px;
    .bg{
      display: none;
    }
    .page-header-bg{
       border-left: 10px ${props => props.theme.green} solid;
       padding: 20px;
      .page-header{
          text-align: left;
          font-weight: 100;
          line-height: 130%;
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
          .page-title{
              text-align: left;
              font-style: normal;
              font-weight: 800;
              font-size: 64px;
              margin-bottom: 60px;
              line-height: 110%;
              max-width: 1000px;
              text-transform: uppercase;
              color  :  ${props => props.theme.blue};
          }
          .page-description{
             column-count: 1;
             span{
                  color :  ${props => props.theme.green}
              }
          }
      }
    }
    
    .sub-container{
      max-width: 1200px;
      margin:  100px auto 0;
       display: grid;
       grid-template-columns: 1fr;
      .services-list{
        margin-right: 40px;
      }
    }
    
    @media (min-width: 576px) {}
    @media (min-width: 768px) {
        text-align: left;
        .bg{
          display: block;
          background: #fcfcfc;
          width: 75%;
          height: 1600px;
          position:absolute;
          top: 100px;
          z-index: -1;
        }
            .page-header-bg{
              .page-header{
                column-count: 2;
                text-align: left;
                .page-description{
                 column-count: 2;
              }
            }  
        }
        .sub-container{
           display: grid;
           grid-template-columns: ${props => props.gridDisplayed ? '1fr' : '1fr 1fr'} ;
           grid-column-gap: 20px;
          .services-list{
            margin-right: 40px;
          }
          .option-list{    
                ${props => props.gridDisplayed && css`
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 20px;`
}
          }
        }
    }
    @media (min-width: 992px) {}
    @media (min-width: 1200px){}
  }`