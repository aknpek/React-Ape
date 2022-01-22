import React from "react";
import styled from "styled-components";
import Titles from "../components/Titles";

const InfoC = styled.div`
  background-color: black;
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10rem;

  div {
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-around;

    .picComponent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;

      img {
      }

      div {
        margin: 2rem;
        display: flex;
        background-color: #edcb6e;
        height: 4rem;
        width: 30rem;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;

        h1 {
          font-size: 2rem;
          width: 100%;
          text-align: center;
          cursor: default;
        }
      }
    }

    .infoContainer {
      text-align: left;
      color: white;
      font-weight: 200;
      font-size: 0.8rem;
      line-height: 4rem;

      h1 {
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    height: 1400px;
    div {
      flex-direction: column;
      align-items: center;
      .infoContainer {
        text-align: center;
      }
    }

    @media screen and (max-width: 1000px) {
      height: 1500px;
      div {
        .picComponent {
          img {
            width: 30rem;
            height: auto;
          }
        }
        .infoContainer {
          font-size: 0.8rem;
          line-height: 3rem;
        }
      }
    }

    @media screen and (max-width: 700px) {
      height: 1400px;
      div {
        .picComponent {
          img {
            width: 25rem;
            height: auto;
          }

          div {
            height: 3rem;
            width: 80%;
            h1 {
              font-size: 1.2rem;
            }
          }
        }
      }
    }

    @media screen and (max-width: 700px) {
      height: 1200px;
      div {
        .picComponent {
          img {
            width: 100%;
            height: auto;
          }
        }
        .infoContainer{
          h1{
            font-size: 1.2rem;
            line-height: 2rem;
          }
        }
      }
    }
  }
`;

const info_text =
  "OG Apes is a collection of 3000 Legendary Apes -unique digital collectibles living on the Ethereum Blockchain. Once upon a time, Apes were born to change the history of NFTs forever. They have lived and raised within Ethereum Blockchain. Now it is time for them to tell their story to all Apes about their LEGENDS.";

function Info() {
  return (
    <InfoC>
      <Titles {...{ title: "Why buy GA Apes?" }} />
      <div>
        <div className="picComponent">
          <img src="info_pic.png" />
          <div>
            <h1>MINTING SOON</h1>
          </div>
        </div>

        <div className="infoContainer">
          <h1>{info_text}</h1>
        </div>
      </div>
    </InfoC>
  );
}

export default Info;
