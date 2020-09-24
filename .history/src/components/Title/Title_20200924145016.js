import React from 'react'
import styled from "styled-components"

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
            width: 100%;
            max-width: 311px;
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
    return (
        <div className="main-title">
        <div className="number-title">
            <h2>{props.num}</h2>
        </div>
        <div className="title">
          <h2>
            {props.firstP} <br></br>{props.secondP}
          </h2>
        </div>
      </div>
    )
}

export default Title
