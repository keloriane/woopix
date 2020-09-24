import React,{useEffect} from 'react'
import styled,{withTheme} from 'styled-components'

const ServicesItem = ({title, subTitle, text}) => {
    return (
        <Container>
            <h2 className={'service-item-title'}>{title}</h2>
            <h3 className={'service-item-subtitle'}>{subTitle}</h3>
            <h3 className={'service-item-item'}>{text}</h3>
        </Container>
    )

}

ServicesItem.defaultProps  = {
    title : 'Site Vitrine ',
    subTitle : 'àpd de 1199€\n',
    text : 'Le site VITRINE de chez Woopix est adapté aux PME du style Restaurant, Brasserie, Salon de Coiffure, ' +
        'Boulangerie, Sandwicherie, Profession Libérale… Des entreprises qui veulent afficher des galeries photos, des' +
        ' tarifs, ou bien une fiche de réservation, une map, un chat…\n'
}

export default withTheme(ServicesItem)


const Container = styled.div`
margin-bottom: 50px;
font-family: 'Futura PT';
    .service-item-title{
      font-style: normal;
      font-weight: 600;
      font-size: 64px;
    }
    .service-item-subtitle{
      font-style: normal;
      font-weight: 600;
      font-size: 64px;
         span[data-type='price'] {
          color: ${props => props.theme.green};
      }
    }
 
    @media (min-width: 576px) {  }
    @media (min-width: 768px) {  }
    @media (min-width: 992px) { 
        width: 30vw;
    }
    @media (min-width: 1200px) {  }
`;

