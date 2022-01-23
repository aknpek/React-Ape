import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Titles from "../components/Titles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const roadmap_items = [
  {
    id: 1,
    img1: "roadmap_1.png",
    img2: "roadmap_1_item.png",
    text: [
      "First Month",
      "Releasing Legends 1 and 1's (There are in total 10 Legends for pre-sale).",
    ],
  },
  {
    id: 2,
    img1: "roadmap_2.png",
    img2: "roadmap_2_item.png",
    text: [
      "Second Month",
      "Opening community wallet (50% of the royalties go to community wallet)",
    ],
  },
  {
    id: 3,
    img1: "roadmap_3.png",
    img2: "roadmap_3_item.png",
    text: [
      "Third Quarter",
      "Releasing 'Dark' and 'White' Apes in Metaverse (25% airdropped to unique holders) to start Ape Wars.",
    ],
  },
  {
    id: 4,
    img1: "roadmap_4.png",
    img2: "roadmap_4_item.png",
    text: ["Sold Out", "Sweep the floor of Apocalyptic Apes gives back to the community (5 ETH).Free-mint in next project."],
  },
];

interface roadItem {
  id: number;
  img1: string;
  img2: string;
  text: string[];
}

const RoadmapOm = styled.div`
  height: 3000px;
  width: 100%;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: 5rem;
    margin-right: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .imgContainer {
      display: flex;
      -webkit-transition: 0.15s;
      -moz-transition: 0.15s;
      -ms-transition: 0.15s;
      -o-transition: 0.15s;
      transition: 0.15s;

      .img1 {
      }

      .img2 {
        position: absolute;
        -webkit-transition: 0.15s;
        -moz-transition: 0.15s;
        -ms-transition: 0.15s;
        -o-transition: 0.15s;
        transition: 0.15s;
      }
      .img2:hover {
        transform: translateY(-50px) scale(1.1);
        -webkit-transition: 0.15s;
        -moz-transition: 0.15s;
        -ms-transition: 0.15s;
        -o-transition: 0.15s;
        transition: 0.15s;
      }

      .id1 {
        margin-left: -50px;
        margin-top: -210px;
      }

      .id2 {
        margin-left: -50px;
        margin-top: -205px;
      }
      .id3 {
        margin-left: -50px;
        margin-top: -200px;
      }

      .id4 {
        margin-top: -270px;
      }
    }

    .textContainer {
      height: 100%;
      width: 40rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h3 {
        text-align: left;
        font-family: "Fredoka One";
        font-weight: 200;
        line-height: 3.5rem;
        color: white;
        font-size: 2.2rem;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    height: 3400px;
    margin-top: -40rem;
    div {
      margin-top: 2rem;
      margin-bottom: 2rem;
      margin-left: 0rem;
      margin-right: 0rem;
      flex-direction: column;

      .textContainer{
        h3{
          text-align: center;
          line-height: 2.5rem;
          font-size: 1.5rem;

        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    div {
      .imgContainer {
        /* transform: scale(0.8); */

        /* .id1 {
          margin-left: -100px;
          margin-top: -170px;
        }

        .id2 {
          margin-left: -8rem;
          margin-top: -21.5rem;
        }

        .id3 {
          margin-left: -6rem;
          margin-top: -20rem;
        }

        .id4 {
          margin-top: -28.5rem;
        }
      } */
    }
  }

  @media screen and (max-width: 700px) {
    div {
      margin-top: 2rem;
    margin-bottom: 2rem;

      .imgContainer {
        /* transform: scale(0.5); */
      }
      .textContainer{
        width: 60%;
        h3{
        }
      }
    }
  }



  @media screen and (max-width: 500px) {
    height: 3500px;

    div {
      /* margin-top: 2rem;
    margin-bottom: 2rem; */
    margin-right: 0rem;
    margin-left: 0rem;
      width: 100%;

      .imgContainer { 
        transform: scale(0.5);

        @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
            .id1 {
          margin-left: -100px;
          margin-top: -420px;
        }

        .id2 {
          margin-left: -100px;
          margin-top: -420px;
        }

        .id3 {
          margin-left: -100px;
          margin-top: -400px;
        }

        .id4 {
          margin-top: -530px;
        }
      }
     
        }
      }
      .textContainer{
        width: 60%;
        h3{
        }
      }
    }
  }
  
`;

const EachImage: React.FC<roadItem> = (props) => {
  let refEachImage = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(refEachImage.current!, {
  //     y: 20,
  //     opacity: 0.1,
  //     scale: 0.5,
  //     delay: 0,
  //     duration: 0.3,
  //     scrollTrigger: {
  //       trigger: refEachImage.current!,
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // });

  return (
    <div>
      <div className={"imgContainer"}>
        <img className={`img2 id${props.id}`} src={props.img2}></img>
        <img className={"img1"} src={props.img1}></img>

      </div>
      <div className={"textContainer"} ref={refEachImage}>
        {props.text.map((itemInside) => (
          <h3>{itemInside} </h3>
        ))}
      </div>
    </div>
  );
};

function Roadmap() {
  return (
    <RoadmapOm>
      <Titles {...{ title: "Roadmap" }} />
      {roadmap_items.map((item: roadItem) => (
        <EachImage {...item} />
      ))}
    </RoadmapOm>
  );
}

export default Roadmap;
