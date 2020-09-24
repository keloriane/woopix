import React,{useEffect} from 'react'
import styled,{withTheme} from 'styled-components'

const ServiceOption = ({title, price, list}) => {
    return (
        <Container>
            <h2 className='option-title'>{title}</h2>
            {price && (<h3 className='option-price'>{price}</h3>)}
            <ol className='option-list'>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </Container>
    )

}

ServiceOption.defaultProps  = {
    title : 'Options Incluses',
    price : '',
    list : [
        'Création de site en CMS sur base de Template (WordPress, Joomla ) ou PHP (site sur mesure)',
        'L’insertion de Logo, Medias, Texte ( Fournis par vos soins )',
        'Une version Responsive ( Smartphone & Tablette)',
        'Un référencement naturel sur Google',
        'Installation du site sur les moteurs de recherche',
        'Demie journée de formation et information',
    ]
}

const Container = styled.div`
background:  ${props => props.theme.blue};
color:white;
margin-bottom: 20px;
padding: 36px;
font-family: 'Futura PT';
    .option-title{
      font-weight: 600;
      font-size: 36px;
      margin-bottom: ${props => props.price ? '0px' : '10px' };};
    }
    .option-price{
      font-weight: 600;
      font-size: 36px;
      color:  ${props => props.theme.green};
    }
    .option-list{
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
        font-family: Futura PT;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        color: #8DC540;
      }
    }
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {
      width: 30vw;
    }
    @media (min-width: 1200px) {}
`;

export default withTheme(ServiceOption)