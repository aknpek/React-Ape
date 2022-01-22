import React from "react";
import styled from "styled-components";

import { ReactComponent as DiscordSvg } from "../data/Discord.svg";
import { ReactComponent as TwitterSvg } from "../data/Twitter.svg";

const Head = styled.div`
  height: 100px;
  width: 100%;
  display: flex;

  background-color: black;
  align-items: center;
  justify-content: space-around;

  .buttonDiv {
    margin-top: 2rem;
    background-color: #edca68;
    width: 12rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;

    h1 {
      font-family: "Fredoka One";
      font-weight: 600;
      font-size: 1.2rem;
      color: black;
      cursor: pointer;
    }
  }

  .connectWalletDiv {
    margin-top: 2rem;

    background-color: #edca68;
    width: 15rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    h1 {
      font-family: "Fredoka One";
      font-weight: 600;
      font-size: 1.2rem;
      color: black;
      cursor: pointer;
    }
  }

  .symbolsDiv {
    margin-top: 2rem;
    svg {
      height: 2rem;
      width: 2rem;
      transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      border-radius: 2rem;
    }
    svg:hover {
      transform: scale(1.2) rotate(360deg);
      cursor: pointer;
      transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
    }
  }

  @media screen and (max-width: 1200px) {
    .buttonDiv {
      display: none;
    }
    .connectWalletDiv {
      margin-left: 10rem;
    }
  }

  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 450px) {
  }
`;

function Header() {
  return (
    <Head>
      <div className="buttonDiv">
        <h1>Home</h1>
      </div>

      <div className="buttonDiv">
        <h1>Collection</h1>
      </div>

      <div className="buttonDiv">
        <h1>Road Map</h1>
      </div>

      <div className="buttonDiv">
        <h1>Crew</h1>
      </div>

      <div className="connectWalletDiv">
        <h1>Connect Wallet</h1>
      </div>

      <div className="symbolsDiv">
        <TwitterSvg />
      </div>

      <div className="symbolsDiv">
        <DiscordSvg />
      </div>
    </Head>
  );
}

export default Header;
