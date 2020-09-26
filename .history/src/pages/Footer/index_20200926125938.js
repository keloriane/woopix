import React from "react";

const Footer = () => {
  const FooterCotainer = styled.div`
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
