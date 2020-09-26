import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.div`
    #footer {
        width: 80%;
        height: 335px;
        position: absolute;
        bottom: 0;

    }
  `;
  return (
    <FooterContainer>
      <div id="footer"></div>
    </FooterContainer>
  );
};

export default Footer;
