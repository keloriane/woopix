import React from "react";
import styled from "styled-components";

const Slide = ({data}) => {

    const SliderWrapper = styled.div`
   
       
      
    `

    return (
        <>

            {
                data.map(slide => (
                    <div className="slide">
                        <img src={slide.src} alt=""/>
                    </div>
                ))
            }
        </>

    )
}
export default Slide
