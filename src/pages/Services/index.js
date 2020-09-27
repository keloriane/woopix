import React, {useEffect, useState} from 'react'
import styled, {withTheme, css} from 'styled-components'
import ServicesItem from "./components/ServiceItem.js";
import ServiceOption from "./components/ServiceOption";
import parse from 'html-react-parser';
import Menu from "../Menu";


const Services = (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let path = window.location.href.split('/')[4]
        fetch(`${process.env.PUBLIC_URL}/data/${path}.json`)
            .then(response => response.json())
            .then((dataResponse) => setData(dataResponse))
    }, []);

    if (!data) {
        return <p>loading..</p>;
    }

    return (
        <Container gridDisplayed={props.gridDisplayed}>
            <div className="bg"/>
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