import React from "react";
import styled from "styled-components";
import { Cards } from "../components/Cards";

export const Main = () => {
  return (
    <CenterContainer>
      <h1>Memory Game</h1>
      <Cards />
    </CenterContainer>
  );
};

const CenterContainer = styled.div`
  width: 620px;
  text-align: center;
  margin: auto;
`;
