import React,{useEffect} from 'react'
import styled,{withTheme} from 'styled-components'
import ServicesItem from "./components/ServiceItem.js";


 const Services = (props) => {
     console.log(props)

    return (
        <Container>
            <h1 className={'page-title'}>CREATION DE SITE</h1>
            <div className ='description'>
                    Woopix créé des <span>sites web</span> utilisant la technologie HTLM5 et CSS3. Nous développons des sites sur
                    une base de template CMS ( WordPress, Joomla, Drupal) ou pouvons développer des sites sur mesure
                    avec Adobe Muse et l’encodage en php ( Beaucoup plus couteux, et généralement pas adapté au PME). Vous trouverez ci-dessous nos différentes formules accompagnées de leurs tarifs. Sur chacune des formules, vous trouverez un ou plusieurs liens d’exemples.
                    Les prix affichés ci-dessous sont tous hors taxes (21%)
            </div>

            <div className={'subContainer'}>
                <div className='services-list'>
                   
                   
                </div>

                <div className="option-list">
                   
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
max-width: 1025px;
font-family: sans-serif;
margin: 0 auto;
    .page-title{
      text-align: left;
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      margin-top: 170px;
      margin-bottom: 60px;
      text-transform: uppercase;
      color  :  ${props => props.theme.blue};
    }
    .description{
      column-count: 1;
      text-align: left;
      font-family: "Futura PT", serif;
      font-weight: 100;
      line-height: 130%;
      span{
        color :  ${props => props.theme.green}
      }
    }
    
    .subContainer{
      margin-top: 100px;
      .services-list{
        margin-right: 40px;
      }
    }
    
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) { 
      text-align: left;
        .description{
          column-count: 2;
          text-align: left;
        }  
        .subContainer{
          display: flex;
        }
    }
    @media (min-width: 1200px) {}
`;

