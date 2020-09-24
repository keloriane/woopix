import React, {useEffect} from 'react'
import styled, {withTheme} from 'styled-components'
import ServicesItem from "./components/ServiceItem.js";


const Services = (props) => {
    return (
        <Container>
            <div className={'page-header-bg'}>
                <div className='page-header'>
                    <h1 className={'page-title'}>CREATION DE SITE</h1>
                    <p className={'page-description'}>
                        Woopix créé des <span>sites web</span> utilisant la technologie HTLM5 et CSS3. Nous développons
                        des sites sur une base de template CMS ( WordPress, Joomla, Drupal) ou pouvons développer des
                        sites
                        sur mesure avec Adobe Muse et l’encodage en php ( Beaucoup plus couteux, et généralement pas
                        adapté au
                        PME). Vous trouverez ci-dessous nos différentes formules accompagnées de leurs tarifs. Sur
                        chacune des
                        formules, vous trouverez un ou plusieurs liens d’exemples.
                        Les prix affichés ci-dessous sont tous hors taxes (21%)
                    </p>
                </div>
            </div>

            <div className={'sub-container'}>
                <div className='services-list'>
<<<<<<< HEAD
                   
                   
=======
                    <ServicesItem
                        title={'Site Vitrines'}
                        subtitle={'Àpd de'}
                        price={'1299€'}
                        text={`Le site VITRINE de chez Woopix est adapté aux PME du style Restaurant, Brasserie, Salon de 
                            Coiffure, Boulangerie, Sandwicherie, Profession Libérale… Des entreprises qui veulent 
                            afficher des galeries photos, des tarifs, ou bien une fiche de réservation, une map, un chat…`}
                    />
                    <ServicesItem
                        title={'Site Sur Mesure'}
                        subtitle={'Àpd de'}
                        price={'3499€'}
                        text={`Le site SUR MESURE de chez Woopix est aussi adapté aux PME du style Restaurant, Brasserie, 
                            Salon de Coiffure, Boulangerie, Sandwicherie, Profession Libérale… Mais qui souhaitent que nous 
                            leur modelons un site à leur image sans template, complètement personnalisé. Il serait développé 
                            sur base de code PHP.`}
                    />
>>>>>>> 22a06ab247b98e8b5373fc1c36f71618d32bc5d1
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
font-family: "Futura PT", sans-serif;
padding-top: 170px;
    .page-header-bg{
       border-left: 10px ${props => props.theme.green} solid;
      .page-header{
          column-count: 1;
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
              text-transform: uppercase;
              color  :  ${props => props.theme.blue};
          }
          .page-description{
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
        }  
    }
    .sub-container{
      flex-direction: row;  
    }
    @media (min-width: 1200px) {}
`;

