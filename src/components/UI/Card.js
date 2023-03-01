import React from "react";
import styled from "styled-components";

export const Card = ({ icon, active, onClick, isFound }) => {
  if (isFound) {
    return (
      <CardMemory>
        <Image src={icon} />
      </CardMemory>
    );
  }
  return (
    <CardMemory
      style={{
        transform: active ? "rotateY(180deg)" : "",
      }}
      onClick={onClick}
    >
      <CardMedia src="https://img.icons8.com/ios/50/000000/question-mark--v1.png" />
      {active && <Image src={icon} />}
    </CardMemory>
  );
};

const CardMemory = styled.div`
  width: 13%;
  height: 200px;
  display: flex;
`;
const Image = styled.img`
  width: 140px;
`;
const CardMedia = styled.img`
  width: 80px;
`;
