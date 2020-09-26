import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  const FooterContainer = styled.div`
    #footer {
      width: 91%;
      height: 215px;
      position: absolute;
      bottom: 0;
      background-color: ${(props) => props.theme.green};
      z-index: -1;
    }
  `;
  return (
    <FooterContainer>
      <div id="footer"></div>
    </FooterContainer>
  );
};

export default Footer;
