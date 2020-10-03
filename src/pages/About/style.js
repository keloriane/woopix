import styled from "styled-components";


export const AboutWrapper = styled.div`
.doted{
  position: absolute;
  
}
  .text-letter{
    overflow: hidden;
  }
  .chars{
    overflow:hidden;
    display: block;
  }
    #about {
      
        
      display: flex;
      align-items: center;
      font-family: "Futura PT", sans-serif;
    }
    .about-wrapper {
      display: flex;
    }
    
    @media screen and (max-width: 596px) {
      #about {
        height: 95vh;
        .about-wrapper {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: space-around;
          height: 445px;
          margin: auto;
          .text-container {
            max-width: 397px;
            width: 100%;
            margin: 0 auto;
            .inner-text {
              display: flex;
              justify-content: center;
              flex-direction: column;
              width: 100%;
              p {
                font-style: normal;
                font-weight: normal;
                font-size: 19px;
                line-height: 160.2%;
                /* or 30px */
                text-align: left;

                color: rgba(0, 0, 0, 0.6);
              }
            }
          }
          .call-to-action {
            button {
              width: 172px;
              height: 38px;
              background: #8dc63f;
              border: 1px solid #8dc63f;
              box-sizing: border-box;
              border-radius: 2px;
              a {
                text-decoration: none;
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 22px;
                /* identical to box height, or 129% */
                display: flex;
                align-items: center;
                letter-spacing: 0.04em;
                color: #ffffff;
                /* Inside Auto Layout */
                flex: none;
                order: 0;
                align-self: center;
                margin: 10px 0px;
              }
            }
          }
        }
      }
    }
    @media screen and (min-width: 596px) {
      #about {
        .about-wrapper {
          width: 100%;
          max-width: 643px;
          height: 804px;
          margin: auto;
          flex-direction: column;
          justify-content: space-around;

          
        }
        .text-container {
          width: 100%;
          max-width: 625.92px;
          height: 429px;
          margin: 0 auto;
          .inner-text {
            p {
              font-family: Futura PT;
              font-style: normal;
              font-weight: normal;
              font-size: 34.076px;
              line-height: 160.2%;
              span {
                color: ${(props) => props.theme.green};
              }
            }
          }
        }
        .call-to-action {
          button {
            width: 308.2px;
            height: 68.7px;
            a {
              font-weight: 600;
              font-size: 30.489px;
              line-height: 39px;
              letter-spacing: 0.04em;
              color: white;
            }
          }
        }
      }
    }
    @media screen and (min-width: 992px) {
      .text-letter{
        display: flex;
      }
      .chars{

        display: flex;
        justify-content: center;
      }
      #about {
      
        width: 1020px;
        margin: auto;
        display:flex;
        align-items: center;
        .about-wrapper {
          width: 100%;
          max-width: 1054px;
          height: 475px;
          .text-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 886px;
            height: 128px;
            .inner-text {
              width: 100%;
              max-width: 420px;
              p {
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 160.2%;
                /* or 32px */

                color: rgba(0, 0, 0, 0.6);
              }
            }
          }
          .call-to-action {
              display: flex;
              justify-content: center;

            button {
              width: 171px;
              height: 38px;
                
              a {
                font-weight: 600;
                font-size: 17px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  `;