import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import Titles from "../components/Titles";

const CollectionCo = styled.div`
  display: flex;
  height: 3300px;
  width: 100%;
  background-color: black;
  align-items: flex-start;
  flex-direction: column;

  div {
    width: 100%;
    background-image: url("collection_back.png");
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .headOf {
      margin-top: -2rem;
      width: 100%;
    }
    .curtainDiv {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .holder {
        width: 100%;
        height: auto;
        z-index: 40;
      }
      div {
        margin-top: -2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .leftImage {
          display: flex;
          z-index: 30;
        }
        .rightImage {
          display: flex;
          z-index: 30;
        }
      }

      .imagesDiv {
        position: absolute;
        height: 900px;
        width: 80%;
        background-image: none;
        z-index: 2;
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);

        .innerImageDiv {
          display: flex;
          z-index: 4;
          margin: auto;
          justify-content: center;
          align-items: center;

          img {
            position: absolute;
            height: auto;
            width: auto;
          }
        }
      }
    }
  }

  .banch {
    z-index: 20;
    position: relative;
    vertical-align: bottom;
    width: 100%;
    background-image: linear-gradient(0deg, black 50%, transparent 50%);
  }

  @media screen and (max-width: 1500px) {
    div {
      .curtainDiv {
        .imagesDiv {
          margin-top: 20rem;
          height: 1200px;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);

          .innerImageDiv {
            img {
              height: 20rem;
              width: 20rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    div {
      .curtainDiv {
        div {
          justify-content: flex-start;
          .leftImage {
            margin-top: 0.5rem;
            height: auto;
            width: 50%;
          }
          .rightImage {
            margin-top: 0.8rem;
            height: auto;
            width: 50%;
          }
        }

        .imagesDiv {
          height: 800px;
          margin-top: 10rem;

          .innerImageDiv {
            img {
              height: 15rem;
              width: 15rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    div {
      .curtainDiv {
        .imagesDiv {
          height: 650px;

          .innerImageDiv {
            img {
              height: 12rem;
              width: 12rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      .curtainDiv {
        div {
          .leftImage {
            margin-top: 0.7rem;
          }
          .rightImage {
            margin-top: 1rem;
          }
        }
        .imagesDiv {
          height: 650px;

          .innerImageDiv {
            img {
              height: 10rem;
              width: 10rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    div {
      .curtainDiv {
        .imagesDiv {
          height: 450px;
          margin-top: 5rem;
          .innerImageDiv {
            img {
              height: 8rem;
              width: 8rem;
            }
          }
        }
      }
    }
  }
`;

const EachImage: React.FC = (props) => {
  let refEachImage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refEachImage.current!, {
      y: 100,
      opacity: 0.1,
      scale: 0.5,
      delay: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: refEachImage.current!,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className={"innerImageDiv"}>
      <img className={"img1"} src={"collection_1.png"}></img>
      <img className={"img2"} src={"collection_cer.png"}></img>
    </div>
  );
};

const images = [
  {
    img: "collection_1.png",
  },
  {
    img: "collection_2.png",
  },
  {
    img: "collection_3.png",
  },
  {
    img: "collection_4.png",
  },
  {
    img: "collection_5.png",
  },
  {
    img: "collection_6.png",
  },
];

function Collection() {
  return (
    <CollectionCo>
      <div>
        <img className={"headOf"} src={"collection_head.png"} />
        <Titles {...{ title: "Collection" }} />

        <div className={"curtainDiv"}>
          <img className={"holder"} src={"cur_holder.png"} />
          <div>
            <img className={"leftImage"} src={"collection_left_cur.png"} />
            <img className={"rightImage"} src={"collection_right_cur.png"} />
          </div>

          <div className={"imagesDiv"}>
            {images.map(() => (
              <EachImage />
            ))}
          </div>
        </div>

        <img className={"banch"} src={"collection_banch.png"} />
      </div>
    </CollectionCo>
  );
}

export default Collection;
