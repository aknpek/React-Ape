import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Enter = styled.div`
  height: 1200px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-top: -10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
      width: auto;
      height: auto;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 900px;

    div {
      img {
        position: absolute;
        width: 60rem;
        height: auto;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    height: 600px;
    div {
      margin-top: 10rem;
      img {
        position: absolute;
        width: 50rem;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 800px) {
    height: 300px;

    div {
      margin-top: 10rem;
      img {
        position: absolute;
        width: 30rem;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 500px) {
    height: 240px;
    div {
      img {
        position: absolute;
        width: 20rem;
        height: auto;
      }
    }
  }
`;

function Enterence() {
  let refPictures = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refPictures.current!, {
      y: 100,
      opacity: 0.4,
      scale: 0.3,
      duration: 0.8,
      delay: 0,
    });
  });

  return (
    <Enter>
      <div>
        <img ref={refPictures} src="enterence_cover.png"></img>
        <img src="enterence_cer.png"></img>
      </div>
    </Enter>
  );
}

export default Enterence;
