import React, { useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
// import { GlobalContext } from "../context/globalContext";
import { scroller } from "react-scroll";

import { ReactComponent as DiscordSvg } from "../data/Discord.svg";
import { ReactComponent as TwitterSvg } from "../data/Twitter.svg";
// import { toast } from "react-toastify";
// import Discord from '../svgs/Discord';

interface IHeaderDiv {
  closed: number;
  minting?: boolean;
}

const checkLength = (props: IHeaderDiv) => {
  if (props.closed % 2 === 0) {
    return "0px";
  } else {
    return "-500px";
  }
};

export const scrollToSection = (className: string) => {
  scroller.scrollTo(className, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

interface IHeader {
  minting?: boolean;
}

const HeaderDiv = styled.div<IHeaderDiv>`
  position: sticky;
  z-index: 20;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    display: none;
    justify-content: center;
    text-align: center;
  }

  div {
    display: flex;
    width: 60%;
    align-items: center;
    flex-direction: row;
    font-family: "Fredoka One";

    h1 {
      margin-top: 5rem;
      color: black;
      margin-left: 2.5rem;
      width: 200rem;
      height: 3rem;

      background-color: #edcb6e;
      border-radius: 0.5rem;
      ${(props) => (props.minting ? "display: none;" : `display: flex`)};
      justify-content: center;
      align-items: center;
      font-weight: 200;

      font-size: 15px;
      transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
    }
    h1:hover {
      cursor: pointer;
      font-weight: 1000;
      transition: all 0.3s ease;
      color: #260a2c;
      -o-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
    }

    .walletClass {
      display: flex;
    }

    .twitterLogo {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      /* background-color: rgba(255, 255, 255, 0.3); */
      /* backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%); */
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

    .discordLogo {
    }
  }

  @media screen and (max-width: 1200px) {
    div {
      h1 {
        font-size: 15px;
        letter-spacing: 0.2px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    display: block;
    height: 300px;
    justify-content: center;

    h1 {
      display: none;
      width: 500px;
      cursor: pointer;
      transform: translateX(${checkLength});
    }

    .twitterLogo {
      transform: translateX(${checkLength});
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    div {
      /* pointer-events: none; */
      height: 100%;
      width: 100%;
      flex-direction: column;
      h1 {
      }
      h1:hover {
        margin: none;
        transition: none;
        animation: none;
        -o-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        /* box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2); */
      }
    }
  }
  .dropDownContent {
    display: none;
    position: absolute;
    background-color: #121420;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    z-index: 20;
  }

  .dropDownWallet {
    position: relative;
    display: inline-block;
    font-family: "Anton", normal;
    .h1:hover {
      color: yellow;
    }
  }

  .dropDownWallet:hover .dropDownContent {
    display: block;
  }
`;

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Header: React.FC<IHeader> = (props) => {
  //   const { handleConnectWallet, active } =
  //     useContext(GlobalContext);

  const [closed, setClosed] = useState<number>(1);
  const [char, setChar] = useState<string>("+");
  useEffect(() => {
    if (closed % 2 === 0) {
      setChar("💀");
    } else {
      setChar("☠️");
    }
  }, [closed]);

  //   useEffect(() => {
  //     if(!active){
  //       toast("Wallet Not Connected!")
  //     } else{
  //       toast("Wallet Connected, Ready to Mint!")
  //     }
  //   }, [active])
  return (
    <HeaderDiv closed={closed} minting={props.minting}>
      <h1 className={"headerH1"} onClick={() => setClosed(closed + 1)}>
        {char}
      </h1>

      <div>
        <h1 onClick={() => scrollToSection("AboutMe")}>Home</h1>
        <h1 onClick={() => scrollToSection("EnterenceContainer")}>
          Collection
        </h1>
        <h1 onClick={() => scrollToSection("Roadmap")}>Road Map</h1>
        <h1 onClick={() => scrollToSection("TeamsContainer")}>Crew</h1>

        {/* {active ? (
          <h1 className={"walletClass"}>🔥 Connected</h1>
        ) : (
          <h1
            className={"walletClass"}
            onClick={() => handleConnectWallet(true)}
          >
            Connect Wallet
          </h1>
        )} */}

        <h1 className={"walletClass"}>Connect Wallet</h1>

        <div
          className={"twitterLogo"}
          onClick={() => openInNewTab("https://twitter.com/rocknbonesnft")}
        >
          <TwitterSvg />
        </div>
        <div
          className={"twitterLogo"}
          onClick={() => openInNewTab("https://discord.gg/nSjYNyBN")}
        >
          <DiscordSvg />
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
