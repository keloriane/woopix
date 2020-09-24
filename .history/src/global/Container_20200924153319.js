import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";

const GlobalContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default withTheme(GlobalContainer);

const Container = styled.div`
  p h1 h2 h3 {
    font-family: "Futura PT" sans-serif;
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
    .call-to-action {
      button {
        width: 172px;
        height: 38px;
        background: #8dc63f;
        border: 1px solid #8dc63f;
        box-sizing: border-box;
        border-radius: 2px;
        &..rdv{
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

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
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

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
`;
