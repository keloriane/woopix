import React from "react";

const Slide = ({slide}) => {
    const {image, index} = slide



    return (

        <div className={index}>
            <img src={image} alt=""/>

        </div>

    )
}
export default Slide
