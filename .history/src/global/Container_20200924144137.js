import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";

const GlobalContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default withTheme(GlobalContainer);

const Container = styled.div`

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
          color: #1b065e;
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
  @media (max-width: 576px) {
    
  }

  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
  @media (min-width: 768px) {
   
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    
  }
`;
