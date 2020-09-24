import React,{useEffect} from 'react'
import styled,{withTheme} from 'styled-components'

 const GlobalContainer = (props) => {
    return (
        <Container> 
            {props.children}
        </Container>
    )

}

export default withTheme(GlobalContainer) 


const Container = styled.div`
height:100%;
width:100%;
font-size: 1.5em;
text-align: center;
background-color: red; 
max-width: 1025px;

    
@media (min-width: 576px) {  
    background-color: orange
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
    background-color: green
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    background-color: black
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
    background-color: brown
}
`;
