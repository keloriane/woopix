import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = () => {
  const MenuContainer = styled.div`
    .menu {
      width: 100%;
      max-width: 410px;

      .main-menu {
        display: flex;
        .menu-items {
          font-weight: 600;
          font-size: 20px;
          line-height: 26px;
          /* identical to box height */

          color: #8dc63f;
          &:hover{
              color: ${props => props.theme.green}
          }
        }
      }
    }
  `;
  return (
    <div class="menu">
      <ul className="main-menu">
        <li className="menu-items">
          <Link>Woopix</Link>
        </li>
        <li className="menu-items">
          <Link>Site</Link>
        </li>
        <li className="menu-items">
          <Link>Réseaux sociaux</Link>
        </li>
        <li className="menu-items">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
