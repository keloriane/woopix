import styled from "styled-components";

export const PortfolioWrapper = styled.div`
    #global-wrapper{
     
    }

    #portfolio {
      font-family: "Futura PT", sans-serif;
      position: relative;
      width: 61%;
      max-width:1380px;
      margin: 0 auto;
     
            .green-background {
              position: absolute;
              width: 71%;
              height: 277px;
              background-color: ${(props) => props.theme.green};
              z-index: -1;
              top: 38%;
              left: 26%;
            }
    }
    @media screen and (max-width: 596px) {
      #portfolio {
        max-width: 1015px;
        height: 552px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        .portfolio-wrapper {
          height: 557px;
          display: flex;
          flex-direction: column;
          
          justify-content: space-between;
          align-items: center;
          .portfolio-container {
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            .portfolio-slider {
              height: 295px;
              display: flex;
              width: 100%;
              
        
              .swiper-slide {
                min-width: 195px;
                max-width: 160.75px;
              }
            }
          }
        }
      }
    }
    @media screen and (min-width: 596px) {
    .call-to-action{
    button{
        width: 219px;
    height: 53px;
    margin-top: 33px;
    }
    }
      #portfolio {
        
        height: 1070px;
        position: relative;
        .portfolio-wrapper {
          display: flex;
          flex-direction: column;
          height: 1165px;
          width: 100%;
          max-width: 674px;
          justify-content: space-around;
          margin: 0 auto;
         
          .portfolio-container {
          display: flex;
          justify-content: center;
          
            .green-background {
              width: 100%;
              height: 380px;
              right: 0;
              top: 40%;
              position: absolute;
              background-color: ${(props) => props.theme.green};
              z-index: -1;

            }
          }
          .portfolio-slider {
            display: flex;
            margin-left: 5px;
          }
        }
      }
    }
 
  }
  .portfolio-container{
            display:flex;
            justify-content: flex-start;
            position: relative;
            .card-wrapper{
              display: flex;
              position: absolute;
              
              .slide{
                flex:1;
                min-height:320px
              }
            }
    @media screen and (min-width: 992px){
    
      #portfolio{
        
        .portfolio-wrapper{
          max-width: 1168px;
          display: flex;
          justify-self: flex-start;
          justify-content: center;
          .portfolio-container{
            display:flex;
            justify-content: flex-start;
            position: relative;
            .card-wrapper{
              display: flex;
              position: absolute;
              
              .card{
                flex:1;
                min-height:320px
              }
            }
            .green-background{
              width: 60%;
            }
          }

        }

      }
    }
    #global-wrapper{
   
      position: relative;
  }
    img{
      height: 100%;
      max-height:320px;
    }
  `;
