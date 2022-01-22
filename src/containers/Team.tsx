import React from "react";
import styled from "styled-components";
import Titles from "../components/Titles";

interface ITeamData {
  img: string;
  title: string;
  subTitle: string;
}

const team: ITeamData[] = [
  {
    img: "team_mem.png",
    title: "Akin",
    subTitle: "Developer",
  },
  {
    img: "team_mem.png",
    title: "Akin",
    subTitle: "Developer",
  },
  {
    img: "team_mem.png",
    title: "Akin",
    subTitle: "Developer",
  },
  {
    img: "team_mem.png",
    title: "Akin",
    subTitle: "Developer",
  },
];

const TeamContainer = styled.div`
  height: 60rem;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    div {
      height: 20rem;
      width: 20rem;
      display: flex;
      flex-direction: row;

      img {
        height: 20rem;
        width: 20rem;
        position: absolute;
      }
      .inner {
        display: flex;
        z-index: 5;
      }
      .outer {
        display: flex;
        z-index: 2;
      }

      div {
        display: flex;
        position: absolute;
        margin-top: 30rem;
        height: 100px;
        flex-direction: column;
        color: #edcb6e;
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    height: 1500px;
    div {
      flex-wrap: wrap;

      div {
        margin-top: 10rem;
        flex: 50%;

        div{
          flex-wrap: initial;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    height: 2500px;
    div{
      div{
        flex: 75%;
      }
    }
  }

  @media screen and (max-width: 450px) {
  }
`;

function Team() {
  return (
    <TeamContainer>
      <Titles {...{ title: "Team", substitle: "" }} />

      <div>
        {team.map((member: ITeamData) => (
          <div>
            <img className="inner" src="team_cer.png"></img>
            <img className="outer" src={member.img}></img>
            <div>
              <h1>{member.title}</h1>
              <h2>{member.subTitle}</h2>
            </div>
          </div>
        ))}
      </div>
    </TeamContainer>
  );
}

export default Team;
