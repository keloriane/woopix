import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import contactImage from "./../../assets/img/contact-image.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="title-container">
        <Title num="04" firstP="prenez" secondP="rendez-vous" />
      </div>
      <div className="image-container">
        <img src={contactImage} alt="" />
      </div>
      <div className="text-container">
        <p>
          Rutrum id venenatis gravida porttitor mauris nunc metus. Aliquet
          dictumst quam sed turpis velit dignissim.
        </p>
      </div>
    </div>
  );
};

export default Contact;
