import React from 'react'
import styled, {withTheme} from 'styled-components'
import parse from 'html-react-parser';


const ServiceBlock = (props) => {
    return (
        <Container subtitle = {props.subtitle}>
            <h2 className='option-item-title text-letter'>{props.title}</h2>
            {props.price && (<h3 className='option-item-price'>{props.price}</h3>)}
            <p className='option-item-subtitle' >{parse(props.subtitle ? props.subtitle : "")}</p>
            <ol className='option-item-list'>
                {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </Container>
    )
}


const Container = styled.div`
background:  ${props => props.theme.blue};
color:white;
margin-bottom: 20px;
padding: 36px;
    .option-item-title{
      line-height: 150%;
      font-weight: 600;
      font-size: 36px;
      text-transform: capitalize;
      margin-bottom: ${props => props.price ? '0px' : '5px'};
    }
    
    .option-item-subtitle{
      line-height: 150%;
      font-weight: 200;
      font-size: 20px;
      margin-top: ${props => props.subtitle === undefined ? '20px' : '0px'};
      .bold{
        color: ${props => props.theme.green };
        font-weight: 400;
      }
    }
    
    .option-item-price{
      font-weight: 600;
      font-size: 36px;
      color:  ${props => props.theme.green};
    }
    .option-item-list{
      margin-top: ${props => props.subtitle === undefined ? '0px' : '30px'};
      li{
        font-weight: 100;
        font-size: 24px;
        line-height: 150%;
        margin-bottom: 10px;
      }
      
      li:before {
        content: "+";
        padding-right: 5px;
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        color: #8DC540;
      }
    }
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
`;

export default withTheme(ServiceBlock)
