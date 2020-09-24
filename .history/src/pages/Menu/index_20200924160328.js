import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Menu = () => {
    const MenuContainer = style.div`
        .menu{
            .main-menu{
                .menu-items{

                }
            }
        }
    `
    return (
        <div class="menu">
            <ul className="main-menu">
                <li className="menu-items"><Link>Woopix</Link></li>
                <li className="menu-items"><Link>Site</Link></li>
                <li className="menu-items"><Link>Réseaux sociaux</Link></li>
                <li className="menu-items"><Link>Contact</Link></li>
                
            </ul>
        </div>
    )
}

export default Menu
