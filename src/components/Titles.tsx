import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  color: #edcb6e;

  h1 {
    font-size: 5rem;
    font-family: "Fredoka One";
    font-weight: 400;
  }

  @media screen and (max-width: 1500px) {
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 450px) {
  }
`;

interface ITitle {
  title?: string;
  substitle?: string;
}

const Titles: React.FC<ITitle> = (props) => {
  return (
    <Title>
      <h1>{props.title}</h1>
      {props.substitle ? <h2>{props.title}</h2> : <></>}
    </Title>
  );
};

export default Titles;
