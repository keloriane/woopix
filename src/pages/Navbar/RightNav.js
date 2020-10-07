import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const RightNav = ({ open }) => {
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 10;
  padding-right: 20px;
  transition: all 1s ease-in-out;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #8DC63F;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: all 1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      a{
    
      font-size: 29px;
      color: ${props => props.theme.blue};
      &:hover{
        color: ${props => props.theme.green}
      }
      
      }
    }
  }
`;
    return (
        <Ul open={open}>
            <li onClick={open}>
                <Link  to={"/"}>Home</Link>
            </li>
            <li onClick={open}>
                <Link to={"tarifs-sites"}>
                    Création de site web
                </Link>
            </li>
            <li onClick={open}>
                <Link to={"gestion-reseaux-sociaux"}>
                    Gestion réseaux sociaux
                </Link>
            </li>
            <li onClick={open}>
               <Link to={"/woopix-autres-services"}> Autres services </Link>
            </li>
            <li onClick={open}>
                <Link to={"/contact"}> Contact </Link>
            </li>
        </Ul>
    )
}

export default RightNav
