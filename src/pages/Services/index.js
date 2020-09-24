import React,{useEffect} from 'react'
import styled,{withTheme} from 'styled-components'
import ServicesItem from "./components/ServiceItem.js";
import ServiceOption from "./components/ServiceOption";

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

            <div className='subContainer'>
                <div className='services-list'>
                    <ServicesItem
                        title={ 'Site Vitrines'}
                        subtitle={ 'Àpd de <span data-type="price">1199€</span>'}
                        text={ `Le site VITRINE de chez Woopix est adapté aux PME du style Restaurant, Brasserie, Salon de 
                            Coiffure, Boulangerie, Sandwicherie, Profession Libérale… Des entreprises qui veulent 
                            afficher des galeries photos, des tarifs, ou bien une fiche de réservation, une map, un chat…`}
                    />
                    <ServicesItem
                        title={ 'Site Sur Mesure'}
                        subtitle={ 'Àpd de <span data-type="price">3499€</span>'}
                        text={ `Le site SUR MESURE de chez Woopix est aussi adapté aux PME du style Restaurant, Brasserie, 
                            Salon de Coiffure, Boulangerie, Sandwicherie, Profession Libérale… Mais qui souhaitent que nous 
                            leur modelons un site à leur image sans template, complètement personnalisé. Il serait développé 
                            sur base de code PHP.`}
                    />
                </div>

                <div className="option-list">
                    <ServiceOption
                        title={'Options Incluses'}
                        list={[
                            'Création de site en CMS sur base de Template (WordPress, Joomla ) ou PHP (site sur mesure)',
                            'L’insertion de Logo, Medias, Texte ( Fournis par vos soins )',
                            'Une version Responsive ( Smartphone & Tablette)',
                            'Un référencement naturel sur Google',
                            'Installation du site sur les moteurs de recherche',
                            'Demie journée de formation et information'
                        ]}
                    />

                    <ServiceOption
                        title={'Maintenance Standard'}
                        price={'39/Mois'}
                        list={[
                            'Renouvellement du nom de domaine et hébergement',
                            'Assistance bug site',
                            '2 adresses mails personnalisées'
                        ]}
                    />

                    <ServiceOption
                        title={'Maintenance Premium'}
                        price={'119/Mois'}
                        list={[
                            'Renouvellement du nom de domaine et hébergement',
                            'Assistance bug site',
                            '3 adresses mails personnalisées',
                            'Rapport statistiques trafic du site (analytics)',
                            'Assistance téléphonique',
                            'Modification des contenus',
                            'Référencement pour moteurs de recherche'
                        ]}
                    />
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

