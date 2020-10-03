import React,{useEffect} from 'react'
import styled,{withTheme} from 'styled-components'

const ServiceOption = ({title, price, list}) => {
    return (
        <Container>
            <h2 className='option-item-title text-letter'>{title}</h2>
            {price && (<h3 className='option-item-price'>{price}</h3>)}
            <ol className='option-item-list'>
                {list.map((item, index) => (
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
      margin-bottom: ${props => props.price ? '0px' : '10px' };};
    }
    .option-item-price{
      font-weight: 600;
      font-size: 36px;
      color:  ${props => props.theme.green};
    }
    .option-item-list{
      margin-top: 30px;
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

export default withTheme(ServiceOption)
