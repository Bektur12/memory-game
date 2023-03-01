import React from "react";
import styled from "styled-components";

export const Card = ({ icon, active, onClick, isFound }) => {
  if (isFound) {
    return (
      <Container>
        <ContainerImage>
          <Image src={icon} />
        </ContainerImage>
      </Container>
    );
  }
  return (
    <Container
      onClick={onClick}
      style={{
        transform: active ? "rotateY(180deg)" : "",
      }}
    >
      <ContainerImage>
        <Image src="https://img.icons8.com/ios/50/000000/question-mark--v1.png" />
      </ContainerImage>
      <Back>{active && <Image src={icon} />}</Back>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.5s Linear;
`;

const Image = styled.img`
  width: 140px;
`;

const ContainerImage = styled.div`
  display: grid;
  place-items: center;
  height: inherit;
  width: inherit;
  border-radius: 10px;
  position: absolute;
`;

const Back = styled.div`
  transform: translateZ(-0.1px) rotateY(180degn);
  border-radius: 10px;
  height: inherit;
  width: inherit;
  display: grid;
  place-items: center;
`;
