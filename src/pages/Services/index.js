import React, {useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import ServicesItem from "./components/ServiceItem.js";
import ServiceOption from "./components/ServiceOption";
import parse from 'html-react-parser';
import {useRouteMatch} from "react-router-dom"


const Services = (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        console.log(props)
        let match = window.location.href.split('/')[4]

        fetch(`${process.env.PUBLIC_URL}/data/${match}.json`)
            .then(response => response.json())
            .then((dataResponse) => setData(dataResponse))
    }, []);

    if (!data) {
        return <p>loading..</p>;
    }

    return (
        <Container>
            <div className={'page-header-bg'}>
                <div className='page-header'>
                    <h1 className={'page-title'}>{data.pageTitle}</h1>
                    <p className={'page-description'}>{parse(data.pageDescription)}</p>
                </div>
            </div>


            <div className={'sub-container'}>
                {data.items && (
                    <div className='services-list'>
                        {data.items.map(item => (
                            <ServicesItem
                                title={item.title}
                                subtitle={item.subtitle}
                                price={item.price}
                                text={item.text}
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
            </div>
        </Container>
    )
}

export default withTheme(Services)


const Container = styled.div`
height:100%;
width:100%;
font-size: 1.5em;
text-align: center;
font-family: "Futura PT", sans-serif;
padding-top: 170px;
    .page-header-bg{
       border-left: 10px ${props => props.theme.green} solid;
      .page-header{
          text-align: left;
          font-weight: 100;
          line-height: 130%;
          display: flex;
          flex-direction: column;
          max-width: 1025px;
          margin: 0 auto;
          .page-title{
              text-align: left;
              font-style: normal;
              font-weight: 800;
              font-size: 64px;
              margin-bottom: 60px;
              line-height: 110%;
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
      max-width: 1025px;
      margin:  100px auto 0;
      display: flex;  
      flex-direction: column;  
      .services-list{
        margin-right: 40px;
      }
    }
    
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) { 
      text-align: left;
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
      flex-direction: row; 
      .services-list{
        margin-right: 40px;
      }
    }
    @media (min-width: 1200px) {}
  }`