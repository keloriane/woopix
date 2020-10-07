import React,{useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Burger = (props) => {
    const FullMenu = styled.div`
    #menu{
      width: 100vw;
      height: 100vh;
      position: fixed;
      background-color: ${props => props.theme.green};
      font-family: "Futura PT";
      transform: ${({open}) =>open ? 'translateY(0%)': 'translateY(110%)'};
      z-index: 1000;
      display:flex;
      align-items: center;
      justify-content: center;
      
      .menu-content{
        max-width: 400px;
        width: 100%;
        border: 1px solid white;
        height: 500px;
        ul{
        display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
          li{
          opacity: 1 !important;
          a{
          text-decoration: none;
          font-size: 2em;
          color: white;
          font-weight: bold;
          
          text-transform: uppercase;
          &:hover{
            color: ${props => props.theme.blue};
          }
          }
          }
        }
        
        
      }
    }

`

    const [open, setOpen] = useState(false)

    return (
        <>
        <FullMenu  open={open} onClick={() => setOpen(!open)}>
            <div id="menu">
                <div className="menu-content">
                    <ul>
                        <li className={"liste-menu-item"}> <Link>Création de site web</Link> </li>
                        <li className={"liste-menu-item"}><Link>Géstion réseaux sociaux</Link></li>
                        <li className={"liste-menu-item"}> <Link>Autres services</Link> </li>
                        <li className={"liste-menu-item"}> <Link>Contactez nous</Link></li>
                    </ul>
                </div>
            </div>
        </FullMenu>
        <button open={open}>
            Menu
        </button>
            </>
    )
}
export default Burger;