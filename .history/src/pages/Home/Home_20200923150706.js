import React, { useEffect } from "react";
import gsap from "gsap";
import homeImage from "./../../assets/img/home.png";
import styled from "styled-components";

export const Home = () => {
  const homeDiv = styled.div`
    @media screen and (max-width: 576px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  `;

  return (
    <div className="home">
      <div className="title-home-container">
        <h1>
          BIENVENUE SUR WOOPIX Agence
          <span className="green">de Communication & Marketing</span>
        </h1>
      </div>
      <div className="image-container">
        <img src={homeImg} alt="" />
      </div>
    </div>
  );
};
