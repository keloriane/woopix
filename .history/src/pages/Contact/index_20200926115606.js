import React from 'react';
import styled from "styled-components";
import Title from '../../components/Title/Title';

const Contact = () => {
    return (
        <div id="contact">
            <div className="title-container">
                <Title num="04" firstP="prenez" secondP="rendez-vous" />
            </div>
            <div className="image-container"></div>
            <div className="text-container"></div>
        </div>
    )
}

export default Contact
