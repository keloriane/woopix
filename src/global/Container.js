import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";

const GlobalContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default withTheme(GlobalContainer);

const Container = styled.div`
button{
text-align: left;
}
@media (max-width: 596px){

}

.button-container{
position: absolute;
right: -200px;
z-index: 100;
margin: 10px;
.next{
  background: none;
  border-radius:100% ;
  border: 2px solid white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center ;
  
}
.prev{
  background: none;
  border-radius:100% ;
  border: 2px solid white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center ;
  
}

}

  p h1 h2 h3 {
    font-family: "Futura PT", sans-serif;
  }
  .call-to-action {
    button {
      background: #8dc63f;
      border: 1px solid #8dc63f;
      box-sizing: border-box;
      border-radius: 2px;
      a {
        text-decoration: none;
        font-style: normal;

        /* identical to box height, or 129% */
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        /* Inside Auto Layout */
        flex: none;
        order: 0;
        align-self: center;
        margin: 10px 0px;
      }
    }
  }

  @media (max-width: 596px) {
  .button-container{
  z-index: 150 !important;
}
    .call-to-action {
      button {
        width: 172px;
        height: 38px;
        background: #8dc63f;
        border: 1px solid #8dc63f;
        box-sizing: border-box;
        border-radius: 2px;
        &.rdv{
            width: 239px;
          }
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

  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
  @media (min-width: 596px) {
    .call-to-action {
  
      button{
         &.rdv{
            width: 239px;
          }
      }

    }
      button {
        width: 308.2px;
        height: 68.7px;
        display: flex;
        align-items: center;
        padding: 10px;
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

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .call-to-action {
      display: flex;
      justify-content: center;

      button {
        width: 203px;
        height: 38px;
         &.rdv{
            width: 239px;
          }
         &.call-services{
            width: 270px;
            border: 1px solid #8DC63F;
            box-sizing: border-box;
            border-radius: 2px;
            background-color: #fff;
            color: ${props=> props.theme.green};
          }

        a {
          font-weight: 600;
          font-size: 17px;
          line-height: 22px;
        }
      }
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
  .main-title {
      display: flex;
      font-style: normal;
      align-items: center;
      position: relative;
      width: 100%;
      .title {
        position: absolute;

        h2 {
          font-weight: bold;

          text-transform: uppercase;
          color: ${props=>props.theme.blue};
          display: flex;
          align-items: center;
        }
      }
      .number-title {
        position: absolute;

        h2 {
          font-style: normal;

          text-transform: uppercase;
          color: #ececec;
        }
      }
    }
    @media screen and (max-width: 596px){
        .main-title {
            display: flex;
            font-style: normal;
            align-items: center;
            position: relative;
         
            width: 311px;
            height: 72px;
            .title {
              position: absolute;
              left: 107px;
              h2 {
                font-weight: bold;
                font-size: 34px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: ${props=>props.theme.blue};
                display: flex;
                align-items: center;
              }
            }
            .number-title {
              position: absolute;

              h2 {
                font-style: normal;
                font-weight: 800;
                font-size: 92.2247px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: #ececec;
              }
            }
          }

    }
    @media screen and (min-width: 596px){
        .main-title {
            display: flex;
            width: 530px;
            height: 160px;
            .number-title {
              h2 {
                font-weight: 800;
                font-size: 144px;
              }
            }
            .title {
              left: 147px;
              h2 {
                font-size: 64px;
                line-height: 107.33%;

                text-transform: uppercase;

                color: ${props=>props.theme.blue};
              }
            }
          }
    }
    @media screen and (min-width: 992px){
        .main-title {
            display: flex;
            max-width: 545px;
            width: 100%;
            height: 165px;
            .number-title {
              h2 {
                font-size: 134.475px;
                line-height: 107.33%;
              }
            }
            .title {
              h2 {
                font-size: 59.7665px;
                line-height: 107.33%;
              }
            }
          }
`;

export const TitleMain = styled.div`
    .main-title {
      display: flex;
      font-style: normal;
      align-items: center;
      position: relative;
      width: 100%;
      .title {
        position: absolute;

        h2 {
          font-weight: bold;

          text-transform: uppercase;
          color: ${props=>props.theme.blue};
          display: flex;
          align-items: center;
        }
      }
      .number-title {
        position: absolute;

        h2 {
          font-style: normal;

          text-transform: uppercase;
          color: #ececec;
        }
      }
    }
    @media screen and (max-width: 596px){
        .main-title {
            display: flex;
            font-style: normal;
            align-items: center;
            position: relative;
         
            width: 311px;
            height: 72px;
            .title {
              position: absolute;
              left: 81px;
              h2 {
                font-weight: bold;
                font-size: 34px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: ${props=>props.theme.blue};
                display: flex;
                align-items: center;
              }
            }
            .number-title {
              position: absolute;

              h2 {
                font-style: normal;
                font-weight: 800;
                font-size: 92.2247px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: #ececec;
              }
            }
          }

    }
    @media screen and (min-width: 596px){
        .main-title {
            display: flex;
            width: 530px;
            height: 160px;
            .number-title {
              h2 {
                font-weight: 800;
                font-size: 144px;
              }
            }
            .title {
              left: 147px;
              h2 {
                font-size: 64px;
                line-height: 107.33%;

                text-transform: uppercase;

                color: ${props=>props.theme.blue};
              }
            }
          }
    }
    @media screen and (min-width: 992px){
        .main-title {
            display: flex;
            max-width: 545px;
            width: 100%;
            height: 165px;
            .number-title {
              h2 {
                font-size: 134.475px;
                line-height: 107.33%;
              }
            }
            .title {
              h2 {
                font-size: 59.7665px;
                line-height: 107.33%;
              }
            }
          }
    }
    `