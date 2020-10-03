import React, {useEffect} from 'react'
import styled, {withTheme} from 'styled-components'

const ServicesItem = ({title, subtitle, price, text}) => {
    return (
        <Container>
            <h2 className={'service-item-title text-letter'}>{title}</h2>
            <h3 className={'service-item-subtitle text-letter'}>{subtitle} <span className={'price'}>{price}</span></h3>
            <h3 className={'service-item-text text-letter'}>{text}</h3>
        </Container>
    )

}


export default withTheme(ServicesItem)


const Container = styled.div`
margin-bottom: 50px;
padding: 20px;
max-width: 577px;
width: 100%;
    .service-item-title{
      font-style: normal;
      font-weight: 600;
      font-size: 50px;
      color:${props => props.theme.blue};
      margin-bottom: 10px;
    }
    
    .service-item-subtitle{
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
          color:${props => props.theme.blue};
         .price{
          color: ${props => props.theme.green};
      }
    }
    
    .service-item-text{
        font-style: italic;
        line-height: 130%;
        font-weight: 100;
        margin-top: 30px;
    }
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
`;

