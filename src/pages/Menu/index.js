import React, { useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import Burger from "./Burger";

const Menu = (props) => {



  useEffect(()=>{

  },[])



  const MenuContainer = styled.div`
    .menu {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;

      .main-menu {
        display: flex;
        justify-content: space-around;
        .menu-items {
          
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            /* identical to box height */
            font-family: "Futura PT";
            font-style: normal;
            color: ${(props) => props.theme.blue};
            opacity: 1 !important;
 
            &:hover {
              color: ${(props) => props.theme.green};
            
          }
        }
      }
    }
  `;





  return (
      <>
    <MenuContainer className="Menu-container">
      <div className="menu">
        <ul className="main-menu">
          <li className="menu-items">
            <Link to="/" >Acueil</Link>
          </li>
          <li className="menu-items">
             <Link to="/about">A propos</Link>
          </li>
          <li className="menu-items">
            <Link to="/portfolio">Réalisations</Link>
          </li>
          <li className="menu-items">
            <Link to="/contact" >Contact</Link>
          </li>
          <li className="menu-items">
             <Link to="/tarifs-sites" >Site</Link>
          </li>
          <li className="menu-items">
            <Link to="/gestion-reseaux-sociaux">Réseaux Sociaux</Link>
          </li>
          <li className="menu-items">
            <Link to="/woopix-autres-services">Autres Services</Link>
          </li>
        </ul>
        <button>
          menu
        </button>
      </div>
    </MenuContainer>
     <Burger />
        </>
  );
};

export default Menu;
