import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  
  .rdv{
    width: 201px;
  }
  .button-container{
  display: flex;
  width: 300px;
  }
   .portfolio-slider {
               width: 100%;
              display: flex;
              overflow: hidden;
              transition: all .2s ease-in-out;
              
              max-width: 1240px;
              justify-content: flex-start;
              .slide{
                min-width: 190px;
                overflow: hidden;
                margin: 20px;
                transition: all .2s ease-in-out;
                img{
                  transition: all .2s ease-in-out;
                  display: block;
                  object-fit: cover;
                  
               }
        }
        }
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
               width: 100%;
        display: flex;
        overflow: hidden;
        .slide{
          min-height: 320px;
          overflow: hidden;
          img{
          
          display: block;
          object-fit: cover;
          max-width: 320px; 
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
               width: 100%;
        display: flex;
        overflow: hidden;
        .slide{
          min-height: 300px;
          overflow: hidden;
          img{
 
          display: block;
          object-fit: cover;
          max-width: 320px; 
          }
        }
          }
        }
      }
    }
 
  }
  .portfolio-container{
            display:flex;
            justify-content: flex-start;
            position: relative;
          }
    @media screen and (min-width: 992px){
    
      #portfolio{
        .portfolio-wrapper{
          max-width: 1168px;
          display: flex;
          justify-self: flex-start;
          justify-content: center;
          flex-direction: column;
          .portfolio-container{
            display:flex;
            justify-content: flex-start;
            position: relative;
            .portfolio-slider {
               width: 100%;
              display: flex;
              overflow: hidden;
              .slide{
                min-height: 320px;
                overflow: hidden;
                img{
                  
                  display: block;
                  object-fit: cover;
                  max-width: 320px; 
               }
        }
          }
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
  `;
