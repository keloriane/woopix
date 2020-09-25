import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = (props) => {
  const MenuContainer = styled.div`
    .menu {
      width: 100%;
      max-width: 410px;
      margin: 0 auto;

      .main-menu {
        display: flex;
        justify-content: space-around;
        .menu-items {
          a {
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            /* identical to box height */
            font-family: "Futura PT";
            font-style: normal;
            color: ${(props) => props.theme.blue};

            &:hover {
              color: ${(props) => props.theme.green};
            }
          }
        }
      }
    }
  `;
  return (
    <MenuContainer className="Menu-container">
      <div className="menu">
        <ul className="main-menu">
          <li className="menu-items">
            <Link to="/" onClick={props.animaiton1}>Woopix</Link>
          </li>
          <li className="menu-items">
             <Link to="/services" onClick={props.animaiton2}>Site</Link>
          </li>
          <li className="menu-items">
             <Link to="/about" onClick={props.animaiton3}>A propos</Link> 
          </li>
          <li className="menu-items">
            <Link to="/portfolio" onClick={props.animaiton4}>Réalisations</Link>
          </li>
          <li className="menu-items">
            <Link to="/contact" onClick={props.animaiton5}>Contact</Link>
          </li>
        </ul>
      </div>
    </MenuContainer>
  );
};

export default Menu;
