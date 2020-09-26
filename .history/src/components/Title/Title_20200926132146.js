import React,{useEffect} from 'react'
import styled from "styled-components"
import gsap from "gsap"

const Title = (props) => {
    const TitleMain = styled.div`
    .main-title {
      display: flex;
      font-style: normal;
      align-items: center;
      position: relative;
      width: 100%;
      .title {
        position: absolute;

        h2 {
          font-weight: bold;

          text-transform: uppercase;
          color: #1b065e;
          display: flex;
          align-items: center;
        }
      }
      .number-title {
        position: absolute;

        h2 {
          font-style: normal;

          text-transform: uppercase;
          color: #ececec;
        }
      }
    }
    @media screen and (max-width: 596px){
        .main-title {
            display: flex;
            font-style: normal;
            align-items: center;
            position: relative;
         
            width: 311px;
            height: 72px;
            .title {
              position: absolute;
              left: 81px;
              h2 {
                font-weight: bold;
                font-size: 34px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: #1b065e;
                display: flex;
                align-items: center;
              }
            }
            .number-title {
              position: absolute;

              h2 {
                font-style: normal;
                font-weight: 800;
                font-size: 92.2247px;
                line-height: 107.33%;
                text-transform: uppercase;
                color: #ececec;
              }
            }
          }

    }
    @media screen and (min-width: 596px){
        .main-title {
            display: flex;
            width: 530px;
            height: 160px;
            .number-title {
              h2 {
                font-weight: 800;
                font-size: 144px;
              }
            }
            .title {
              left: 147px;
              h2 {
                font-size: 64px;
                line-height: 107.33%;

                text-transform: uppercase;

                color: #1b065e;
              }
            }
          }
    }
    @media screen and (min-width: 992px){
        .main-title {
            display: flex;
            max-width: 545px;
            width: 100%;
            height: 165px;
            .number-title {
              h2 {
                font-size: 134.475px;
                line-height: 107.33%;
              }
            }
            .title {
              h2 {
                font-size: 59.7665px;
                line-height: 107.33%;
              }
            }
          }
    }
    `
    useEffect(()=>{
        //Split each word from a tag
        let titleArray = [];
        function splitWord(word) {
            return [...word]
            .map(letter => `<span class="chars">${letter}</span>`)
            .join("");
        }
        const words = [...document.querySelectorAll(".text-letter")];
        // eslint-disable-next-line
        words.map(word => {
            word.innerHTML = splitWord(word.textContent);
            const newLetter = [...word.querySelectorAll(".chars")]; 
            // eslint-disable-next-line
            newLetter.map(letter => {
                titleArray.push(letter);
            });
        }); 
        let chars = document.querySelectorAll('.chars')
      
    },[])
    return (
        <TitleMain >
        <div className="main-title">
        <div className="number-title">
            <h2>{props.num}</h2>
        </div>
        <div className="title">
          <h2 className="text-letter">
            {props.firstP} </h2>
            <h2 className="text-letter">{props.secondP}
          </h2>
        </div>
      </div>
        </TitleMain>
    )
}

export default Title
